// Mock data types
export interface Tag {
  id: string
  tag: string
  created_at: string
  username: string
  count?: { count: number }
}

export interface Announcement {
  id: string
  title: string
  description: string
  image?: string
  url?: string
  created_at: string
}

export interface Category {
  id: string
  name: string
  description: string
  color: string
  icon?: string
}

export interface Comment {
  id: string
  body: string
  created_at: string
  email: string
  username: string
  votes: Vote[]
}

export interface Vote {
  id: string
  email: string
}

export interface Post {
  id: string
  title: string
  body: string
  featured: string
  tag_id: string
  username: string
  created_at: string
  email: string
  profile: string
  tag: Tag
  comments: Comment[]
  votes: Vote[]
}

// Mock data
export const mockTags: Tag[] = [
  {
    id: '1',
    tag: 'เทคโนโลยี',
    created_at: '2024-01-15T10:30:00Z',
    username: 'techguru',
    count: { count: 3 }
  },
  {
    id: '2', 
    tag: 'บันเทิง',
    created_at: '2024-01-14T15:45:00Z',
    username: 'movie_lover',
    count: { count: 3 }
  },
  {
    id: '3',
    tag: 'กีฬา',
    created_at: '2024-01-13T09:20:00Z',
    username: 'sportsfan',
    count: { count: 3 }
  },
  {
    id: '4',
    tag: 'อาหาร',
    created_at: '2024-01-12T16:10:00Z',
    username: 'foodie123',
    count: { count: 3 }
  },
  {
    id: '5',
    tag: 'ท่องเที่ยว',
    created_at: '2024-01-11T11:55:00Z',
    username: 'traveler',
    count: { count: 3 }
  }
]

