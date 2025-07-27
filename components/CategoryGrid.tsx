import React from 'react'
import Link from 'next/link'

interface Category {
  id: number
  name: string
  name_en: string
  slug: string
  description: string
  link_url: string
  room_icon_url: string
  is_pinned: boolean
  pinned_time: string | null
  order: number | null
}

const categories: Category[] = [
  {"id":2,"name":"ก้นครัว","name_en":"food","slug":"food","description":"ร้านอาหาร สูตรอาหาร อาหารคาว อาหารหวาน เบเกอรี่ ไอศกรีม","link_url":"https://pantip.com/forum/food","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-food.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":28,"name":"กรีนโซน","name_en":"greenzone","slug":"greenzone","description":"อนุรักษ์สิ่งแวดล้อม อนุรักษ์พลังงาน Green Living การออกแบบเพื่อสิ่งแวดล้อม ผลิตภัณฑ์รักษ์โลก เกษตรอินทรีย์","link_url":"https://pantip.com/forum/greenzone","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-greenzone.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":35,"name":"กรุงโซล","name_en":"korea","slug":"korea","description":"K-POP ซีรีส์เกาหลี นักแสดงเกาหลี อาหารเกาหลี เที่ยวเกาหลี แฟชั่นเกาหลี ภาษาเกาหลี","link_url":"https://pantip.com/forum/korea","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-korea.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":1,"name":"กล้อง","name_en":"camera","slug":"camera","description":"กล้องถ่ายรูป กล้อง DSLR กล้องวิดีโอ เทคนิคการถ่ายรูป","link_url":"https://pantip.com/forum/camera","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-camera.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":30,"name":"การ์ตูน","name_en":"cartoon","slug":"cartoon","description":"การ์ตูนญี่ปุ่น การ์ตูนไทย การ์ตูนฝรั่ง อนิเมะ วาดการ์ตูน ของสะสมจากการ์ตูน คอสเพลย์","link_url":"https://pantip.com/forum/cartoon","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-cartoon.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":36,"name":"แก็ดเจ็ต","name_en":"gadget","slug":"gadget","description":"Gadget, Action Camera, Drone, Game Console, Smartwatch, Smartband","link_url":"https://pantip.com/forum/gadget","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-gadget.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":3,"name":"แกลเลอรี่","name_en":"gallery","slug":"gallery","description":"ภาพถ่ายบุคคล ภาพถ่ายทิวทัศน์ ภาพถ่ายมาโคร","link_url":"https://pantip.com/forum/gallery","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-gallery.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":4,"name":"ไกลบ้าน","name_en":"klaibann","slug":"klaibann","description":"เรียนต่อต่างประเทศ ทำงานต่างประเทศ วีซ่า","link_url":"https://pantip.com/forum/klaibann","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-klaibann.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":5,"name":"จตุจักร","name_en":"jatujak","slug":"jatujak","description":"สัตว์เลี้ยง สุนัข แมว ต้นไม้ จัดสวน ของสะสม งานฝีมือ เกษตรกรรม","link_url":"https://pantip.com/forum/jatujak","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-jatujak.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":6,"name":"เฉลิมกรุง","name_en":"chalermkrung","slug":"chalermkrung","description":"นักร้องนักดนตรี เพลง เครื่องดนตรี คอนเสิร์ต มิวสิควิดีโอ","link_url":"https://pantip.com/forum/chalermkrung","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-chalermkrung.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":7,"name":"เฉลิมไทย","name_en":"chalermthai","slug":"chalermthai","description":"ภาพยนตร์ ดาราภาพยนตร์ ค่ายหนัง เทศกาลหนัง หนังสั้น","link_url":"https://pantip.com/forum/chalermthai","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-chalermthai.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":8,"name":"ชานเรือน","name_en":"family","slug":"family","description":"ครอบครัว ตั้งครรภ์ ตั้งชื่อลูก การเลี้ยงลูก การสอนลูก","link_url":"https://pantip.com/forum/family","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-family.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":9,"name":"ชายคา","name_en":"home","slug":"home","description":"บ้าน คอนโดมิเนียม ตกแต่งบ้าน เฟอร์นิเจอร์ เครื่องใช้ไฟฟ้า เครื่องครัว","link_url":"https://pantip.com/forum/home","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-home.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":10,"name":"ซิลิคอนวัลเลย์","name_en":"siliconvalley","slug":"siliconvalley","description":"คอมมือใหม่ อินเทอร์เน็ต ซอฟต์แวร์ ฮาร์ดแวร์ เกม เขียนโปรแกรม Gadget","link_url":"https://pantip.com/forum/siliconvalley","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-siliconvalley.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":34,"name":"ดิโอลด์สยาม","name_en":"theoldsiam","slug":"theoldsiam","description":"ผู้สูงอายุ สุขภาพผู้สูงอายุ ชีวิตหลังเกษียณ สิทธิผู้สูงอายุ ท่องเที่ยวผู้สูงอายุ","link_url":"https://pantip.com/forum/theoldsiam","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-theoldsiam.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":11,"name":"โต๊ะเครื่องแป้ง","name_en":"beauty","slug":"beauty","description":"เครื่องสำอาง เสริมสวย แฟชั่น เครื่องประดับ ลดความอ้วน","link_url":"https://pantip.com/forum/beauty","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-beauty.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":12,"name":"ถนนนักเขียน","name_en":"writer","slug":"writer","description":"แต่งนิยาย เรื่องสั้น กลอน นิทาน","link_url":"https://pantip.com/forum/writer","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-writer.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":13,"name":"บลูแพลนเน็ต","name_en":"blueplanet","slug":"blueplanet","description":"เที่ยวไทย เที่ยวต่างประเทศ ทะเล ภูเขา เกาะ น้ำตก ดำน้ำ สายการบิน","link_url":"https://pantip.com/forum/blueplanet","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-blueplanet.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":31,"name":"บางขุนพรหม","name_en":"tvshow","slug":"tvshow","description":"ละคร นักแสดง ซีรี่ส์ รายการโทรทัศน์ สถานีโทรทัศน์","link_url":"https://pantip.com/forum/tvshow","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-tvshow.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":32,"name":"บางรัก","name_en":"bangrak","slug":"bangrak","description":"ความรัก แต่งงาน พรีเวดดิ้ง ปัญหาชีวิตคู่","link_url":"https://pantip.com/forum/bangrak","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-bangrak.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":33,"name":"พรหมชาติ","name_en":"horoscope","slug":"horoscope","description":"ดูดวง ฮวงจุ้ย ไพ่ยิปซี ทำนายฝัน พระเครื่อง","link_url":"https://pantip.com/forum/horoscope","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-horoscope.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":14,"name":"พันทิป","name_en":"pantip","slug":"pantip","description":"ข้อเสนอแนะถึงพันทิป วิธีการใช้งานพันทิป กิจกรรมพันทิป","link_url":"https://pantip.com/forum/pantip","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-pantip.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":15,"name":"ภูมิภาค","name_en":"region","slug":"region","description":"ภาคเหนือ ภาคอีสาน ภาคกลาง ภาคตะวันออก ภาคตะวันตก ภาคใต้","link_url":"https://pantip.com/forum/region","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-region.svg","is_pinned":false,"pinned_time":null,"order":null},
  {"id":16,"name":"มาบุญครอง","name_en":"mbk","slug":"mbk","description":"โทรศัพท์มือถือ Smartphone Tablet iOS Android","link_url":"https://pantip.com/forum/mbk","room_icon_url":"https://ptcdn.info/mobile/icon_room/pt-forum-mbk.svg","is_pinned":false,"pinned_time":null,"order":null}
]

