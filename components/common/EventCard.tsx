import { Event } from '@/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'
import Image from 'next/image'

interface EventCardProps {
  event: Event
  className?: string
}

export default function EventCard({ event, className = "" }: EventCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Major Festival":
        return "bg-red-100 text-red-800"
      case "Festival":
        return "bg-orange-100 text-orange-800"
      case "Weekly Ritual":
        return "bg-blue-100 text-blue-800"
      case "Monthly Ritual":
        return "bg-green-100 text-green-800"
      case "Bi-monthly":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className={`hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}>
      <div className="relative">
        <Image
          src={event.image}
          alt={event.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <Badge className={`absolute top-4 left-4 ${getCategoryColor(event.category)}`}>
          {event.category}
        </Badge>
      </div>

      <CardHeader>
        <CardTitle className="text-blue-900 text-xl">{event.title}</CardTitle>
        <CardDescription className="flex items-center gap-2 text-gray-600">
          <Calendar size={16} />
          {event.date}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-700 text-sm leading-relaxed">{event.description}</p>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-blue-600" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={16} className="text-blue-600" />
            <span>Expected: {event.attendees}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-blue-600" />
            <span>Main Temple Hall</span>
          </div>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700">Register for Event</Button>
      </CardContent>
    </Card>
  )
} 