export const mockPosts: Post[] = [
  // เทคโนโลยี posts
  {
    id: '1',
    title: 'แนะนำเทคโนโลยี AI ใหม่ล่าสุด',
    body: 'ในปี 2024 เทคโนโลยี AI ได้พัฒนาไปอย่างรวดเร็ว มีการนำมาใช้ในหลายด้าน ทั้งการแพทย์ การศึกษา และธุรกิจ...',
    featured: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    tag_id: '1',
    username: 'techguru',
    created_at: '2024-01-20T14:30:00Z',
    email: 'techguru@example.com',
    profile: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    tag: mockTags[0],
    comments: [
      {
        id: '1',
        body: 'ข้อมูลดีมาก ขอบคุณสำหรับการแชร์',
        created_at: '2024-01-20T15:00:00Z',
        email: 'reader1@example.com',
        username: 'reader1',
        votes: []
      }
    ],
    votes: [
      { id: '1', email: 'voter1@example.com' },
      { id: '2', email: 'voter2@example.com' }
    ]
  },
  {
    id: '4',
    title: 'รีวิว iPhone 15 Pro Max ใช้งานจริง',
    body: 'หลังจากใช้งาน iPhone 15 Pro Max มา 2 เดือน อยากมาแชร์ประสบการณ์การใช้งานจริง ทั้งจุดดีและจุดที่ควรปรับปรุง...',
    featured: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800',
    tag_id: '1',
    username: 'iphonereview',
    created_at: '2024-01-19T16:20:00Z',
    email: 'iphonereview@example.com',
    profile: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100',
    tag: mockTags[0],
    comments: [
      {
        id: '4',
        body: 'กล้องดีจริงมั้ย เทียบกับ Samsung ล่าสุด',
        created_at: '2024-01-19T17:00:00Z',
        email: 'samsung_fan@example.com',
        username: 'samsung_fan',
        votes: []
      },
      {
        id: '5',
        body: 'แบตเตอรี่ทนขนาดไหน ใช้หนักๆ อยู่ได้กี่ชั่วโมง',
        created_at: '2024-01-19T18:30:00Z',
        email: 'battery_concern@example.com',
        username: 'battery_concern',
        votes: []
      }
    ],
    votes: [
      { id: '3', email: 'tech1@example.com' },
      { id: '4', email: 'tech2@example.com' },
      { id: '5', email: 'tech3@example.com' }
    ]
  },
  {
    id: '5',
    title: 'ปัญหา Windows 11 Update ล่าสุด',
    body: 'มีใครเจอปัญหากับ Windows 11 version ล่าสุดมั้ย คอมค้าง Blue Screen บ่อยมาก หลังจาก update...',
    featured: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800',
    tag_id: '1',
    username: 'windowsuser',
    created_at: '2024-01-18T10:15:00Z',
    email: 'windowsuser@example.com',
    profile: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
    tag: mockTags[0],
    comments: [
      {
        id: '6',
        body: 'ผมเจอเหมือนกัน แก้โดยการ rollback driver graphics card',
        created_at: '2024-01-18T11:00:00Z',
        email: 'techsolver@example.com',
        username: 'techsolver',
        votes: [{ id: '6', email: 'helpful1@example.com' }]
      }
    ],
    votes: [{ id: '7', email: 'problem_sharer@example.com' }]
  },

  // บันเทิง posts
  {
    id: '2',
    title: 'รีวิวหนังใหม่ที่น่าสนใจ',
    body: 'หนังเรื่องล่าสุดที่เข้าฉายในโรงภาพยนตร์ มีเนื้อเรื่องที่น่าติดตาม และการแสดงที่ยอดเยี่ยม...',
    featured: 'https://images.unsplash.com/photo-1489599843284-d2f8b5e6a6a9?w=800',
    tag_id: '2',
    username: 'movie_lover',
    created_at: '2024-01-19T20:15:00Z',
    email: 'movielover@example.com',
    profile: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    tag: mockTags[1],
    comments: [],
    votes: [
      { id: '8', email: 'voter3@example.com' }
    ]
  },
  {
    id: '6',
    title: 'แนะนำซีรีส์เกาหลีน่าดู 2024',
    body: 'รวมซีรีส์เกาหลีที่กำลังฮิตและน่าติดตามในปี 2024 มีทั้งแนวโรแมนติก แอคชั่น และ thriller...',
    featured: 'https://images.unsplash.com/photo-1594736797933-d0d8c77b7daa?w=800',
    tag_id: '2',
    username: 'kdrama_fan',
    created_at: '2024-01-17T19:30:00Z',
    email: 'kdrama_fan@example.com',
    profile: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100',
    tag: mockTags[1],
    comments: [
      {
        id: '7',
        body: 'Queen of Tears ดีมากจริงๆ น้ำตาไหลทุกตอน',
        created_at: '2024-01-17T20:00:00Z',
        email: 'tears_queen@example.com',
        username: 'tears_queen',
        votes: []
      },
      {
        id: '8',
        body: 'มี Lovely Runner อยู่มั้ย ดูแล้วติดมาก',
        created_at: '2024-01-17T21:15:00Z',
        email: 'lovely_runner@example.com',
        username: 'lovely_runner',
        votes: []
      }
    ],
    votes: [
      { id: '9', email: 'kdrama1@example.com' },
      { id: '10', email: 'kdrama2@example.com' }
    ]
  },
  {
    id: '7',
    title: 'คอนเสิร์ต Taylor Swift ที่สิงคโปร์',
    body: 'ใครไปดูคอนเสิร์ต Taylor Swift The Eras Tour ที่สิงคโปร์มาบ้าง มาแชร์ประสบการณ์กัน...',
    featured: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    tag_id: '2',
    username: 'swiftie_th',
    created_at: '2024-01-16T22:00:00Z',
    email: 'swiftie_th@example.com',
    profile: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    tag: mockTags[1],
    comments: [
      {
        id: '9',
        body: 'ไปมาแล้ว มันส์มากกกก เสียงดี แสงสีสวย',
        created_at: '2024-01-16T23:30:00Z',
        email: 'concert_goer@example.com',
        username: 'concert_goer',
        votes: [{ id: '11', email: 'jealous1@example.com' }]
      }
    ],
    votes: [
      { id: '12', email: 'swiftie1@example.com' },
      { id: '13', email: 'swiftie2@example.com' },
      { id: '14', email: 'swiftie3@example.com' }
    ]
  },

  // กีฬา posts
  {
    id: '3',
    title: 'สถิติฟุตบอลไทยลีก ฤดูกาลใหม่',
    body: 'การวิเคราะห์สถิติของนักเตะและทีมต่างๆ ในไทยลีก ฤดูกาล 2024 พร้อมคาดการณ์ผลการแข่งขัน...',
    featured: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
    tag_id: '3',
    username: 'sportsfan',
    created_at: '2024-01-18T12:45:00Z',
    email: 'sportsfan@example.com',
    profile: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    tag: mockTags[2],
    comments: [
      {
        id: '2',
        body: 'สถิติน่าสนใจมาก',
        created_at: '2024-01-18T13:30:00Z',
        email: 'fan1@example.com',
        username: 'fan1',
        votes: []
      },
      {
        id: '3',
        body: 'คาดการณ์ได้แม่นยำ',
        created_at: '2024-01-18T14:00:00Z',
        email: 'fan2@example.com',
        username: 'fan2',
        votes: []
      }
    ],
    votes: []
  },
  {
    id: '8',
    title: 'ผลการแข่งขัน Premier League วันนี้',
    body: 'สรุปผลการแข่งขัน Premier League คืนที่ผ่านมา Manchester City พบ Arsenal จบ 2-1...',
    featured: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800',
    tag_id: '3',
    username: 'epl_watcher',
    created_at: '2024-01-15T23:45:00Z',
    email: 'epl_watcher@example.com',
    profile: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=100',
    tag: mockTags[2],
    comments: [
      {
        id: '10',
        body: 'Haaland เก่งจริงๆ ยิงได้ 2 ลูก',
        created_at: '2024-01-16T00:15:00Z',
        email: 'haaland_fan@example.com',
        username: 'haaland_fan',
        votes: []
      }
    ],
    votes: [
      { id: '15', email: 'city_fan@example.com' },
      { id: '16', email: 'football_fan@example.com' }
    ]
  },
  {
    id: '9',
    title: 'เทคนิคการวิ่งสำหรับมือใหม่',
    body: 'สำหรับใครที่เพิ่งเริ่มต้นวิ่ง มาดูเทคนิคพื้นฐานที่จะช่วยให้วิ่งได้อย่างถูกต้องและไม่บาดเจ็บ...',
    featured: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800',
    tag_id: '3',
    username: 'runner_coach',
    created_at: '2024-01-14T06:30:00Z',
    email: 'runner_coach@example.com',
    profile: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100',
    tag: mockTags[2],
    comments: [
      {
        id: '11',
        body: 'ขอบคุณมากครับ เพิ่งเริ่มวิ่งพอดี',
        created_at: '2024-01-14T07:00:00Z',
        email: 'newbie_runner@example.com',
        username: 'newbie_runner',
        votes: []
      },
      {
        id: '12',
        body: 'ควรวิ่งวันละกี่กิโลเหมาะสมครับ',
        created_at: '2024-01-14T08:15:00Z',
        email: 'beginner_q@example.com',
        username: 'beginner_q',
        votes: []
      }
    ],
    votes: [
      { id: '17', email: 'fitness1@example.com' },
      { id: '18', email: 'health_lover@example.com' }
    ]
  },

  // อาหาร posts
  {
    id: '10',
    title: 'สูตรต้มยำกุ้งแม่น้ำต้นตำรับ',
    body: 'วันนี้มาแชร์สูตรต้มยำกุ้งแม่น้ำที่ทำง่าย อร่อย เปรื้อยมากกกก วัตถุดิบหาง่าย ทำได้ที่บ้าน...',
    featured: 'https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=800',
    tag_id: '4',
    username: 'chef_home',
    created_at: '2024-01-13T18:20:00Z',
    email: 'chef_home@example.com',
    profile: 'https://images.unsplash.com/photo-1596040001589-e1caec6aa87e?w=100',
    tag: mockTags[3],
    comments: [
      {
        id: '13',
        body: 'ทำตามแล้ว อร่อยมากกก ขอบคุณครับ',
        created_at: '2024-01-13T19:30:00Z',
        email: 'tomyam_lover@example.com',
        username: 'tomyam_lover',
        votes: [{ id: '19', email: 'grateful1@example.com' }]
      },
      {
        id: '14',
        body: 'น้ำพริกเผาใส่ยี่ห้อไหนดีครับ',
        created_at: '2024-01-13T20:00:00Z',
        email: 'ingredient_q@example.com',
        username: 'ingredient_q',
        votes: []
      }
    ],
    votes: [
      { id: '20', email: 'cooking1@example.com' },
      { id: '21', email: 'thai_food@example.com' },
      { id: '22', email: 'recipe_collector@example.com' }
    ]
  },
  {
    id: '11',
    title: 'ร้านอาหารอีสานเจ้าเด็ด ย่านสีลม',
    body: 'เจอร้านอาหารอีสานเจ้าเด็ดมากก ส้มตำรสจัดจ้าน ลาบหมูสดใหม่ ราคาประหยัด บรรยากาศดี...',
    featured: 'https://images.unsplash.com/photo-1559847844-d9cfb0267ab4?w=800',
    tag_id: '4',
    username: 'food_hunter',
    created_at: '2024-01-12T12:30:00Z',
    email: 'food_hunter@example.com',
    profile: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100',
    tag: mockTags[3],
    comments: [
      {
        id: '15',
        body: 'ร้านนี้อยู่ตรงไหนครับ อยากไปลอง',
        created_at: '2024-01-12T13:00:00Z',
        email: 'foodie_bkk@example.com',
        username: 'foodie_bkk',
        votes: []
      },
      {
        id: '16',
        body: 'ราคาเท่าไหร่ประมาณครับ',
        created_at: '2024-01-12T13:45:00Z',
        email: 'budget_eater@example.com',
        username: 'budget_eater',
        votes: []
      }
    ],
    votes: [
      { id: '23', email: 'isaan_lover@example.com' },
      { id: '24', email: 'bangkok_foodie@example.com' }
    ]
  },
  {
    id: '12',
    title: 'วิธีทำขนมครกโบราณ',
    body: 'ขนมครกสูตรโบราณที่คุณยายทำ หวานมัน หอมกะทิ เคล็ดลับคือการใช้แป้งข้าวเจ้าผสมแป้งข้าวเหนียว...',
    featured: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800',
    tag_id: '4',
    username: 'dessert_master',
    created_at: '2024-01-11T15:45:00Z',
    email: 'dessert_master@example.com',
    profile: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
    tag: mockTags[3],
    comments: [
      {
        id: '17',
        body: 'ขนมครกชอบมากกก เด็กๆ ที่บ้านชอบ',
        created_at: '2024-01-11T16:30:00Z',
        email: 'mom_baker@example.com',
        username: 'mom_baker',
        votes: []
      }
    ],
    votes: [
      { id: '25', email: 'sweet_tooth@example.com' },
      { id: '26', email: 'traditional_lover@example.com' }
    ]
  },

  // ท่องเที่ยว posts
  {
    id: '13',
    title: 'เที่ยวภูเก็ต 3 วัน 2 คืน งบประหยัด',
    body: 'แชร์ทริปเที่ยวภูเก็ต งบไม่เกิน 5,000 บาท พร้อมแผนการเดินทาง ที่พัก ร้านอาหารแนะนำ...',
    featured: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    tag_id: '5',
    username: 'budget_traveler',
    created_at: '2024-01-10T14:20:00Z',
    email: 'budget_traveler@example.com',
    profile: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100',
    tag: mockTags[4],
    comments: [
      {
        id: '18',
        body: 'ขอรายละเอียดที่พักหน่อยครับ',
        created_at: '2024-01-10T15:00:00Z',
        email: 'hotel_seeker@example.com',
        username: 'hotel_seeker',
        votes: []
      },
      {
        id: '19',
        body: 'ค่าเครื่องบินรวมด้วยมั้ยครับ',
        created_at: '2024-01-10T15:30:00Z',
        email: 'flight_checker@example.com',
        username: 'flight_checker',
        votes: []
      }
    ],
    votes: [
      { id: '27', email: 'phuket_lover@example.com' },
      { id: '28', email: 'travel_saver@example.com' },
      { id: '29', email: 'backpacker_th@example.com' }
    ]
  },
  {
    id: '14',
    title: 'Hidden Gems เชียงใหม่ที่คนไม่ค่อยรู้จัก',
    body: 'แชร์สถานที่เที่ยวในเชียงใหม่ที่ไม่ค่อยมีคนรู้จัก สวยงาม เงียบสงบ เหมาะกับการพักผ่อน...',
    featured: 'https://images.unsplash.com/photo-1598968305121-f01e7c5efd5b?w=800',
    tag_id: '5',
    username: 'chiangmai_local',
    created_at: '2024-01-09T11:15:00Z',
    email: 'chiangmai_local@example.com',
    profile: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=100',
    tag: mockTags[4],
    comments: [
      {
        id: '20',
        body: 'ไปเชียงใหม่บ่อยแต่ไม่เคยรู้จักที่นี่',
        created_at: '2024-01-09T12:00:00Z',
        email: 'frequent_visitor@example.com',
        username: 'frequent_visitor',
        votes: []
      }
    ],
    votes: [
      { id: '30', email: 'explorer1@example.com' },
      { id: '31', email: 'northern_thai@example.com' }
    ]
  },
  {
    id: '15',
    title: 'เตรียมตัวเที่ยวญี่ปุ่นฤดูซากุระ',
    body: 'อีก 2 เดือนก็ถึงฤดูซากุระแล้ว มาเตรียมตัวกันเถอะ รวมเคล็ดลับการวางแผน จองที่พัก การแต่งตัว...',
    featured: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800',
    tag_id: '5',
    username: 'japan_expert',
    created_at: '2024-01-08T09:30:00Z',
    email: 'japan_expert@example.com',
    profile: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100',
    tag: mockTags[4],
    comments: [
      {
        id: '21',
        body: 'ซากุระบานช่วงไหนสวยที่สุดครับ',
        created_at: '2024-01-08T10:15:00Z',
        email: 'sakura_chaser@example.com',
        username: 'sakura_chaser',
        votes: []
      },
      {
        id: '22',
        body: 'ราคาตั๋วเครื่องบินตอนนั้นแพงมากมั้ย',
        created_at: '2024-01-08T11:00:00Z',
        email: 'budget_planner@example.com',
        username: 'budget_planner',
        votes: []
      }
    ],
    votes: [
      { id: '32', email: 'japan_lover@example.com' },
      { id: '33', email: 'sakura_dreamer@example.com' },
      { id: '34', email: 'asia_traveler@example.com' },
      { id: '35', email: 'photography_travel@example.com' }
    ]
  },

  // เพิ่มโพสต์ใหม่ - เทคโนโลยี
  {
    id: '16',
    title: 'รีวิว iPhone 15 Pro Max หลังใช้งาน 3 เดือน',
    body: 'ใช้งาน iPhone 15 Pro Max มา 3 เดือนแล้ว มาแชร์ประสบการณ์การใช้งานจริง กล้อง แบตเตอรี่ ประสิทธิภาพ และข้อดี-ข้อเสีย...',
    featured: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=800',
    tag_id: '1',
    username: 'apple_reviewer',
    created_at: '2024-01-25T16:30:00Z',
    email: 'apple_reviewer@example.com',
    profile: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100',
    tag: mockTags[0],
    comments: [
      {
        id: '23',
        body: 'แบตเตอรี่อึดมั้ยครับ เทียบกับ 14 Pro Max',
        created_at: '2024-01-25T17:00:00Z',
        email: 'battery_concerned@example.com',
        username: 'battery_concerned',
        votes: []
      }
    ],
    votes: [
      { id: '36', email: 'iphone_fan@example.com' },
      { id: '37', email: 'tech_review@example.com' }
    ]
  },
  {
    id: '17',
    title: 'Chat GPT vs Claude vs Gemini เปรียบเทียบจริง',
    body: 'ทดสอบ AI ทั้ง 3 ตัวด้วยงานจริง การเขียนโค้ด แปลภาษา เขียนบทความ มาดูกันว่าตัวไหนเหมาะกับงานไหน...',
    featured: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    tag_id: '1',
    username: 'ai_tester',
    created_at: '2024-01-24T14:20:00Z',
    email: 'ai_tester@example.com',
    profile: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    tag: mockTags[0],
    comments: [
      {
        id: '24',
        body: 'GPT-4 Turbo ยังเก่งสุดมั้ยครับ',
        created_at: '2024-01-24T15:30:00Z',
        email: 'openai_user@example.com',
        username: 'openai_user',
        votes: []
      },
      {
        id: '25',
        body: 'Claude เขียนโค้ดเก่งกว่าตามผมนะ',
        created_at: '2024-01-24T16:00:00Z',
        email: 'coder_daily@example.com',
        username: 'coder_daily',
        votes: [{ id: '38', email: 'claude_fan@example.com' }]
      }
    ],
    votes: [
      { id: '39', email: 'ai_enthusiast@example.com' },
      { id: '40', email: 'tech_comparison@example.com' },
      { id: '41', email: 'ml_researcher@example.com' }
    ]
  },

  // เพิ่มโพสต์ใหม่ - บันเทิง
  {
    id: '18',
    title: 'The Bear Season 3 สุดยอดซีรีส์เชฟที่ต้องดู',
    body: 'เพิ่งดูจบ The Bear Season 3 ซีรีส์เกี่ยวกับเชฟและครัวที่สมจริงมาก อารมณ์เครียดแต่สนุกมาก แนะนำเลย...',
    featured: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
    tag_id: '2',
    username: 'series_addict',
    created_at: '2024-01-23T21:45:00Z',
    email: 'series_addict@example.com',
    profile: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100',
    tag: mockTags[1],
    comments: [
      {
        id: '26',
        body: 'ดูแล้วอยากไปเรียนทำอาหาร 555',
        created_at: '2024-01-23T22:30:00Z',
        email: 'cooking_inspired@example.com',
        username: 'cooking_inspired',
        votes: []
      }
    ],
    votes: [
      { id: '42', email: 'netflix_lover@example.com' },
      { id: '43', email: 'chef_wannabe@example.com' }
    ]
  },
  {
    id: '19',
    title: 'คอนเสิร์ต BLACKPINK Born Pink World Tour Bangkok',
    body: 'ไปดูคอนเสิร์ต BLACKPINK เมื่อคืน สุดยอดมากกก Stage effect เพลง การแสดง ทุกอย่างเพอร์เฟคมาก ค่าบัตรคุ้มเกินราคา...',
    featured: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    tag_id: '2',
    username: 'kpop_concert_fan',
    created_at: '2024-01-22T23:30:00Z',
    email: 'kpop_fan@example.com',
    profile: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100',
    tag: mockTags[1],
    comments: [
      {
        id: '27',
        body: 'Jisoo สวยมากกกก เห็นชัดมั้ย',
        created_at: '2024-01-23T08:00:00Z',
        email: 'jisoo_bias@example.com',
        username: 'jisoo_bias',
        votes: []
      },
      {
        id: '28',
        body: 'Lisa rap ส่วนไหนเก่งสุดครับ',
        created_at: '2024-01-23T09:30:00Z',
        email: 'rap_lover@example.com',
        username: 'rap_lover',
        votes: []
      }
    ],
    votes: [
      { id: '44', email: 'blackpink_thailand@example.com' },
      { id: '45', email: 'concert_goer@example.com' },
      { id: '46', email: 'music_lover@example.com' },
      { id: '47', email: 'stage_performance@example.com' }
    ]
  },

  // เพิ่มโพสต์ใหม่ - กีฬา
  {
    id: '20',
    title: 'ลิเวอร์พูล vs แมนซิตี้ คลาสสิโกพรีเมียร์ลีก',
    body: 'แมตช์ดังคืนนี้ ลิเวอร์พูล เจอ แมนซิตี้ ที่ Anfield การจับคู่ที่น่าตื่นเต้นที่สุดในพรีเมียร์ลีก ใครจะชนะกันนะ...',
    featured: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
    tag_id: '3',
    username: 'premier_league_fan',
    created_at: '2024-01-21T18:00:00Z',
    email: 'football_fanatic@example.com',
    profile: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=100',
    tag: mockTags[2],
    comments: [
      {
        id: '29',
        body: 'YNWA! Liverpool จะชนะแน่นอน',
        created_at: '2024-01-21T18:30:00Z',
        email: 'liverpool_fan@example.com',
        username: 'liverpool_fan',
        votes: [{ id: '48', email: 'reds_supporter@example.com' }]
      },
      {
        id: '30',
        body: 'Haaland จะยิงไปกี่ลูกนะครับ',
        created_at: '2024-01-21T19:00:00Z',
        email: 'goal_predictor@example.com',
        username: 'goal_predictor',
        votes: []
      }
    ],
    votes: [
      { id: '49', email: 'epl_watcher@example.com' },
      { id: '50', email: 'football_analytics@example.com' }
    ]
  },
  {
    id: '21',
    title: 'ตารางฟิตเนสสำหรับมือใหม่ เริ่มต้นอย่างไร',
    body: 'สำหรับใครที่อยากเริ่มออกกำลังกาย แต่ไม่รู้จะเริ่มยังไง มาดูตารางฟิตเนสง่ายๆ สำหรับมือใหม่กัน เริ่มได้ที่บ้าน...',
    featured: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    tag_id: '3',
    username: 'fitness_trainer',
    created_at: '2024-01-20T07:30:00Z',
    email: 'personal_trainer@example.com',
    profile: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100',
    tag: mockTags[2],
    comments: [
      {
        id: '31',
        body: 'ขอคำแนะนำเรื่องอาหารประกอบด้วยครับ',
        created_at: '2024-01-20T08:15:00Z',
        email: 'diet_beginner@example.com',
        username: 'diet_beginner',
        votes: []
      }
    ],
    votes: [
      { id: '51', email: 'health_conscious@example.com' },
      { id: '52', email: 'workout_newbie@example.com' }
    ]
  },

  // เพิ่มโพสต์ใหม่ - อาหาร
  {
    id: '22',
    title: 'วิธีทำข้าวผัดกะเพราหมูกรอบแบบร้านดัง',
    body: 'เทคนิคทำข้าวผัดกะเพราหมูกรอบแบบร้านดัง เนื้อหมูกรอบนอกนุ่มใน กะเพราหอม เผ็ดร้อนแบบจี๊ดจ๊าด วิธีทำไม่ยาก...',
    featured: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800',
    tag_id: '4',
    username: 'street_food_chef',
    created_at: '2024-01-19T12:45:00Z',
    email: 'thai_food_master@example.com',
    profile: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=100',
    tag: mockTags[3],
    comments: [
      {
        id: '32',
        body: 'น้ำมันที่ใช้ผัดต้องใช้อะไรดีครับ',
        created_at: '2024-01-19T13:30:00Z',
        email: 'cooking_technique@example.com',
        username: 'cooking_technique',
        votes: []
      },
      {
        id: '33',
        body: 'ไข่ดาวมาคู่กันจริงๆ อร่อยสุดยอด',
        created_at: '2024-01-19T14:00:00Z',
        email: 'egg_lover@example.com',
        username: 'egg_lover',
        votes: []
      }
    ],
    votes: [
      { id: '53', email: 'thai_cuisine@example.com' },
      { id: '54', email: 'home_cook@example.com' },
      { id: '55', email: 'spicy_food@example.com' }
    ]
  },
  {
    id: '23',
    title: 'คาเฟ่ซ่อนเร้นย่านทองหล่อ บรรยากาศดี กาแฟเด็ด',
    body: 'เจอคาเฟ่เก๋ๆ ซ่อนตัวในซอยทองหล่อ บรรยากาศสไตล์มินิมอล กาแฟ single origin รสชาติเข้มข้น ของหวานก็อร่อย...',
    featured: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
    tag_id: '4',
    username: 'cafe_hunter',
    created_at: '2024-01-18T15:20:00Z',
    email: 'coffee_enthusiast@example.com',
    profile: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    tag: mockTags[3],
    comments: [
      {
        id: '34',
        body: 'ราคาเท่าไหร่ครับ แพงมั้ย',
        created_at: '2024-01-18T16:00:00Z',
        email: 'budget_coffee@example.com',
        username: 'budget_coffee',
        votes: []
      }
    ],
    votes: [
      { id: '56', email: 'coffee_addict@example.com' },
      { id: '57', email: 'thonglor_resident@example.com' }
    ]
  },

  // เพิ่มโพสต์ใหม่ - ท่องเที่ยว
  {
    id: '24',
    title: 'เกาะช้าง จันทบุรี เที่ยวทะเลใกล้กรุงเทพ',
    body: 'เที่ยวเกาะช้าง จันทบุรี ทะเลใสใกล้กรุงเทพ เดินทางสะดวก หาดทรายขาว น้ำใส กิจกรรมเยอะ อาหารทะเลสด...',
    featured: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    tag_id: '5',
    username: 'weekend_traveler',
    created_at: '2024-01-17T09:00:00Z',
    email: 'short_trip@example.com',
    profile: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100',
    tag: mockTags[4],
    comments: [
      {
        id: '35',
        body: 'ไปช่วงไหนดีครับ เดือนนี้น้ำใสมั้ย',
        created_at: '2024-01-17T10:30:00Z',
        email: 'timing_asker@example.com',
        username: 'timing_asker',
        votes: []
      },
      {
        id: '36',
        body: 'รีสอร์ทแนะนำช่วงราคา 2-3 พัน ต่อคืน',
        created_at: '2024-01-17T11:00:00Z',
        email: 'resort_seeker@example.com',
        username: 'resort_seeker',
        votes: []
      }
    ],
    votes: [
      { id: '58', email: 'beach_lover@example.com' },
      { id: '59', email: 'chanthaburi_fan@example.com' }
    ]
  },
  {
    id: '25',
    title: 'backpack ยุโรป 1 เดือน งบ 50,000 บาท',
    body: 'แบ่งปันประสบการณ์เที่ยว backpack ยุโรป 1 เดือน งบรวม 50,000 บาท ผ่าน 8 ประเทศ พร้อมเทคนิคประหยัดเงิน...',
    featured: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
    tag_id: '5',
    username: 'europe_backpacker',
    created_at: '2024-01-16T19:30:00Z',
    email: 'budget_traveler_eu@example.com',
    profile: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    tag: mockTags[4],
    comments: [
      {
        id: '37',
        body: 'Eurail Pass คุ้มมั้ยครับสำหรับ 1 เดือน',
        created_at: '2024-01-16T20:15:00Z',
        email: 'train_travel@example.com',
        username: 'train_travel',
        votes: []
      },
      {
        id: '38',
        body: 'โฮสเทลแนะนำใน Amsterdam มั้ยครับ',
        created_at: '2024-01-16T21:00:00Z',
        email: 'amsterdam_bound@example.com',
        username: 'amsterdam_bound',
        votes: []
      }
    ],
    votes: [
      { id: '60', email: 'gap_year_traveler@example.com' },
      { id: '61', email: 'europe_dreamer@example.com' },
      { id: '62', email: 'budget_conscious@example.com' },
      { id: '63', email: 'solo_traveler@example.com' }
    ]
  },

  // เพิ่มโพสต์ใหม่ - สุขภาพ
  {
    id: '26',
    title: 'ลดน้ำหนัก 10 กิโลใน 3 เดือน แบบยั่งยืน',
    body: 'แชร์ประสบการณ์ลดน้ำหนัก 10 กิโลใน 3 เดือน โดยไม่กินยา แค่ปรับนิสัยการกิน และออกกำลังกาย พร้อมเมนูและตาราง...',
    featured: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    tag_id: '3',
    username: 'weight_loss_success',
    created_at: '2024-01-15T06:30:00Z',
    email: 'healthy_lifestyle@example.com',
    profile: 'https://images.unsplash.com/photo-1594736797933-d0b6b5a32cc9?w=100',
    tag: mockTags[2],
    comments: [
      {
        id: '39',
        body: 'ออกกำลังกายแบบไหนครับ วิ่งหรือยิม',
        created_at: '2024-01-15T07:45:00Z',
        email: 'exercise_curious@example.com',
        username: 'exercise_curious',
        votes: []
      },
      {
        id: '40',
        body: 'หิวข้ามมื้อทำยังไงครับ เครียดมาก',
        created_at: '2024-01-15T08:30:00Z',
        email: 'hunger_struggle@example.com',
        username: 'hunger_struggle',
        votes: []
      }
    ],
    votes: [
      { id: '64', email: 'motivation_seeker@example.com' },
      { id: '65', email: 'diet_follower@example.com' },
      { id: '66', email: 'transformation@example.com' }
    ]
  },

  // เพิ่มโพสต์ใหม่ - การเงิน/หุ้น
  {
    id: '27',
    title: 'SET Index ปี 2024 จะไปทิศทางไหน',
    body: 'วิเคราะห์แนวโน้ม SET Index ปี 2024 จากปัจจัยเศรษฐกิจโลก การเมืองไทย และการเลือกตั้งสหรัฐฯ ที่อาจส่งผลต่อตลาดหุ้นไทย...',
    featured: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800',
    tag_id: '1',
    username: 'stock_analyst',
    created_at: '2024-01-14T11:20:00Z',
    email: 'market_watcher@example.com',
    profile: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    tag: mockTags[0],
    comments: [
      {
        id: '41',
        body: 'ผมว่า Banking sector ยังน่าสนใจนะ',
        created_at: '2024-01-14T12:00:00Z',
        email: 'bank_investor@example.com',
        username: 'bank_investor',
        votes: []
      }
    ],
    votes: [
      { id: '67', email: 'retail_investor@example.com' },
      { id: '68', email: 'thai_stock@example.com' }
    ]
  },

  // เพิ่มโพสต์ใหม่ - ความงาม
  {
    id: '28',
    title: 'Skincare routine สำหรับผิวแพ้ง่าย งบ 1,000 บาท',
    body: 'แชร์ skincare routine สำหรับคนผิวแพ้ง่าย งบไม่เกิน 1,000 บาท ใช้ผลิตภัณฑ์หาง่ายในเซเว่น ผิวดีขึ้นเห็นได้ชัด...',
    featured: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=800',
    tag_id: '3',
    username: 'skincare_budget',
    created_at: '2024-01-13T19:15:00Z',
    email: 'beauty_blogger@example.com',
    profile: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100',
    tag: mockTags[2],
    comments: [
      {
        id: '42',
        body: 'ผิวมันแบบผมใช้ได้มั้ยครับ',
        created_at: '2024-01-13T20:00:00Z',
        email: 'oily_skin@example.com',
        username: 'oily_skin',
        votes: []
      }
    ],
    votes: [
      { id: '69', email: 'sensitive_skin@example.com' },
      { id: '70', email: 'budget_beauty@example.com' }
    ]
  },

  // เพิ่มโพสต์ใหม่ - การศึกษา
  {
    id: '29',
    title: 'เรียนออนไลน์ Programming ฟรี แนะนำ Platform',
    body: 'รวม Platform เรียน Programming ออนไลน์ฟรี ตั้งแต่มือใหม่จนถึงระดับสูง freeCodeCamp, Codecademy, Coursera พร้อมรีวิว...',
    featured: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    tag_id: '1',
    username: 'coding_teacher',
    created_at: '2024-01-12T20:30:00Z',
    email: 'programming_educator@example.com',
    profile: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    tag: mockTags[0],
    comments: [
      {
        id: '43',
        body: 'ภาษาไหนเหมาะสำหรับมือใหม่ครับ',
        created_at: '2024-01-12T21:15:00Z',
        email: 'beginner_coder@example.com',
        username: 'beginner_coder',
        votes: []
      },
      {
        id: '44',
        body: 'Harvard CS50 ฟรีใน edX แนะนำมากครับ',
        created_at: '2024-01-12T22:00:00Z',
        email: 'cs50_graduate@example.com',
        username: 'cs50_graduate',
        votes: [{ id: '71', email: 'harvard_fan@example.com' }]
      }
    ],
    votes: [
      { id: '72', email: 'self_learner@example.com' },
      { id: '73', email: 'coding_newbie@example.com' },
      { id: '74', email: 'career_changer@example.com' }
    ]
  },

  // เพิ่มโพสต์ใหม่ - รถยนต์
  {
    id: '30',
    title: 'Honda City RS 2024 ใหม่ คุ้มค่าการรอมั้ย',
    body: 'Honda City RS 2024 โฉมใหม่เพิ่งเปิดตัว เปลี่ยนแปลงอะไรบ้าง ราคาเท่าไหร่ เทียบกับคู่แข่งแล้วคุ้มมั้ย มารีวิวกัน...',
    featured: 'https://images.unsplash.com/photo-1549399505-7e1bbb5d6c08?w=800',
    tag_id: '1',
    username: 'car_reviewer',
    created_at: '2024-01-11T16:45:00Z',
    email: 'automotive_expert@example.com',
    profile: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100',
    tag: mockTags[0],
    comments: [
      {
        id: '45',
        body: 'ค่าน้ำมันดีกว่าเดิมมั้ยครับ',
        created_at: '2024-01-11T17:30:00Z',
        email: 'fuel_economy@example.com',
        username: 'fuel_economy',
        votes: []
      }
    ],
    votes: [
      { id: '75', email: 'honda_fan@example.com' },
      { id: '76', email: 'sedan_lover@example.com' }
    ]
  }
]

export const mockAnnouncements: Announcement[] = [
  {
    id: '1',
    title: 'ประกาศใหม่ของ Pantip',
    description: 'ขอแจ้งให้ทราบเกี่ยวกับการอัพเดทระบบใหม่',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400',
    url: '/announcement/1',
    created_at: '2024-01-25T10:00:00Z'
  },
  {
    id: '2',
    title: 'กิจกรรมพิเศษประจำเดือน',
    description: 'ร่วมกิจกรรมและลุ้นรับรางวัลมากมาย',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400',
    url: '/activity/monthly',
    created_at: '2024-01-24T14:30:00Z'
  },
  {
    id: '3',
    title: 'แนวทางการใช้งานใหม่',
    description: 'ข้อแนะนำและหลักการใช้งานเว็บไซต์',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400',
    url: '/guidelines',
    created_at: '2024-01-23T09:15:00Z'
  }
]

export const mockCategories: Category[] = [
  {
    id: 'tech',
    name: 'เทคโนโลยี',
    description: 'อัพเดทเทคโนโลยีใหม่ๆ',
    color: '#4F46E5'
  },
  {
    id: 'entertainment',
    name: 'บันเทิง',
    description: 'หนัง ซีรีส์ เพลง',
    color: '#EF4444'
  },
  {
    id: 'sports',
    name: 'กีฬา',
    description: 'ข่าวกีฬาและผลการแข่งขัน',
    color: '#10B981'
  },
  {
    id: 'food',
    name: 'อาหาร',
    description: 'สูตรอาหารและร้านอร่อย',
    color: '#F59E0B'
  },
  {
    id: 'travel',
    name: 'ท่องเที่ยว',
    description: 'สถานที่ท่องเที่ยวและเคล็ดลับการเดินทาง',
    color: '#8B5CF6'
  },
  {
    id: 'lifestyle',
    name: 'ไลฟ์สไตล์',
    description: 'แฟชั่น ความงาม สุขภาพ',
    color: '#EC4899'
  }
]

// Mock API functions
export const getTagsList = (): Promise<{ getTagList: Tag[] }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ getTagList: mockTags })
    }, 500)
  })
}

export const getTagByName = (tag: string): Promise<{ getTagByName: Tag | null }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const foundTag = mockTags.find(t => t.tag === tag)
      resolve({ getTagByName: foundTag || null })
    }, 300)
  })
}

export const searchTagWithLimit = (tag: string, limit: number): Promise<{ searchTagWithLimit: Tag[] }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredTags = mockTags
        .filter(t => t.tag.toLowerCase().includes(tag.toLowerCase()))
        .slice(0, limit)
      resolve({ searchTagWithLimit: filteredTags })
    }, 200)
  })
}

export const getPostById = (id: string): Promise<{ getPostById: Post | null }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = mockPosts.find(p => p.id === id)
      resolve({ getPostById: post || null })
    }, 400)
  })
}

export const getPostWithLimit = (limit: number = 20): Promise<{ getPostWithLimit: Post[] }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const posts = mockPosts.slice(0, limit)
      resolve({ getPostWithLimit: posts })
    }, 600)
  })
}

export const getPostByTagIdWithLimitPaging = (
  tag_id: string,
  first: number = 10,
  after: number = 0
): Promise<{ getPostByTagIdWithLimitPaging: Post[] }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredPosts = mockPosts
        .filter(p => p.tag_id === tag_id)
        .slice(after, after + first)
      resolve({ getPostByTagIdWithLimitPaging: filteredPosts })
    }, 400)
  })
}

