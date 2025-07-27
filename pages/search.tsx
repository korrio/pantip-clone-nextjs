import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import { SearchIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid'
import ReactTimeago from 'react-timeago'

interface SearchResult {
  id: string
  title: string
  detail?: string
  comment?: string
  url: string
  author_name: string
  author_url: string
  created_time: string
  total_comment: number
  tags: any[]
  rooms: string[]
  cover_img?: string
}

interface SearchResponse {
  success: boolean
  data: SearchResult[]
  total: string
  last_page: boolean
}

interface SearchPageProps {
  initialResults?: SearchResponse
  query?: string
  error?: string
}

const Search = ({ initialResults, query: initialQuery, error }: SearchPageProps) => {
  const router = useRouter()
  const [query, setQuery] = useState(initialQuery || '')
  const [results, setResults] = useState<SearchResponse | null>(initialResults || null)
  const [loading, setLoading] = useState(false)
  const [searchError, setSearchError] = useState(error || '')

  const searchAPI = async (searchQuery: string) => {
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ q: searchQuery }),
      })

      if (!response.ok) {
        throw new Error('Search failed')
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Search error:', error)
      throw error
    }
  }

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) return

    setLoading(true)
    setSearchError('')
    
    try {
      const searchResults = await searchAPI(searchQuery)
      setResults(searchResults)
      
      // Update URL without page reload
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`, undefined, { shallow: true })
    } catch (error) {
      setSearchError('เกิดข้อผิดพลาดในการค้นหา กรุณาลองใหม่อีกครั้ง')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch(query)
  }

  return (
    <div className="mx-auto mt-8 max-w-4xl px-4">
      <NextSeo
        title={query ? `ผลการค้นหา: ${query} - Pantip` : 'ค้นหา - Pantip'}
        description={query ? `ผลการค้นหาสำหรับ "${query}" ในชุมชน Pantip` : 'ค้นหากระทู้และความคิดเห็นใน Pantip'}
      />

      {/* Search Form */}
      <div className="mb-8">
        <form onSubmit={handleSubmit} className="flex gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ค้นหากระทู้ ความคิดเห็น หรือหัวข้อที่สนใจ..."
              className="w-full px-4 py-3 pl-12 bg-[#193365] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
            />
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="px-6 py-3 bg-[#55832e] text-white rounded-lg hover:bg-[#50752f] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'กำลังค้นหา...' : 'ค้นหา'}
          </button>
        </form>
      </div>

      {/* Error Message */}
      {searchError && (
        <div className="mb-6 p-4 bg-red-900 border border-red-700 rounded-lg text-red-100">
          {searchError}
        </div>
      )}

      {/* Search Results */}
      {results && !loading && (
        <div>
          {/* Results Header */}
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-xl font-bold text-yellow-400">
              ผลการค้นหา: "{initialQuery || query}"
            </h1>
            <p className="text-gray-400 text-sm">
              {results.total}
            </p>
          </div>

          {/* Results List */}
          <div className="space-y-4">
            {results.data.length === 0 ? (
              <div className="text-center py-12">
                <QuestionMarkCircleIcon className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-300 mb-2">ไม่พบผลลัพธ์</h3>
                <p className="text-gray-500">ลองค้นหาด้วยคำอื่น หรือตรวจสอบการสะกดคำ</p>
              </div>
            ) : (
              results.data.map((result) => (
                <div
                  key={result.id}
                  className="bg-[#193365] border border-gray-600 rounded-lg p-6 hover:bg-[#254b8b] cursor-pointer transition-colors"
                  onClick={() => window.open(result.url, '_blank')}
                >
                  {result.cover_img && (
                    <div className="mb-4">
                      <img 
                        src={result.cover_img} 
                        alt="" 
                        className="h-16 w-16 cursor-pointer object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="mb-3">
                    <h2 className="text-lg font-semibold text-yellow-400 mb-2 line-clamp-2">
                      {result.title.replace(/\{\{em\}\}/g, '').replace(/\{\{eem\}\}/g, '')}
                    </h2>
                    <p className="text-gray-300 text-sm line-clamp-3">
                      {result.detail || result.comment || ''}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <span className="text-[#5d9dd1]">{result.author_name}</span>
                      <span className="text-gray-500">
                        <ReactTimeago date={new Date(parseInt(result.created_time) * 1000)} />
                      </span>
                      {result.rooms && result.rooms.length > 0 && (
                        <span className="px-2 py-1 bg-[#0e2d61] border border-[#254b8b] text-gray-300 rounded text-xs">
                          {result.rooms[0]}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-4 text-gray-500">
                      <span>{result.total_comment} ความคิดเห็น</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination Info */}
          {results.data.length > 0 && (
            <div className="mt-8 text-center text-sm text-gray-500">
              แสดง {results.data.length} ผลลัพธ์ • {results.total}
            </div>
          )}
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-400">กำลังค้นหา...</p>
        </div>
      )}

      {/* Initial State */}
      {!results && !loading && !searchError && (
        <div className="text-center py-12">
          <SearchIcon className="h-16 w-16 text-gray-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-300 mb-2">ค้นหาใน Pantip</h3>
          <p className="text-gray-500">พิมพ์คำที่ต้องการค้นหาแล้วกดปุ่มค้นหา</p>
        </div>
      )}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { q } = context.query
  const query = Array.isArray(q) ? q[0] : q

  if (!query) {
    return {
      props: {}
    }
  }

  try {
    // Call our API route for server-side search
    const protocol = context.req.headers['x-forwarded-proto'] || 'http'
    const host = context.req.headers.host
    const baseUrl = `${protocol}://${host}`
    
    const response = await fetch(`${baseUrl}/api/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ q: query }),
    })

    if (!response.ok) {
      throw new Error('Search failed')
    }

    const results = await response.json()

    return {
      props: {
        initialResults: results,
        query
      }
    }
  } catch (error) {
    console.error('Server-side search error:', error)
    
    return {
      props: {
        query,
        error: 'เกิดข้อผิดพลาดในการค้นหา'
      }
    }
  }
}

export default Search