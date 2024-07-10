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
  const { socket_id, channel_name } = req.body;

  try {
    const auth = pusher.authorizeChannel(socket_id, channel_name);
    res.send(auth);
  } catch (error) {
    res.status(500).send({ message: error});
  }
}