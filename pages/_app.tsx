import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { Toaster } from 'react-hot-toast'
import Footer from '../components/Footer'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
        <div className="h-screen overflow-y-scroll bg-[#3c3963]">
          <DefaultSeo
            canonical={process.env.URL}
            description="ร่วมพูดคุยแลกเปลี่ยนความคิดเห็นในทุกประเด็น ทั้งบันเทิง หุ้น ความงาม ท่องเที่ยว รถยนต์ กีฬา โทรศัพท์มือถือ อาหาร การเมือง ครอบครัว บ้าน วิทยาศาสตร์ สุขภาพ ธุรกิจ"
            defaultTitle="Pantip - Learn, Share & Fun"
            openGraph={{
              type: 'website',
              locale: 'en_IE',
              url: process.env.URL,
              site_name: 'Pantip - Learn, Share & Fun ',
            }}
            twitter={{
              handle: '@handle',
              site: '@site',
              cardType: 'summary_large_image',
            }}
          />
          <Toaster />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
  )
}

export default MyApp
