import Link from 'next/link'
import { getSiteSettings, getSections, getAllArticles, getFeaturedArticles, getMetafieldValue } from '@/lib/cosmic'
import SectionCard from '@/components/SectionCard'
import ArticleListItem from '@/components/ArticleListItem'

export default async function HomePage() {
  const [settings, sections, allArticles, featured] = await Promise.all([
    getSiteSettings(),
    getSections(),
    getAllArticles(),
    getFeaturedArticles(),
  ])

  const siteTitle = settings ? getMetafieldValue(settings.metadata?.site_title) || 'My Rules | Docs' : 'My Rules | Docs'
  const tagline = settings ? getMetafieldValue(settings.metadata?.tagline) : 'Everything you need to get started.'

  const articleCountBySection: Record<string, number> = {}
  allArticles.forEach((article) => {
    const sectionId = article.metadata?.section?.id
    if (sectionId) {
      articleCountBySection[sectionId] = (articleCountBySection[sectionId] || 0) + 1
    }
  })

  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="rounded-2xl border border-border bg-gradient-to-br from-accent to-background p-8 sm:p-12">
        <span className="inline-flex rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">
          Documentation
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
          {siteTitle}
        </h1>
        {tagline && (
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{tagline}</p>
        )}
        <div className="mt-6 flex flex-wrap gap-3">
          {sections[0] && (
            <Link
              href={`/sections/${sections[0].slug}`}
              className="inline-flex rounded-lg bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          )}
          <Link
            href="/changelog"
            className="inline-flex rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:bg-muted transition-colors"
          >
            View Changelog
          </Link>
        </div>
      </section>

      {/* Sections */}
      {sections.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-6">Browse by Section</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {sections.map((section) => (
              <SectionCard
                key={section.id}
                section={section}
                articleCount={articleCountBySection[section.id] || 0}
              />
            ))}
          </div>
        </section>
      )}

      {/* Featured Articles */}
      {featured.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-6">Featured Articles</h2>
          <div className="space-y-3">
            {featured.map((article) => (
              <ArticleListItem key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}

      {sections.length === 0 && (
        <p className="text-muted-foreground">No documentation sections found yet.</p>
      )}
    </div>
  )
}