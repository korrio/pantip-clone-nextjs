import React, { useState } from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-3 flex flex-1 items-center space-x-2 border-r border-gray-900 bg-[#44416f] p-1 shadow-inner">
      <input
        type="text"
        placeholder="ค้นหาบน Pantip"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-1 bg-transparent outline-none text-white placeholder-gray-300"
      />
      <button type="submit" className="p-1">
        <SearchIcon className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer" />
      </button>
    </form>
  )
}

export default SearchBox