function CategoryGrid() {
  // Display only first 24 categories (2 rows of 12 each)
  const displayCategories = categories.slice(0, 24)

  return (
    <div className="mx-auto mt-5 max-w-4xl">
      <div className="rounded-md border-[1px] border-gray-800 bg-[#353156] shadow-md">
        <div className="flex justify-between border-b border-[#7976a0] bg-[#1f1d33] p-2">
          <p className="text-yellow-400">ห้องสนทนา</p>
          <p className="text-[#b39dbb]">ดูทั้งหมด</p>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-6 gap-3 md:grid-cols-12">
            {displayCategories.map((category) => (
              <div
                key={category.id}
                className="group cursor-pointer"
                title={category.description}
              >
                <div className="flex flex-col items-center space-y-2 rounded-lg p-2 transition-colors duration-200 hover:bg-[#2c2a49]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#44416f]">
                    <img
                      src={category.room_icon_url}
                      alt={category.name}
                      className="h-8 w-8"
                      onError={(e) => {
                        // Fallback icon if image fails to load
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.nextElementSibling!.style.display = 'block'
                      }}
                    />
                    <div 
                      className="hidden h-8 w-8 items-center justify-center rounded bg-[#62698d] text-xs text-white"
                      style={{ display: 'none' }}
                    >
                      {category.name.charAt(0)}
                    </div>
                  </div>
                  <span className="text-center text-xs text-[#d2cde1] group-hover:text-yellow-400">
                    {category.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryGrid