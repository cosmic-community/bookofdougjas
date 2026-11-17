interface ChangeTypeBadgeProps {
  type: string
}

const typeStyles: Record<string, string> = {
  New: 'bg-green-100 text-green-800',
  Improved: 'bg-blue-100 text-blue-800',
  Fixed: 'bg-amber-100 text-amber-800',
  Deprecated: 'bg-orange-100 text-orange-800',
  Removed: 'bg-red-100 text-red-800',
  Security: 'bg-purple-100 text-purple-800',
}

export default function ChangeTypeBadge({ type }: ChangeTypeBadgeProps) {
  if (!type) {
    return null
  }
  const style = typeStyles[type] || 'bg-gray-100 text-gray-800'
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${style}`}>
      {type}
    </span>
  )
}