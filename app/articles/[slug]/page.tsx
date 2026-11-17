// app/articles/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getArticleBySlug, getMetafieldValue } from '@/lib/cosmic'
import CodeSample from '@/components/CodeSample'

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const title = getMetafieldValue(article.metadata?.title) || article.title
  const content = getMetafieldValue(article.metadata?.content)
  const codeSample = getMetafieldValue(article.metadata?.code_sample)
  const section = article.metadata?.section
  const lastUpdated = article.metadata?.last_updated
  const featured = article.metadata?.featured === true

  const formattedDate = lastUpdated
    ? new Date(lastUpdated).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  return (
    <article className="max-w-3xl">
      <nav className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        {section && (
          <>
            <span className="mx-2">/</span>
            <Link href={`/sections/${section.slug}`} className="hover:text-foreground">
              {getMetafieldValue(section.metadata?.name) || section.title}
            </Link>
          </>
        )}
        <span className="mx-2">/</span>
        <span className="text-foreground">{title}</span>
      </nav>

      <header className="mt-6 border-b border-border pb-6">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-4xl font-extrabold tracking-tight">{title}</h1>
          {featured && (
            <span className="rounded-full bg-primary/10 text-primary px-2.5 py-0.5 text-xs font-semibold">
              Featured
            </span>
          )}
        </div>
        {formattedDate && (
          <p className="mt-3 text-sm text-muted-foreground">Last updated {formattedDate}</p>
        )}
      </header>

      {content && (
        <div
          className="prose prose-lg max-w-none mt-8"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}

      {codeSample && <CodeSample code={codeSample} />}
    </article>
  )
}