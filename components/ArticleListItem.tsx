import Link from 'next/link'
import type { Article } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface ArticleListItemProps {
  article: Article
}

export default function ArticleListItem({ article }: ArticleListItemProps) {
  const title = getMetafieldValue(article.metadata?.title) || article.title
  const featured = article.metadata?.featured === true

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 hover:border-primary hover:bg-accent/40 transition-all"
    >
      <span className="flex items-center gap-2 font-medium group-hover:text-primary transition-colors">
        <span className="text-muted-foreground">📄</span>
        {title}
      </span>
      {featured && (
        <span className="rounded-full bg-primary/10 text-primary px-2 py-0.5 text-xs font-semibold">
          Featured
        </span>
      )}
    </Link>
  )
}