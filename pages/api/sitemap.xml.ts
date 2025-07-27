import { NextApiRequest, NextApiResponse } from 'next'
import { mockPosts, mockTags } from '../../lib/mockData'

function generateSiteMap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pantip.com'
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  
  <!-- Homepage -->
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>hourly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Search page -->
  <url>
    <loc>${baseUrl}/search</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Tags index -->
  <url>
    <loc>${baseUrl}/tags</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- New topic page -->
  <url>
    <loc>${baseUrl}/forum/new_topic</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- Tag pages -->
  ${mockTags.map((tag) => {
    return `
  <url>
    <loc>${baseUrl}/tag/${encodeURIComponent(tag.tag)}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`
  }).join('')}
  
  <!-- Topic pages -->
  ${mockPosts.map((post) => {
    const lastmod = new Date(post.created_at).toISOString()
    return `
  <url>
    <loc>${baseUrl}/topic/${post.id}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`
  }).join('')}
  
</urlset>`
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set cache headers
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate')
  res.setHeader('Content-Type', 'text/xml; charset=utf-8')
  
  // Generate the XML sitemap
  const sitemap = generateSiteMap()
  
  res.status(200).send(sitemap)
}