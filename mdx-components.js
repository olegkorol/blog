import { useMDXComponents as getBlogMDXComponents } from 'nextra-theme-blog'

const blogComponents = getBlogMDXComponents({
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
    table: ({ children, ...props }) => (
      <div className="table-container">
        <table {...props}>{children}</table>
      </div>
    ),
    tr: (props) => <tr {...props} />,
    th: (props) => <th {...props} />,
    td: (props) => <td {...props} />,
    ...components
  }
}