export const insertTag = (username: string, tag: string): Promise<{ insertTag: Tag }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newTag: Tag = {
        id: String(mockTags.length + 1),
        tag,
        username,
        created_at: new Date().toISOString()
      }
      mockTags.push(newTag)
      resolve({ insertTag: newTag })
    }, 300)
  })
}

export const deleteTag = (id: string): Promise<{ deleteTag: Tag | null }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = mockTags.findIndex(t => t.id === id)
      if (index > -1) {
        const deletedTag = mockTags.splice(index, 1)[0]
        resolve({ deleteTag: deletedTag })
      } else {
        resolve({ deleteTag: null })
      }
    }, 300)
  })
}

export const insertPost = (data: {
  username: string
  title: string
  body: string
  featured: string
  tag_id: string
  email: string
  profile: string
}): Promise<{ insertPost: Post }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tag = mockTags.find(t => t.id === data.tag_id) || mockTags[0]
      const newPost: Post = {
        id: String(mockPosts.length + 1),
        ...data,
        created_at: new Date().toISOString(),
        tag,
        comments: [],
        votes: []
      }
      mockPosts.unshift(newPost)
      resolve({ insertPost: newPost })
    }, 500)
  })
}

export const createComment = (data: {
  username: string
  post_id: string
  body: string
  email: string
}): Promise<{ createComment: { id: string } }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = mockPosts.find(p => p.id === data.post_id)
      if (post) {
        const newComment: Comment = {
          id: String(post.comments.length + 1),
          body: data.body,
          username: data.username,
          email: data.email,
          created_at: new Date().toISOString(),
          votes: []
        }
        post.comments.push(newComment)
      }
      resolve({ createComment: { id: String(Date.now()) } })
    }, 400)
  })
}

