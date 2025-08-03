import { TimelineEvent } from '@/types'
import { Calendar, Crown, Heart, Star, Users, Building, Flame, Gem } from "lucide-react"
import React from 'react'
import { getTranslation } from '@/lib/translations'
import { Language } from '@/lib/translations'

export const getTimelineEvents = (language: Language): TimelineEvent[] => [
  {
    year: "1983-1990",
    title: language === 'en' ? "The Beginning" : "ಆರಂಭ",
    description: language === 'en' 
      ? "Chennamman Kere Layout in Banashankari 3rd Stage was developed by BDA around 1983. After the residents successfully obtained basic civic amenities through their welfare association, the community felt a deep desire to establish a place of worship for spiritual and cultural activities."
      : "ಬನಶಂಕರಿ 3ನೇ ಹಂತದ ಚನ್ನಮ್ಮನಕೆರೆ ಲೇಔಟ್ ಅನ್ನು 1983 ರ ಸುಮಾರಿಗೆ ಬಿಡಿಎ ವಿಕಸಿಸಿತು. ನಿವಾಸಿಗಳು ತಮ್ಮ ಕಲ್ಯಾಣ ಸಂಘದ ಮೂಲಕ ಮೂಲ ನಾಗರಿಕ ಸೌಲಭ್ಯಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಪಡೆದ ನಂತರ, ಸಮುದಾಯವು ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಚಟುವಟಿಕೆಗಳಿಗಾಗಿ ಪೂಜಾ ಸ್ಥಳವನ್ನು ಸ್ಥಾಪಿಸುವ ಗಾಢವಾದ ಇಚ್ಛೆಯನ್ನು ಅನುಭವಿಸಿತು.",
    icon: React.createElement(Building, { className: "text-blue-600", size: 24 }),
  },
  {
    year: "1990",
    title: language === 'en' ? "Foundation and Sacred Installation" : "ಸ್ಥಾಪನೆ ಮತ್ತು ಪವಿತ್ರ ಸ್ಥಾಪನೆ",
    description: language === 'en'
      ? "The 'Shri Shrikantheshwara Temple Trust' was established. On the last Monday of Kartik month, Lord Shri Shrikantheshwara was ceremonially installed following traditional Shaivagama rituals. A beautiful Shiva Linga from Shivara village in Kolar district was consecrated at 5:30 AM during Brahmi Muhurta."
      : "ಈ ಕನಸನ್ನು ನೆರವೇರಿಸಲು 'ಶ್ರೀ ಶ್ರೀಕಂಠೇಶ್ವರ ದೇವಸ್ಥಾನ ಟ್ರಸ್ಟ್' ಸ್ಥಾಪಿಸಲಾಯಿತು. 1990 ರ ಕಾರ್ತಿಕ ಮಾಸದ ಕೊನೆಯ ಸೋಮವಾರ, ಶ್ರೀ ಶ್ರೀಕಂಠೇಶ್ವರರನ್ನು ಸಾಂಪ್ರದಾಯಿಕ ಶೈವಾಗಮ ವಿಧಿಗಳನ್ನು ಅನುಸರಿಸಿ ವಿಧ್ಯುಕ್ತವಾಗಿ ಸ್ಥಾಪಿಸಲಾಯಿತು. ಕೋಲಾರ ಜಿಲ್ಲೆಯ ಶಿವರ ಗ್ರಾಮದಿಂದ ಸುಂದರವಾದ ಶಿವಲಿಂಗವನ್ನು ಬ್ರಾಹ್ಮೀ ಮುಹೂರ್ತದಲ್ಲಿ ಬೆಳಗಿನ 5:30 ಗಂಟೆಗೆ ಅಭಿಷೇಕ ಮಾಡಲಾಯಿತು.",
    icon: React.createElement(Star, { className: "text-amber-600", size: 24 }),
  },
  {
    year: "2005",
    title: language === 'en' ? "Gopuram Construction" : "ಗೋಪುರ ನಿರ್ಮಾಣ",
    description: language === 'en'
      ? "Beautiful Vimana Gopurams (temple towers) were built over the three sanctums, with a grand Kumbhaabhisheka ceremony conducted by His Holiness Paramapujya Rangapriya Swamiji."
      : "ಮೂರು ಗರ್ಭಗುಡಿಗಳ ಮೇಲೆ ಸುಂದರವಾದ ವಿಮಾನ ಗೋಪುರಗಳನ್ನು (ದೇವಸ್ಥಾನ ಗೋಪುರಗಳು) ನಿರ್ಮಿಸಲಾಯಿತು, ಪರಮಪೂಜ್ಯ ರಂಗಪ್ರಿಯ ಸ್ವಾಮೀಜಿಯವರಿಂದ ಭವ್ಯ ಕುಂಭಾಭಿಷೇಕ ಸಮಾರಂಭವನ್ನು ನಡೆಸಲಾಯಿತು.",
    icon: React.createElement(Crown, { className: "text-purple-600", size: 24 }),
  },
  {
    year: "2005-2010",
    title: language === 'en' ? "Infrastructure Growth" : "ಮೂಲಸೌಕರ್ಯ ಬೆಳವಣಿಗೆ",
    description: language === 'en'
      ? "The temple complex expanded to include Main Assembly Hall, Cultural Building, Yajna Hall for fire ceremonies, 'Dhyanasakthi' Shiva statue carved from single stone, ornate teak doors with intricate artwork, flag post and renovated platform."
      : "ದೇವಸ್ಥಾನ ಸಂಕೀರ್ಣವು ಮುಖ್ಯ ಸಭಾಂಗಣ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕಟ್ಟಡ, ಯಜ್ಞ ಮಂಟಪ, ಏಕಶಿಲೆಯಿಂದ ಕೆತ್ತಿದ 'ಧ್ಯಾನಶಕ್ತಿ' ಶಿವ ವಿಗ್ರಹ, ಕುಸುರಿ ಕೆಲಸದೊಂದಿಗೆ ಅಲಂಕೃತ ತೇಗದ ಬಾಗಿಲುಗಳು, ಧ್ವಜಸ್ತಂಭ ಮತ್ತು ನವೀಕರಿಸಿದ ವೇದಿಕೆಯನ್ನು ಒಳಗೊಂಡಂತೆ ವಿಸ್ತರಿಸಲಾಯಿತು.",
    icon: React.createElement(Heart, { className: "text-red-600", size: 24 }),
  },
  {
    year: "2010-2015",
    title: language === 'en' ? "Additional Deities" : "ಹೆಚ್ಚುವರಿ ದೇವತೆಗಳು",
    description: language === 'en'
      ? "Lord Ganapati, Goddess Parvati, and Navagraha deities were installed through community support, creating a comprehensive spiritual sanctuary for all devotees."
      : "ಲಾರ್ಡ್ ಗಣಪತಿ, ದೇವಿ ಪಾರ್ವತಿ ಮತ್ತು ನವಗ್ರಹ ದೇವತೆಗಳನ್ನು ಸಮುದಾಯ ಬೆಂಬಲದೊಂದಿಗೆ ಸ್ಥಾಪಿಸಲಾಯಿತು, ಎಲ್ಲಾ ಭಕ್ತರಿಗಾಗಿ ಸಮಗ್ರ ಆಧ್ಯಾತ್ಮಿಕ ಆಶ್ರಯವನ್ನು ಸೃಷ್ಟಿಸಿತು.",
    icon: React.createElement(Gem, { className: "text-emerald-600", size: 24 }),
  },
  {
    year: "1990-Present",
    title: language === 'en' ? "Spiritual Activities" : "ಆಧ್ಯಾತ್ಮಿಕ ಚಟುವಟಿಕೆಗಳು",
    description: language === 'en'
      ? "Regular festivals including Sankashta Hara Ganapati Vrata, Satyanarayana Puja, Pradosha Puja, Maasashivaratri, and the special Girija Kalyanaotsava (Divine Marriage Festival). Daily worship including Panchaamrutaabhisheka and Rudraabhisheka continues without interruption."
      : "ಸಂಕಷ್ಟ ಹರ ಗಣಪತಿ ವ್ರತ, ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ, ಪ್ರದೋಷ ಪೂಜೆ, ಮಾಸಶಿವರಾತ್ರಿ ಮತ್ತು ವಿಶೇಷ ಗಿರಿಜಾ ಕಲ್ಯಾಣೋತ್ಸವ (ದೈವಿಕ ವಿವಾಹ ಹಬ್ಬ) ಸೇರಿದಂತೆ ನಿಯಮಿತ ಹಬ್ಬಗಳು. ಪಂಚಾಮೃತಾಭಿಷೇಕ ಮತ್ತು ರುದ್ರಾಭಿಷೇಕ ಸೇರಿದಂತೆ ದೈನಂದಿನ ಪೂಜೆಯು ನಿರ್ವಿಘ್ನವಾಗಿ ಮುಂದುವರಿಯುತ್ತಿದೆ.",
    icon: React.createElement(Flame, { className: "text-orange-600", size: 24 }),
  },
  {
    year: "25+ Years",
    title: language === 'en' ? "Decades of Service" : "ಸೇವೆಯ ದಶಕಗಳು",
    description: language === 'en'
      ? "Since 1990, the temple has served thousands of devotees. Many testify to having their prayers answered, particularly regarding marriage arrangements and progeny, through Lord Shiva's divine grace. The temple's growth has been possible through dedicated service of trustees and generous support from devotees."
      : "1990 ರಿಂದ, ದೇವಸ್ಥಾನವು ಸಾವಿರಾರು ಭಕ್ತರಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸಿದೆ. ಅನೇಕರು ತಮ್ಮ ಪ್ರಾರ್ಥನೆಗಳಿಗೆ ಉತ್ತರ ದೊರೆತಿದೆ ಎಂದು ಸಾಕ್ಷ್ಯ ನೀಡುತ್ತಾರೆ, ವಿಶೇಷವಾಗಿ ವಿವಾಹ ವ್ಯವಸ್ಥೆಗಳು ಮತ್ತು ಸಂತತಿಯ ಕುರಿತು, ಲಾರ್ಡ್ ಶಿವರ ದೈವಿಕ ಕೃಪೆಯ ಮೂಲಕ. ದೇವಸ್ಥಾನದ ಬೆಳವಣಿಗೆ ಟ್ರಸ್ಟಿಗಳ ಸಮರ್ಪಿತ ಸೇವೆ ಮತ್ತು ಭಕ್ತರ ಉದಾರ ಬೆಂಬಲದ ಮೂಲಕ ಸಾಧ್ಯವಾಗಿದೆ.",
    icon: React.createElement(Users, { className: "text-green-600", size: 24 }),
  },
] 