import { useMDXComponents as getBlogMDXComponents } from 'nextra-theme-blog'

const tableStyles = {
  container: { overflowX: 'auto', margin: '1.5em 0' },
  table: { width: '100%', borderCollapse: 'collapse', border: 'none' },
  thead: { borderBottom: '2px solid #d1d5db' },
  th: { fontWeight: 600, padding: '0.625rem 1rem', textAlign: 'left', border: 'none' },
  td: { padding: '0.625rem 1rem', border: 'none' },
}

const blogComponents = getBlogMDXComponents({
  DateFormatter: ({ date }) =>
    `written on ${date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })}`,
  table: ({ children, ...props }) => (
    <div style={tableStyles.container}>
      <table style={tableStyles.table} {...props}>{children}</table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead style={tableStyles.thead} {...props}>{children}</thead>
  ),
  tr: (props) => <tr className="table-row" {...props} />,
  th: (props) => <th style={tableStyles.th} {...props} />,
  td: (props) => <td style={tableStyles.td} {...props} />,
})

export function useMDXComponents(components) {
  return {
    ...blogComponents,
    ...components
  }
}