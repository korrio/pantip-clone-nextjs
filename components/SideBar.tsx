import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SEARCH_TAGS } from '../graphql/quereis'
import { Tag } from '../lib/mockData'

function SideBar() {
  const [tags, setTags] = useState<Tag[]>([])

  useEffect(() => {
    const loadTags = async () => {
      try {
        const { searchTagWithLimit } = await SEARCH_TAGS('', 10)
        setTags(searchTagWithLimit)
      } catch (error) {
        console.error('Error loading tags:', error)
      }
    }
    loadTags()
  }, [])
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
      {tags?.map((tag) => (
        <Link key={tag.tag} href={`/tag/${tag.tag}`} className="cursor-pointer border-b border-[#44416f] p-3 text-sm text-gray-400 last:border-0 hover:bg-[#2d2a49] block">
          {tag.tag}
        </Link>
      ))}
    </div>
  )
}

export default SideBar
