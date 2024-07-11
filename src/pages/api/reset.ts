import { NextApiRequest, NextApiResponse } from 'next';
import Pusher from 'pusher';

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.PUSHER_CLUSTER!,
  useTLS: true,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { gameId } = req.body;
  console.log('this is the gameId: ', gameId);

  await pusher.trigger(`private-game-${gameId}`, 'reset-game', {});

  res.status(200).end();
}
