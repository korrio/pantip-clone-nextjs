import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { Toaster } from 'react-hot-toast'
import Footer from '../components/Footer'
import { DefaultSeo } from 'next-seo'
import StructuredData from '../components/StructuredData'
import { generateWebSiteSchema, generateOrganizationSchema } from '../utils/seo'
import CriticalCSS from '../components/CriticalCSS'

function MyApp({ Component, pageProps }: AppProps) {
  return (
        <div className="h-screen overflow-y-scroll bg-[#3c3963]">
          <CriticalCSS />
          <DefaultSeo
            canonical={process.env.URL}
            description="ร่วมพูดคุยแลกเปลี่ยนความคิดเห็นในทุกประเด็น ทั้งบันเทิง หุ้น ความงาม ท่องเที่ยว รถยนต์ กีฬา โทรศัพท์มือถือ อาหาร การเมือง ครอบครัว บ้าน วิทยาศาสตร์ สุขภาพ ธุรกิจ"
            defaultTitle="Pantip - Learn, Share & Fun"
            openGraph={{
              type: 'website',
              locale: 'th_TH',
              url: process.env.URL,
              site_name: 'Pantip - Learn, Share & Fun',
              images: [
                {
                  url: `${process.env.URL}/og-image.jpg`,
                  width: 1200,
                  height: 630,
                  alt: 'Pantip - Learn, Share & Fun',
                }
              ]
            }}
            twitter={{
              handle: '@pantip',
              site: '@pantip',
              cardType: 'summary_large_image',
            }}
            additionalLinkTags={[
              {
                rel: 'icon',
                href: '/favicon.ico',
              },
              {
                rel: 'apple-touch-icon',
                href: '/apple-touch-icon.png',
                sizes: '180x180'
              },
              {
                rel: 'manifest',
                href: '/site.webmanifest'
              },
              // DNS prefetch for external services
              {
                rel: 'dns-prefetch',
                href: '//pantip.com'
              },
              {
                rel: 'dns-prefetch', 
                href: '//avatars.dicebear.com'
              },
              {
                rel: 'dns-prefetch',
                href: '//fonts.googleapis.com'
              },
              // Preconnect for critical resources
              {
                rel: 'preconnect',
                href: 'https://pantip.com',
                crossOrigin: 'anonymous'
              },
              {
                rel: 'preconnect',
                href: 'https://avatars.dicebear.com',
                crossOrigin: 'anonymous'
              },
              // Preload critical assets
              {
                rel: 'preload',
                href: '/banner.png',
                as: 'image'
              }
            ]}
          />
          <StructuredData data={[generateWebSiteSchema(), generateOrganizationSchema()]} />
          <Toaster />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
  )
}

export default MyApp
