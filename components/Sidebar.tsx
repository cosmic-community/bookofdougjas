import Link from 'next/link'
import type { Section } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface SidebarProps {
  sections: Section[]
}

export default function Sidebar({ sections }: SidebarProps) {
  if (!sections || sections.length === 0) {
    return null
  }

  return (
    <aside className="lg:w-64 flex-shrink-0">
      <div className="lg:sticky lg:top-24">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-2">
          Documentation
        </p>
        <nav className="space-y-1">
          {sections.map((section) => {
            const name = getMetafieldValue(section.metadata?.name) || section.title
            const icon = getMetafieldValue(section.metadata?.icon)
            return (
              <Link
                key={section.id}
                href={`/sections/${section.slug}`}
                className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                {icon && <span className="text-base">{icon}</span>}
                <span>{name}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}