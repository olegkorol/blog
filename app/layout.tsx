import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-blog/style.css'
 
export const metadata = {
  title: "Oleg Korol",
  description: "Oleg Korol's blog"
}

const backgroundColors = {
  dark: '#0f172a',
  light: '#fafafa'
}
 
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head backgroundColor={backgroundColors} faviconGlyph="📒"/>
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
      </body>
    </html>
  )
}