// server/api/join.ts
import { NextApiRequest, NextApiResponse } from 'next';
import Pusher from 'pusher';

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.PUSHER_CLUSTER!,
  useTLS: true,
});

let players = new Map<string, Set<string>>();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { gameId, playerId } = req.body as { gameId: string; playerId: string };

  if (!players.has(gameId)) {
    players.set(gameId, new Set());
  }

  const gamePlayers = players.get(gameId)!;
  gamePlayers.add(playerId);

  if (gamePlayers.size === 2) {
    await pusher.trigger(`private-game-${gameId}`, 'game-full', {});
  }

  res.status(200).json({ message: 'Player joined', players: gamePlayers.size });
}
