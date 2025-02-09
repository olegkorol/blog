import { getPosts } from '../posts/get-posts.ts'
import config from '../config.ts'
 
export async function GET() {
  const allPosts = await getPosts()
  const posts = allPosts
    .map(
      post => `    <item>
        <title>${post.title}</title>
        <description>${post.frontMatter.description}</description>
        <link>${config.siteUrl}${post.route}</link>
        <pubDate>${new Date(post.frontMatter.date).toUTCString()}</pubDate>
    </item>`
    )
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${config.appName}</title>
    <link>${config.siteUrl}</link>
    <description>${config.appDescription}</description>
    <language>${config.lang}</language>
${posts}
  </channel>
</rss>`
 
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml'
    }
  })
}