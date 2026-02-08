/**
 * Event image data configuration
 */
export interface EventImageConfig {
  src: string
  altEn: string
  altKn: string
}

export const EVENT_IMAGES: EventImageConfig[] = [
  {
    src: '/images/maha-shivaratri-invitation.jpeg',
    altEn: 'Maha Shivaratri Pooja Mahotsava Invitation - February 15, 2026',
    altKn: 'ಮಹಾಶಿವರಾತ್ರಿ ಪೂಜಾ ಮಹೋತ್ಸವ ಆಹ್ವಾನ ಪತ್ರಿಕೆ - ಫೆಬ್ರವರಿ 15, 2026',
  },
  {
    src: '/images/temple-seva-info-poster.jpeg',
    altEn: 'Temple Seva Details, Cultural Programs, and Information',
    altKn: 'ದೇವಸ್ಥಾನ ಸೇವಾ ವಿವರಗಳು, ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಮಾಹಿತಿ',
  },
] as const

