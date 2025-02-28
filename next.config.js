import nextra from 'nextra'
 
const withNextra = nextra({
  // ... Other Nextra config options
  defaultShowCopyCode: true,
  // codeHighlight: true,
  // readingTime: true,
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: {
        dark: 'github-dark',
        light: 'github-light'
      }
    }
  }
})
 
// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  // ... Other Next.js config options
  reactStrictMode: true,
  cleanDistDir: true,
})