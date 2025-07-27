import Link from 'next/link'
import React from 'react'
import { mockTags } from '../lib/mockData'

function SideBar() {
  // Use mock tags directly, sorted by count (popularity)
  const popularTags = mockTags
    .sort((a, b) => (b.count?.count || 0) - (a.count?.count || 0))
    .slice(0, 10)
  return (
    <div className="sticky top-3 z-50 hidden h-fit w-[280px] overflow-y-hidden rounded-md border-[1px] border-[#44416f] shadow-md  md:inline">
      {/* Header */}
      <div className="flex bg-[#1f1d33]  text-[#fbb546] ">
        <div className=" border-t-2 border-yellow-400 bg-[#3c3963] py-3 px-2">
          เเท็กฮิต
        </div>
        <div className="flex-1  border-l border-[#44416f]"></div>
      </div>
      {/* Content */}
      {popularTags.map((tag) => (
        <Link key={tag.tag} href={`/tag/${tag.tag}`} className="cursor-pointer border-b border-[#44416f] p-3 text-sm text-gray-400 last:border-0 hover:bg-[#2d2a49] block">
          <div className="flex justify-between items-center">
            <span>{tag.tag}</span>
            <span className="text-xs text-gray-500 bg-[#44416f] px-2 py-1 rounded">
              {tag.count?.count || 0}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default SideBar
