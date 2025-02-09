export const Updated = ({ date }: { date: string }) => (
  <p style={{ fontSize: '0.8rem', color: 'gray', fontStyle: 'italic' }}>
    (Last updated on {new Date(date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })})
  </p>
)