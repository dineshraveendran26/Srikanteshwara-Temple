import { Deity } from '@/types'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'

interface DeityCardProps {
  deity: Deity
  className?: string
}

export default function DeityCard({ deity, className = "" }: DeityCardProps) {
  const { language } = useLanguage()

  const getDeityTranslationKey = (deityName: string) => {
    switch (deityName) {
      case "Lord Ganesha":
        return 'lordGanesha'
      case "Lord Shiva Lingam":
        return 'lordShivaLingam'
      case "Goddess Parvati":
        return 'goddessParvati'
      case "Lord Hanuman":
        return 'lordHanuman'
      default:
        return 'lordGanesha'
    }
  }

  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-amber-400/30 hover:bg-white/20 transition-all duration-300 ${className}`}>
      <p className="text-xs md:text-sm font-medium text-amber-200 mb-2">{deity.mantra}</p>
      <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-md flex items-center justify-center overflow-hidden">
        <Image
          src={deity.image}
          alt={getTranslation(language, getDeityTranslationKey(deity.name))}
          width={120}
          height={120}
          className="rounded-md object-cover w-full h-full"
        />
      </div>
    </div>
  )
} 