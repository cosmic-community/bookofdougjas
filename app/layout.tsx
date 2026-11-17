import type { Metadata } from 'next'
import './globals.css'
import { getSiteSettings, getSections } from '@/lib/cosmic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import CosmicBadge from '@/components/CosmicBadge'
import { getMetafieldValue } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'My Rules | Docs',
  description: 'Documentation, guides, code samples, and changelog for My Rules.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [settings, sections] = await Promise.all([
    getSiteSettings(),
    getSections(),
  ])

  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string
  const siteTitle = settings ? getMetafieldValue(settings.metadata?.site_title) || 'My Rules | Docs' : 'My Rules | Docs'
  const githubUrl = settings ? getMetafieldValue(settings.metadata?.github_url) : ''
  const currentVersion = settings ? getMetafieldValue(settings.metadata?.current_version) : ''

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📚</text></svg>" />
        <script src="/dashboard-console-capture.js" />
              <script defer src="https://insights.cosmicinsights.dev/script.js" data-project="6a4c182e67f2f6a3f805054c"></script>
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <Header siteTitle={siteTitle} githubUrl={githubUrl} currentVersion={currentVersion} />
        <div className="flex-1 w-full container-max px-4 flex flex-col lg:flex-row gap-8 py-8">
          <Sidebar sections={sections} />
          <main className="flex-1 min-w-0">{children}</main>
        </div>
        <Footer siteTitle={siteTitle} />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}