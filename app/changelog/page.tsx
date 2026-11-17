import { getChangelogEntries } from '@/lib/cosmic'
import ChangelogItem from '@/components/ChangelogItem'

export const metadata = {
  title: 'Changelog | My Rules Docs',
  description: 'Version history and release notes for My Rules.',
}

export default async function ChangelogPage() {
  const entries = await getChangelogEntries()

  return (
    <div className="max-w-3xl">
      <header className="mb-10">
        <span className="inline-flex rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">
          Releases
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight">Changelog</h1>
        <p className="mt-2 text-muted-foreground">
          Track new features, improvements, and fixes across every release.
        </p>
      </header>

      {entries.length > 0 ? (
        <div className="relative">
          {entries.map((entry) => (
            <ChangelogItem key={entry.id} entry={entry} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No changelog entries yet.</p>
      )}
    </div>
  )
}