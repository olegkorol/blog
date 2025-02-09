import { getPosts } from '../posts/get-posts.ts'
import config from '../config.ts'

// we want to get the most recent modification or publication date accross all posts
const dates: Date[] = []
const lastModified = () => {
  return dates.sort((a, b) => a.getTime() - b.getTime())[dates.length - 1].toISOString()
}
 
export async function GET() {
  const allPosts = await getPosts()
  const posts = allPosts
    .map(
      post => {
        const thisPostLastModified = post.frontMatter.updated ? new Date(post.frontMatter.updated) : new Date(post.frontMatter.date)
        dates.push(thisPostLastModified)
        return `  <url>
    <loc>${config.siteUrl}${post.route}</loc>
    <lastmod>${thisPostLastModified.toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>`
      }
    )
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>${config.siteUrl}</loc>
    <lastmod>${lastModified()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${config.siteUrl}/posts</loc>
    <lastmod>${lastModified()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
${posts}
</urlset>`
 
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}