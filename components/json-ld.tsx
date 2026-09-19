export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: `data` is always a
      // developer-authored object, never raw user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}