export const insertVote = (post_id: string, email: string): Promise<{ inserVote: { id: string } }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = mockPosts.find(p => p.id === post_id)
      if (post && !post.votes.find(v => v.email === email)) {
        post.votes.push({ id: String(Date.now()), email })
      }
      resolve({ inserVote: { id: String(Date.now()) } })
    }, 300)
  })
}

export const deleteVote = (post_id: string, email: string): Promise<{ deleteVote: { id: string } }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = mockPosts.find(p => p.id === post_id)
      if (post) {
        const voteIndex = post.votes.findIndex(v => v.email === email)
        if (voteIndex > -1) {
          post.votes.splice(voteIndex, 1)
        }
      }
      resolve({ deleteVote: { id: String(Date.now()) } })
    }, 300)
  })
}

export const insertVoteComment = (comment_id: string, email: string): Promise<{ inserVoteComment: { id: string } }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Find comment across all posts
      for (const post of mockPosts) {
        const comment = post.comments.find(c => c.id === comment_id)
        if (comment && !comment.votes.find(v => v.email === email)) {
          comment.votes.push({ id: String(Date.now()), email })
          break
        }
      }
      resolve({ inserVoteComment: { id: String(Date.now()) } })
    }, 300)
  })
}

// Announcement API functions (mimicking Pantip API)
export const getAnnouncements = (room: string = 'homepage', limit: number = 3): Promise<Announcement[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const announcements = mockAnnouncements.slice(0, limit)
      resolve(announcements)
    }, 400)
  })
}

// Category API functions (mimicking Pantip API)
export const getRoomRecommend = (): Promise<Category[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCategories)
    }, 300)
  })
}

// Suggested topic API functions (mimicking Pantip API)
export const getSuggestTopicPopular = (params: {
  type?: string
  limit?: number
  ranking_time?: string
  next_id?: string
}): Promise<{ data: Post[], next_id?: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const limit = params.limit || 10
      const posts = mockPosts.slice(0, limit)
      resolve({ 
        data: posts,
        next_id: posts.length > 0 ? String(Number(posts[posts.length - 1].id) + 1) : undefined
      })
    }, 500)
  })
}