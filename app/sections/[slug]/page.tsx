// app/sections/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getSectionBySlug, getArticlesBySection, getMetafieldValue } from '@/lib/cosmic'
import ArticleListItem from '@/components/ArticleListItem'

export default async function SectionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const section = await getSectionBySlug(slug)

  if (!section) {
    notFound()
  }

  const articles = await getArticlesBySection(section.id)
  const name = getMetafieldValue(section.metadata?.name) || section.title
  const description = getMetafieldValue(section.metadata?.description)
  const icon = getMetafieldValue(section.metadata?.icon)

  return (
    <div className="space-y-8">
      <nav className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{name}</span>
      </nav>

      <header className="flex items-start gap-4">
        {icon && (
          <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-accent text-3xl">
            {icon}
          </span>
        )}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">{name}</h1>
          {description && (
            <p className="mt-2 text-muted-foreground max-w-2xl">{description}</p>
          )}
        </div>
      </header>

      {articles.length > 0 ? (
        <div className="space-y-3">
          {articles.map((article) => (
            <ArticleListItem key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No articles in this section yet.</p>
      )}
    </div>
  )
}