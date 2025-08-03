export interface Event {
  id: number
  title: string
  date: string
  time: string
  description: string
  image: string
  category: string
  attendees: string
}

export interface GalleryItem {
  id: number
  src: string
  alt: string
  title: string
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: React.ReactNode
}

export interface Deity {
  name: string
  sanskritName: string
  image: string
  mantra: string
}

export interface TempleInfo {
  name: string
  sanskritName: string
  address: string
  phone: string
  whatsapp: string
  timings: string
  established: string
}

export interface ContactInfo {
  type: 'visit' | 'call' | 'email'
  title: string
  icon: React.ReactNode
  details: string[]
} 