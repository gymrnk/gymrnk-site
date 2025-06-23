import { NextApiRequest, NextApiResponse } from 'next'
import { revalidatePath } from 'next/cache'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Revalidate blog pages when content changes
    await revalidatePath('/blog')
    await revalidatePath('/blog/[slug]')
    
    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).json({ message: 'Error revalidating' })
  }
}
