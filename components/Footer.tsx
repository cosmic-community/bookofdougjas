interface FooterProps {
  siteTitle: string
}

export default function Footer({ siteTitle }: FooterProps) {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border mt-auto">
      <div className="container-max px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>
          &copy; {year} {siteTitle}. All rights reserved.
        </p>
        <p>
          Built with{' '}
          <a
            href="https://www.cosmicjs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            Cosmic
          </a>
        </p>
      </div>
    </footer>
  )
}