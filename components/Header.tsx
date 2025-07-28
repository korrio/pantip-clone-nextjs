import React from 'react'
import { BellIcon, ChatIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import SearchBox from './SearchBox'

function Header() {
  return (
    <header className="bg-[#232144]" role="banner">
      <div className="container mx-auto flex max-w-5xl flex-col">
        <Image 
          src="/banner.png" 
          alt="Pantip Logo" 
          width={1200} 
          height={120} 
          priority
          className="h-auto w-full"
        />
        <nav className="textV mx-2 flex items-center border border-gray-900 bg-[#2d2a49] font-mono text-sm font-thin shadow-sm" role="navigation" aria-label="Main navigation">
          <Link href="/" className="cursor-pointer border-r border-gray-900 p-3 hover:bg-[#3c3963] block" aria-label="หน้าแรก">
            หน้าแรก
          </Link>
          
          <Link href="/tags" className="cursor-pointer border-r border-gray-900 p-3 hover:bg-[#3c3963] block" aria-label="แท็ก">
            แท็ก
          </Link>
          
{/*          <button className="hidden cursor-pointer border-r border-gray-900 p-3 hover:bg-[#3c3963] lg:inline" aria-label="กิจกรรม">
            กิจกรรม
          </button>
          
          <button className="hidden cursor-pointer border-r border-gray-900 p-3 hover:bg-[#3c3963] lg:inline" aria-label="แลกพอยต์">
            แลกพอยต์
          </button>*/}
          
          <Link href="/remotion" className="hidden cursor-pointer border-r border-gray-900 p-3 hover:bg-[#3c3963] lg:inline" aria-label="Claude Animation">
            🎬 Claude
          </Link>
          
          <Link href="/pantip-remotion" className="hidden cursor-pointer border-r border-gray-900 p-3 hover:bg-[#3c3963] lg:inline" aria-label="Pantip Animation">
            🇹🇭 Pantip
          </Link>
          
          <button className="hidden cursor-pointer border-r border-gray-900 p-3 hover:bg-[#3c3963] lg:inline" aria-label="อื่นๆ">
            อื่นๆ
          </button>
          
          <SearchBox />
          
          <Link href="/forum/new_topic" className="hidden cursor-pointer items-center space-x-1 border-r border-gray-900 p-3 hover:bg-[#3c3963] md:flex" aria-label="ตั้งกระทู้">
            <ChatIcon className="h-5 w-5" aria-hidden="true" />
            <span>ตั้งกระทู้</span>
          </Link>
          
          <button className="hidden cursor-pointer items-center space-x-1 border-r border-gray-900 p-3 hover:bg-[#3c3963] md:flex" aria-label="การแจ้งเตือน">
            <BellIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          
          <div className="cursor-pointer px-2" role="status" aria-label="สถานะผู้ใช้">
            <span>ผู้เยี่ยมชม</span>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
