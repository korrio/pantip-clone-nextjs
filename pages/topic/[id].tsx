import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import { GET_POST_BY_ID } from '../../graphql/quereis'
import { Post } from '../../lib/mockData'
import StructuredData from '../../components/StructuredData'
import { generateArticleSchema, generateBreadcrumbSchema } from '../../utils/seo'
import Breadcrumb from '../../components/Breadcrumb'
import parse from 'html-react-parser'
import { convertToTopic } from '../../utils/tools'

type Props = {
  id: string
  topic: Post
}

function Topic({ id, topic }: Props) {
  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://pantip.com'}/topic/${id}`
  const breadcrumbs = [
    { name: 'หน้าแรก', url: '/' },
    { name: topic?.tag?.tag || 'ทั่วไป', url: `/tag/${topic?.tag?.tag}` },
    { name: topic?.title, url: currentUrl, current: true }
  ]
  
  const rawBody = convertToTopic(topic?.body ?? '')

  return (
    <div>
      <NextSeo 
        title={`${topic.title} - Pantip`}
        description={topic.body.substring(0, 160).replace(/<[^>]*>/g, '')}
        canonical={currentUrl}
        openGraph={{
          title: topic.title,
          description: topic.body.substring(0, 160).replace(/<[^>]*>/g, ''),
          url: currentUrl,
          type: 'article',
        }}
      />
      
      <StructuredData data={[
        generateArticleSchema(topic, currentUrl),
        generateBreadcrumbSchema(breadcrumbs)
      ]} />

      <div className="mx-auto mt-8 max-w-4xl space-y-4">
        <Breadcrumb items={breadcrumbs} />
        
        <article className="border border-gray-300 bg-[#193365] p-6">
          <header className="mb-4">
            <h1 className="text-2xl font-bold text-yellow-400">{topic.title}</h1>
          </header>
          
          <div className="text-white">
            {parse(rawBody)}
          </div>
          
          <footer className="mt-4 text-sm text-gray-400">
            โดย {topic.username} • {new Date(topic.created_at).toLocaleDateString('th-TH')}
          </footer>
        </article>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { getPostById } = await GET_POST_BY_ID(String(context.query.id))
  if (!getPostById) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  return {
    props: { topic: getPostById, id: context.query.id },
  }
}

export default Topic