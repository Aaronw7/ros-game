// src/pages/api/move.ts
import { NextApiRequest, NextApiResponse } from 'next';
import Pusher from 'pusher';

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.PUSHER_CLUSTER!,
  useTLS: true,
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { gameId, player, move } = req.body;
    pusher.trigger(`game-${gameId}`, 'move-made', { player, move });
    res.status(200).end();
  } else {
    res.status(405).end();
  }
}