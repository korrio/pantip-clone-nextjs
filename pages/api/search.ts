import type { NextApiRequest, NextApiResponse } from 'next'

interface SearchRequestBody {
  q: string
}

interface SearchResponse {
  success: boolean
  data: any[]
  total: string
  last_page: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchResponse | { error: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { q }: SearchRequestBody = req.body

  if (!q || typeof q !== 'string' || q.trim().length === 0) {
    return res.status(400).json({ error: 'Search query is required' })
  }

  try {
    const searchPayload = {
      keyword: q.trim(),
      order: "last_ts",
      page: 1,
      limit: 20,
      type: 1
    }

    const response = await fetch('https://pantip.com/api/search-service/search/getresult', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9,th;q=0.8',
        'Content-Type': 'application/json',
        'Origin': 'https://pantip.com',
        'Referer': 'https://pantip.com/',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
        'ptauthorize': 'Basic dGVzdGVyOnRlc3Rlcg=='
      },
      body: JSON.stringify(searchPayload)
    })

    if (!response.ok) {
      console.error('Pantip API error:', response.status, response.statusText)
      throw new Error(`Pantip API responded with status: ${response.status}`)
    }

    const data = await response.json()

    // Return the response as-is since it already matches our interface
    res.status(200).json(data)
  } catch (error) {
    console.error('Search API error:', error)
    
    // Return mock data as fallback if API fails
    const mockResponse: SearchResponse = {
      success: true,
      data: [
        {
          id: "mock_1",
          title: `ผลการค้นหาจำลองสำหรับ "${q}"`,
          detail: "ขออภัย ระบบค้นหาไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ในขณะนี้ นี่คือข้อมูลจำลองเพื่อแสดงการทำงานของระบบ",
          url: "#",
          author_name: "ระบบ",
          author_url: "#",
          created_time: Math.floor(Date.now() / 1000).toString(),
          total_comment: 0,
          tags: [],
          rooms: ["ทั่วไป"]
        }
      ],
      total: "พบ 1 กระทู้",
      last_page: true
    }

    res.status(200).json(mockResponse)
  }
}