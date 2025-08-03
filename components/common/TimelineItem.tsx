import { TimelineEvent } from '@/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'

interface TimelineItemProps {
  event: TimelineEvent
  className?: string
}

export default function TimelineItem({ event, className = "" }: TimelineItemProps) {
  const { language } = useLanguage()

  return (
    <div className={`relative flex items-start gap-6 ${className}`}>
      <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full border-4 border-blue-200 flex items-center justify-center shadow-lg">
        {event.icon}
      </div>
      <Card className="flex-1 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader>
          <div className="flex items-center gap-4">
            <CardTitle className="text-2xl font-bold text-blue-900">{event.year}</CardTitle>
            <CardDescription className="text-lg font-semibold text-gray-700">
              {event.title}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 leading-relaxed">{event.description}</p>
        </CardContent>
      </Card>
    </div>
  )
} 