import React from 'react'
import { BellIcon, ChatIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import SearchBox from './SearchBox'

function Header() {
  return (
    <div className=" bg-[#232144]">
      <div className="container mx-auto  flex max-w-5xl flex-col">
        <img src="/banner.png" alt="" className=" h" />
        <div className=" textV mx-2 flex items-center border border-gray-900 bg-[#2d2a49]   font-mono text-sm	  font-thin  shadow-sm ">
          <Link href="/">
            <div className=" cursor-pointer border-r  border-gray-900 p-3 hover:bg-[#3c3963]">
              <p className=" ">หน้าเเรก</p>
            </div>
          </Link>
          {/* <div className=" cursor-pointer border-r  border-gray-900 p-3 hover:bg-[#3c3963]">
            <p className="  ">เลือกห้อง</p>
          </div> */}
          <Link href="/tags">
            <div className=" cursor-pointer border-r  border-gray-900 p-3 hover:bg-[#3c3963]">
              <p className="  ">เเท็ก</p>
            </div>
          </Link>
          <div className=" hidden cursor-pointer  border-r border-gray-900 p-3 hover:bg-[#3c3963] lg:inline">
            <p className="  ">กิจกรรม</p>
          </div>
          <div className=" hidden cursor-pointer  border-r border-gray-900 p-3 hover:bg-[#3c3963] lg:inline">
            <p className="  ">เเลกพอยต์</p>
          </div>
          <div className=" hidden cursor-pointer  border-r border-gray-900 p-3 hover:bg-[#3c3963] lg:inline">
            <p className="  ">อื่นๆ</p>
          </div>
          <SearchBox />
          <Link href="/forum/new_topic">
            <div className="  hidden  cursor-pointer items-center space-x-1 border-r border-gray-900  p-3 hover:bg-[#3c3963] md:flex">
              <ChatIcon className="h-5 w-5" />
              <p className="  ">ตั้งกระทู้</p>
            </div>
          </Link>
          <div className=" hidden cursor-pointer items-center  space-x-1 border-r border-gray-900 p-3 hover:bg-[#3c3963]  md:flex">
            <BellIcon className="h-5 w-5" />
          </div>
          <div className=" cursor-pointer  px-2 ">
            <p className="  ">
              ผู้เยี่ยมชม
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
