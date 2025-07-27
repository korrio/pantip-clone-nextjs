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
    count: { count: 25 }
  },
  {
    id: '2', 
    tag: 'บันเทิง',
    created_at: '2024-01-14T15:45:00Z',
    username: 'movie_lover',
    count: { count: 42 }
  },
  {
    id: '3',
    tag: 'กีฬา',
    created_at: '2024-01-13T09:20:00Z',
    username: 'sportsfan',
    count: { count: 18 }
  },
  {
    id: '4',
    tag: 'อาหาร',
    created_at: '2024-01-12T16:10:00Z',
    username: 'foodie123',
    count: { count: 33 }
  },
  {
    id: '5',
    tag: 'ท่องเที่ยว',
    created_at: '2024-01-11T11:55:00Z',
    username: 'traveler',
    count: { count: 29 }
  }
]

export const mockPosts: Post[] = [
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
      { id: '3', email: 'voter3@example.com' }
    ]
  },
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