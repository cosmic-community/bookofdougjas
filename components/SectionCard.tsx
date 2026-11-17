import Link from 'next/link'
import type { Section } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface SectionCardProps {
  section: Section
  articleCount?: number
}

export default function SectionCard({ section, articleCount }: SectionCardProps) {
  const name = getMetafieldValue(section.metadata?.name) || section.title
  const description = getMetafieldValue(section.metadata?.description)
  const icon = getMetafieldValue(section.metadata?.icon)

  return (
    <Link
      href={`/sections/${section.slug}`}
      className="group block rounded-xl border border-border bg-card p-6 hover:border-primary hover:shadow-lg transition-all"
    >
      <div className="flex items-start gap-4">
        {icon && (
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent text-2xl">
            {icon}
          </span>
        )}
        <div className="min-w-0">
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
            {name}
          </h3>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{description}</p>
          )}
          {typeof articleCount === 'number' && (
            <p className="mt-3 text-xs font-medium text-muted-foreground">
              {articleCount} {articleCount === 1 ? 'article' : 'articles'}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}