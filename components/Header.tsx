import Link from 'next/link'

interface HeaderProps {
  siteTitle: string
  githubUrl?: string
  currentVersion?: string
}

export default function Header({ siteTitle, githubUrl, currentVersion }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container-max px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground text-lg font-bold shadow-sm">
            📚
          </span>
          <span className="text-lg font-bold tracking-tight group-hover:text-primary transition-colors">
            {siteTitle}
          </span>
          {currentVersion && (
            <span className="hidden sm:inline-flex ml-2 rounded-full bg-accent text-accent-foreground px-2.5 py-0.5 text-xs font-semibold">
              v{currentVersion}
            </span>
          )}
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/changelog" className="text-muted-foreground hover:text-foreground transition-colors">
            Changelog
          </Link>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-foreground text-background px-3 py-1.5 hover:opacity-90 transition-opacity"
            >
              GitHub
            </a>
          )}
        </nav>
      </div>
    </header>
  )
}