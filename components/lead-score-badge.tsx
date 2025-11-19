import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface LeadScoreBadgeProps {
  score: number
  classification: 'super-hot' | 'hot' | 'warm' | 'cold' | 'unqualified'
  showScore?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function LeadScoreBadge({
  score,
  classification,
  showScore = true,
  size = 'md'
}: LeadScoreBadgeProps) {
  const getClassificationConfig = () => {
    switch (classification) {
      case 'super-hot':
        return {
          label: 'Super Hot',
          emoji: '🔥',
          bgColor: 'bg-red-500/20',
          textColor: 'text-red-400',
          borderColor: 'border-red-500/30',
          glowColor: 'shadow-red-500/20'
        }
      case 'hot':
        return {
          label: 'Hot',
          emoji: '🟠',
          bgColor: 'bg-orange-500/20',
          textColor: 'text-orange-400',
          borderColor: 'border-orange-500/30',
          glowColor: 'shadow-orange-500/20'
        }
      case 'warm':
        return {
          label: 'Warm',
          emoji: '🟡',
          bgColor: 'bg-yellow-500/20',
          textColor: 'text-yellow-400',
          borderColor: 'border-yellow-500/30',
          glowColor: 'shadow-yellow-500/20'
        }
      case 'cold':
        return {
          label: 'Cold',
          emoji: '🔵',
          bgColor: 'bg-blue-500/20',
          textColor: 'text-blue-400',
          borderColor: 'border-blue-500/30',
          glowColor: 'shadow-blue-500/20'
        }
      case 'unqualified':
        return {
          label: 'Unqualified',
          emoji: '⚪',
          bgColor: 'bg-gray-500/20',
          textColor: 'text-gray-400',
          borderColor: 'border-gray-500/30',
          glowColor: 'shadow-gray-500/20'
        }
    }
  }

  const config = getClassificationConfig()

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5'
  }

  return (
    <Badge
      className={cn(
        config.bgColor,
        config.textColor,
        config.borderColor,
        config.glowColor,
        sizeClasses[size],
        'font-semibold shadow-lg border'
      )}
    >
      <span className="mr-1">{config.emoji}</span>
      {config.label}
      {showScore && (
        <span className="ml-1.5 opacity-75">
          ({score}/100)
        </span>
      )}
    </Badge>
  )
}

interface LeadPriorityIndicatorProps {
  priority: 1 | 2 | 3 | 4 | 5
  size?: 'sm' | 'md' | 'lg'
}

export function LeadPriorityIndicator({ priority, size = 'md' }: LeadPriorityIndicatorProps) {
  const getPriorityConfig = () => {
    switch (priority) {
      case 1:
        return { label: 'Urgente', color: 'text-red-500', icon: '⚡' }
      case 2:
        return { label: 'Alta', color: 'text-orange-500', icon: '🔼' }
      case 3:
        return { label: 'Media', color: 'text-yellow-500', icon: '▶' }
      case 4:
        return { label: 'Baja', color: 'text-blue-500', icon: '🔽' }
      case 5:
        return { label: 'Mínima', color: 'text-gray-500', icon: '⏸' }
    }
  }

  const config = getPriorityConfig()

  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }

  return (
    <span className={cn('flex items-center gap-1', config.color, sizeClasses[size])}>
      <span>{config.icon}</span>
      <span className="font-medium">{config.label}</span>
    </span>
  )
}

interface ScoreBreakdownProps {
  breakdown: {
    capital: number
    experience: number
    timing: number
    objective: number
    completeness: number
  }
}

export function ScoreBreakdown({ breakdown }: ScoreBreakdownProps) {
  const items = [
    { label: 'Capital', value: breakdown.capital, max: 30, color: 'bg-green-500' },
    { label: 'Experiencia', value: breakdown.experience, max: 20, color: 'bg-blue-500' },
    { label: 'Timing', value: breakdown.timing, max: 15, color: 'bg-purple-500' },
    { label: 'Objetivo', value: breakdown.objective, max: 15, color: 'bg-orange-500' },
    { label: 'Completitud', value: breakdown.completeness, max: 20, color: 'bg-yellow-500' }
  ]

  return (
    <div className="space-y-3 p-4 bg-[#1a1a1a]/50 rounded-lg border border-[#c2a255]/20">
      <h4 className="text-sm font-semibold text-white">Desglose del Score</h4>
      {items.map((item) => (
        <div key={item.label} className="space-y-1">
          <div className="flex justify-between text-xs text-gray-400">
            <span>{item.label}</span>
            <span className="font-mono">{item.value}/{item.max}</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className={cn('h-full transition-all duration-500', item.color)}
              style={{ width: `${(item.value / item.max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
