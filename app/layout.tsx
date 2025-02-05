import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Analytics } from '@vercel/analytics/react'
import 'nextra-theme-blog/style.css'
import './global.css'
 
export const metadata = {
  title: "Oleg Korol",
  description: "Oleg Korol's blog"
}
 
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head
       faviconGlyph="📒"
       color={{
          hue: 0,
          saturation: 0,
          lightness: {
            light: 50,
            dark: 100,
          }
        }}
        backgroundColor={{
          light: '#fafafa',
          dark: '#0f172a'
        }}
       />
      <body>
        <Layout>
          <Navbar pageMap={await getPageMap()}>
            <Search placeholder="Search..." />
            <ThemeSwitch />
          </Navbar>
          {children}
 
          <Footer>
            <abbr
              title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
              style={{ cursor: 'help' }}
            >
              CC BY-NC 4.0
            </abbr>{' '}
            {new Date().getFullYear()} © Oleg Korol.
            <a href="/rss.xml" style={{ float: 'right' }}>
              RSS
            </a>
          </Footer>
        </Layout>
        <Analytics />
      </body>
    </html>
  )
}