import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { QuestionMarkCircleIcon, FireIcon, ClockIcon } from '@heroicons/react/solid'
import ReactTimeago from 'react-timeago'
import { getCategoryById, getPostsByCategory } from '../../lib/mockData'
import { Post, Category } from '../../lib/mockData'
import StructuredData from '../../components/StructuredData'
import { generateBreadcrumbSchema } from '../../utils/seo'
import Breadcrumb from '../../components/Breadcrumb'

type Props = {
  category: Category
  posts: Post[]
  categoryId: string
}

const CategoryPage = ({ category, posts, categoryId }: Props) => {
  const router = useRouter()

  const breadcrumbs = [
    { name: 'หน้าแรก', url: '/' },
    { name: 'หมวดหมู่', url: '/categories' },
    { name: category.name, url: `/category/${categoryId}`, current: true }
  ]

  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://pantip.com'}/category/${categoryId}`

  return (
    <div>
      <NextSeo
        title={`${category.name} - Pantip`}
        description={`${category.description} รวมกระทู้และความคิดเห็นในหมวด ${category.name} จากชุมชน Pantip`}
        canonical={currentUrl}
        openGraph={{
          title: `${category.name} - Pantip`,
          description: `${category.description} รวมกระทู้และความคิดเห็นในหมวด ${category.name}`,
          url: currentUrl,
          type: 'website',
        }}
      />

      <StructuredData data={[generateBreadcrumbSchema(breadcrumbs)]} />

      <div className="mx-auto mt-5 max-w-4xl px-4">
        <Breadcrumb items={breadcrumbs} />

        {/* Category Header */}
        <div className="mb-6 rounded-lg border border-gray-700 bg-[#193365] p-6">
          <div className="flex items-center space-x-4">
            <div 
              className="h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
              style={{ backgroundColor: category.color }}
            >
              {category.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-yellow-400">{category.name}</h1>
              <p className="text-gray-300 mt-1">{category.description}</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                <span className="flex items-center space-x-1">
                  <FireIcon className="h-4 w-4" />
                  <span>{posts.length} กระทู้</span>
                </span>
                <span className="flex items-center space-x-1">
                  <ClockIcon className="h-4 w-4" />
                  <span>อัพเดทล่าสุด</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Section */}
        <div className="rounded-md border border-gray-800 bg-[#353156] shadow-md">
          <div className="flex justify-between border-b border-[#7976a0] bg-[#1f1d33] p-4">
            <h2 className="text-lg font-semibold text-yellow-400">กระทู้ล่าสุดใน {category.name}</h2>
            <div className="flex space-x-2 text-sm">
              <button className="text-[#b39dbb] hover:text-white">ใหม่ล่าสุด</button>
              <span className="text-gray-500">|</span>
              <button className="text-[#b39dbb] hover:text-white">ยอดนิยม</button>
            </div>
          </div>

          <div className="divide-y divide-[#433f62]">
            {posts.length === 0 ? (
              <div className="py-12 text-center">
                <QuestionMarkCircleIcon className="mx-auto h-16 w-16 text-gray-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-300 mb-2">ยังไม่มีกระทู้ในหมวดนี้</h3>
                <p className="text-gray-500">เป็นคนแรกที่สร้างกระทู้ในหมวด {category.name} กันเลย</p>
              </div>
            ) : (
              posts.map((post) => (
                <article
                  key={post.id}
                  className="flex items-center space-x-4 p-4 hover:bg-[#2c2a49] cursor-pointer transition-colors"
                  onClick={() => router.push(`/topic/${post.id}`)}
                >
                  {/* Featured Image */}
                  {post.featured && (
                    <div className="flex-shrink-0">
                      <img
                        src={post.featured}
                        alt={`รูปภาพประกอบกระทู้: ${post.title}`}
                        className="h-16 w-16 rounded object-cover"
                      />
                    </div>
                  )}

                  {/* Post Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start space-x-2">
                      <QuestionMarkCircleIcon className="mt-1 h-4 w-4 text-yellow-500 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-[#d2cde1] line-clamp-2 hover:text-yellow-400">
                          {post.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                          {post.body.replace(/<[^>]*>/g, '').substring(0, 100)}...
                        </p>
                      </div>
                    </div>

                    {/* Post Meta */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <span className="text-[#9a99c0]">{post.username}</span>
                        <span>•</span>
                        <time dateTime={post.created_at}>
                          <ReactTimeago date={post.created_at} />
                        </time>
                        <span>•</span>
                        <span className="px-2 py-1 bg-[#0e2d61] border border-[#254b8b] text-gray-300 rounded text-xs">
                          {post.tag.tag}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>{post.comments?.length || 0} ความคิดเห็น</span>
                        <span>{post.votes?.length || 0} โหวต</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>

          {/* Load More Button */}
          {posts.length > 0 && (
            <div className="border-t border-[#433f62] p-4 text-center">
              <button className="text-[#b39dbb] hover:text-white text-sm">
                โหลดกระทู้เพิ่มเติม
              </button>
            </div>
          )}
        </div>

        {/* Category Stats */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#193365] border border-gray-700 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-300 mb-2">สถิติกระทู้</h3>
            <div className="text-2xl font-bold text-yellow-400">{posts.length}</div>
            <div className="text-xs text-gray-500">กระทู้ทั้งหมด</div>
          </div>

          <div className="bg-[#193365] border border-gray-700 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-300 mb-2">ความคิดเห็น</h3>
            <div className="text-2xl font-bold text-yellow-400">
              {posts.reduce((sum, post) => sum + (post.comments?.length || 0), 0)}
            </div>
            <div className="text-xs text-gray-500">ความคิดเห็นทั้งหมด</div>
          </div>

          <div className="bg-[#193365] border border-gray-700 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-300 mb-2">การโหวต</h3>
            <div className="text-2xl font-bold text-yellow-400">
              {posts.reduce((sum, post) => sum + (post.votes?.length || 0), 0)}
            </div>
            <div className="text-xs text-gray-500">โหวตทั้งหมด</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query
  const categoryId = Array.isArray(id) ? id[0] : id

  if (!categoryId) {
    return {
      notFound: true,
    }
  }

  try {
    const [categoryResult, postsResult] = await Promise.all([
      getCategoryById(categoryId),
      getPostsByCategory(categoryId, 20)
    ])

    const category = categoryResult.getCategoryById
    const posts = postsResult.getPostsByCategory

    if (!category) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        category,
        posts,
        categoryId,
      }
    }
  } catch (error) {
    console.error('Error fetching category data:', error)
    return {
      notFound: true,
    }
  }
}

export default CategoryPage