import { useMDXComponents as getBlogMDXComponents } from 'nextra-theme-blog'

const blogComponents = getBlogMDXComponents({
  // h1: ({ children }) => (
  //   <h1
  //     style={{
  //       WebkitBackgroundClip: 'text',
  //       WebkitTextFillColor: 'transparent',
  //       backgroundClip: 'text',
  //       backgroundImage: 'linear-gradient(90deg,#7928CA,#FF0080)'
  //     }}
  //   >
  //     {children}
  //   </h1>
  // ),
  DateFormatter: ({ date }) =>
    `written on ${date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })}`,
})

export function useMDXComponents(components) {
  return {
    ...blogComponents,
    ...components
  }
}