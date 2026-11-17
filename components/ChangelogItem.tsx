import type { ChangelogEntry } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import ChangeTypeBadge from '@/components/ChangeTypeBadge'

interface ChangelogItemProps {
  entry: ChangelogEntry
}

export default function ChangelogItem({ entry }: ChangelogItemProps) {
  const version = getMetafieldValue(entry.metadata?.version) || entry.title
  const changeType = getMetafieldValue(entry.metadata?.change_type)
  const releaseNotes = getMetafieldValue(entry.metadata?.release_notes)
  const releaseDate = entry.metadata?.release_date

  const formattedDate = releaseDate
    ? new Date(releaseDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-accent" />
      <span className="absolute left-[5px] top-5 bottom-0 w-px bg-border last:hidden" />

      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-bold">v{version}</h3>
          {changeType && <ChangeTypeBadge type={changeType} />}
          {formattedDate && (
            <span className="text-sm text-muted-foreground">{formattedDate}</span>
          )}
        </div>
        {releaseNotes && (
          <div
            className="prose prose-sm max-w-none mt-4 text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: releaseNotes }}
          />
        )}
      </div>
    </div>
  )
}