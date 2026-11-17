interface CodeSampleProps {
  code: string
}

export default function CodeSample({ code }: CodeSampleProps) {
  if (!code) {
    return null
  }

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-border bg-foreground shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs font-medium text-white/50">Code Sample</span>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code className="font-mono text-white/90">{code}</code>
      </pre>
    </div>
  )
}