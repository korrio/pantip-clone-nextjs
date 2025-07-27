import { Post } from '../lib/mockData'

// Generate WebSite schema markup
export const generateWebSiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pantip',
    alternateName: 'Pantip - Learn, Share & Fun',
    description: 'ร่วมพูดคุยแลกเปลี่ยนความคิดเห็นในทุกประเด็น ทั้งบันเทิง หุ้น ความงาม ท่องเที่ยว รถยนต์ กีฬา โทรศัพท์มือถือ อาหาร การเมือง ครอบครัว บ้าน วิทยาศาสตร์ สุขภาพ ธุรกิจ',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://pantip.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://pantip.com'}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pantip',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://pantip.com'}/logo.png`
      }
    }
  }
}

// Generate Article schema markup for forum posts
export const generateArticleSchema = (post: Post, url: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'DiscussionForumPosting',
    headline: post.title,
    description: post.body.substring(0, 160).replace(/<[^>]*>/g, ''),
    datePublished: post.created_at,
    dateModified: post.created_at,
    author: {
      '@type': 'Person',
      name: post.username,
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://pantip.com'}/profile/${post.email}`
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pantip',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://pantip.com'}/logo.png`
      }
    },
    url: url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    interactionStatistic: [
      {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/CommentAction',
        userInteractionCount: post.comments?.length || 0
      },
      {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/LikeAction',
        userInteractionCount: post.votes?.length || 0
      }
    ],
    about: {
      '@type': 'Thing',
      name: post.tag?.tag
    },
    discussionUrl: url,
    commentCount: post.comments?.length || 0
  }
}

// Generate BreadcrumbList schema
export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  }
}

// Generate FAQ schema for common questions
export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

// Generate Organization schema
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pantip',
    alternateName: 'Pantip - Learn, Share & Fun',
    description: 'ชุมชนออนไลน์ที่ใหญ่ที่สุดในประเทศไทย สำหรับการแลกเปลี่ยนความคิดเห็นและข้อมูลข่าวสาร',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://pantip.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://pantip.com'}/logo.png`,
    foundingDate: '1996',
    foundingLocation: {
      '@type': 'Place',
      name: 'Thailand'
    },
    sameAs: [
      'https://www.facebook.com/pantip.com',
      'https://twitter.com/pantip',
      'https://www.youtube.com/user/PantipDotCom'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Thai', 'English']
    }
  }
}