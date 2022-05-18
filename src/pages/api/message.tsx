import type { NextApiRequest, NextApiResponse } from 'next'

type IResponse = {
  responseCode?: number
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  if (req.method === 'POST') {
    const response = await sendTeleMessage(req.body.message)

    if (response.ok) {
      res.status(200).json({ responseCode: 200, message: 'Success' })
    } else {
      res.status(500).json({
        responseCode: response.error_code ? response.error_code : 500,
        message: response.description
          ? response.description
          : 'Connection Error',
      })
    }
  } else
    res.status(405).json({ responseCode: 405, message: 'Method Not Allowed' })
}

async function sendTeleMessage(message: string) {
  const url =
    'https://api.telegram.org/bot5031763830:AAH1tg5W1X5GMG5sg6RRipTxNwbYBSChe2E/sendMessage?'
  const querystring = new URLSearchParams({
    chat_id: '104106113',
    text: message,
  })
  const response = await fetch(url + querystring)

  return response.json()
}
