import Head from 'next/head'

interface StructuredDataProps {
  data: object | object[]
}

const StructuredData = ({ data }: StructuredDataProps) => {
  const structuredData = Array.isArray(data) ? data : [data]
  
  return (
    <Head>
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2)
          }}
        />
      ))}
    </Head>
  )
}

export default StructuredData