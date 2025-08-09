export type Language = 'en' | 'kn'

export interface Translations {
  // Header & Navigation
  home: string
  events: string
  gallery: string
  sevas: string
  history: string
  management: string
  communityHall: string
  donate: string

  // Hero Section
  templeName: string
  templeAddress: string
  templePhone: string
  whatsapp: string
  templeTimings: string

  // Events Section
  upcomingEventsTitle: string
  upcomingEventsSubtitle: string
  clickToZoom: string

  // History Section
  templeHistoryTitle: string
  templeHistorySubtitle: string
  sacredOrigins: string
  majorDevelopments: string
  spiritualActivities: string
  decadesOfService: string
  divineBlessings: string
  sarveJanahSukhinoBhavantu: string
  mayAllBeingsBeHappy: string

  // History Content
  historyBeginning: string
  historyFoundation: string
  historyGopuram: string
  historyInfrastructure: string
  historyDeities: string
  historySpiritual: string
  historyService: string

  // Major Developments
  gopuramConstruction: string
  gopuramDescription: string
  infrastructureGrowth: string
  infrastructureDescription: string
  additionalDeities: string
  deitiesDescription: string

  // Spiritual Activities
  regularFestivals: string
  dailyWorship: string
  sankashtaHaraGanapati: string
  satyanarayanaPuja: string
  pradoshaPuja: string
  maasashivaratri: string
  girijaKalyanaotsava: string
  panchaamrutaabhisheka: string
  rudraabhisheka: string
  dailyAartiBhajans: string
  prasadDistribution: string
  spiritualGuidance: string

  // Contact & Info
  established: string
  phone: string
  address: string
  timings: string

  // Contact Page
  contactUs: string
  contactSubtitle: string
  visitUs: string
  callUs: string
  emailUs: string
  sendMessage: string
  contactFormSubtitle: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  subject: string
  message: string
  enterFirstName: string
  enterLastName: string
  enterEmail: string
  enterPhone: string
  enterSubject: string
  enterMessage: string
  findUs: string
  interactiveMap: string
  templeLocation: string
  quickContact: string
  emergencyContact: string
  emergencySubtitle: string
  historicalTimeline: string

  // Events Page
  upcomingEvents: string
  eventsSubtitle: string
  registerForEvent: string
  eventCalendar: string
  calendarSubtitle: string
  eventDay: string
  majorFestival: string
  festival: string
  weeklyRitual: string
  monthlyRitual: string
  bimonthly: string

  // Gallery Page
  templeGallery: string
  gallerySubtitle: string
  temple: string
  festivals: string
  galleryHistory: string

  // History Page
  historyOfTemple: string
  historyPageSubtitle: string
  foundationAndInstallation: string
  infrastructureGrowthTitle: string
  additionalDeitiesTitle: string
  spiritualActivitiesTitle: string
  decadesOfServiceTitle: string
  communityImpact: string
  dailyWorshipTitle: string
  communityGrowth: string
  dailyWorshipSubtitle: string
  communityGrowthSubtitle: string
  fiveNectarAbhisheka: string
  sacredShivaAbhisheka: string
  dedicatedTrustees: string
  generousSupport: string
  communityWelfare: string
  spiritualGuidanceCounseling: string

  // Deity Names
  lordGanesha: string
  lordShivaLingam: string
  goddessParvati: string
  lordHanuman: string
}

export const translations: Record<Language, Translations> = {
  en: {
    // Header & Navigation
    home: "Home",
    events: "Events",
    gallery: "Gallery",
    sevas: "Sevas",
    history: "History",
    management: "Management",
    communityHall: "Community Hall",
    donate: "Donate",

    // Hero Section
    templeName: "Sri SriKanteshwara Temple",
    templeAddress: "Chennammanakere Achukattu, Banashankari 3rd Phase, Bengaluru 560 085",
    templePhone: "080-2598 6509",
    whatsapp: "WhatsApp",
    templeTimings: "Temple Timings",

    // Events Section
    upcomingEventsTitle: "Upcoming Events & Festivals",
    upcomingEventsSubtitle: "Join us in celebrating divine festivals and spiritual gatherings throughout the year. Experience the joy of devotion and community worship.",
    clickToZoom: "Click to Zoom",

    // History Section
    templeHistoryTitle: "Temple History & Heritage",
    templeHistorySubtitle: "A sacred journey through time - preserving ancient traditions while serving the spiritual needs of generations of devotees since 1990",
    sacredOrigins: "Sacred Origins",
    majorDevelopments: "Major Developments",
    spiritualActivities: "Spiritual Activities",
    decadesOfService: "25+ Years of Service",
    divineBlessings: "Divine Blessings",
    sarveJanahSukhinoBhavantu: "Sarve Janah Sukhino Bhavantu",
    mayAllBeingsBeHappy: "May all beings be happy and prosperous",

    // History Content
    historyBeginning: "Chennamman Kere Layout in Banashankari 3rd Stage was developed by BDA around 1983. After the residents successfully obtained basic civic amenities through their welfare association, the community felt a deep desire to establish a place of worship for spiritual and cultural activities.",
    historyFoundation: "The 'Shri Shrikantheshwara Temple Trust' was established to fulfill this dream. On the last Monday of Kartik month in 1990, Lord Shri Shrikantheshwara was ceremonially installed following traditional Shaivagama rituals. A beautiful Shiva Linga from Shivara village in Kolar district was consecrated at the auspicious time of 5:30 AM during Brahmi Muhurta.",
    historyGopuram: "Beautiful Vimana Gopurams (temple towers) were built over the three sanctums, with a grand Kumbhaabhisheka ceremony conducted by His Holiness Paramapujya Rangapriya Swamiji.",
    historyInfrastructure: "The temple complex expanded to include Main Assembly Hall, Cultural Building, Yajna Hall for fire ceremonies, 'Dhyanasakthi' Shiva statue carved from single stone, ornate teak doors with intricate artwork, flag post and renovated platform.",
    historyDeities: "Lord Ganapati, Goddess Parvati, and Navagraha deities were installed through community support, creating a comprehensive spiritual sanctuary for all devotees.",
    historySpiritual: "Regular festivals including Sankashta Hara Ganapati Vrata, Satyanarayana Puja, Pradosha Puja, Maasashivaratri, and the special Girija Kalyanaotsava (Divine Marriage Festival). Daily worship including Panchaamrutaabhisheka and Rudraabhisheka continues without interruption.",
    historyService: "Since 1990, the temple has served thousands of devotees. Many testify to having their prayers answered, particularly regarding marriage arrangements and progeny, through Lord Shiva's divine grace. The temple's growth has been possible through dedicated service of trustees and generous support from devotees.",

    // Major Developments
    gopuramConstruction: "2005 - Gopuram Construction",
    gopuramDescription: "Beautiful Vimana Gopurams (temple towers) were built over the three sanctums, with a grand Kumbhaabhisheka ceremony conducted by His Holiness Paramapujya Rangapriya Swamiji.",
    infrastructureGrowth: "Infrastructure Growth",
    infrastructureDescription: "The temple complex expanded to include Main Assembly Hall, Cultural Building, Yajna Hall for fire ceremonies, 'Dhyanasakthi' Shiva statue carved from single stone, ornate teak doors with intricate artwork, flag post and renovated platform.",
    additionalDeities: "Additional Deities",
    deitiesDescription: "Lord Ganapati, Goddess Parvati, and Navagraha deities were installed through community support, creating a comprehensive spiritual sanctuary for all devotees.",

    // Spiritual Activities
    regularFestivals: "Regular Festivals",
    dailyWorship: "Daily Worship",
    sankashtaHaraGanapati: "Sankashta Hara Ganapati Vrata",
    satyanarayanaPuja: "Satyanarayana Puja",
    pradoshaPuja: "Pradosha Puja",
    maasashivaratri: "Maasashivaratri",
    girijaKalyanaotsava: "Girija Kalyanaotsava (Divine Marriage Festival)",
    panchaamrutaabhisheka: "Panchaamrutaabhisheka",
    rudraabhisheka: "Rudraabhisheka",
    dailyAartiBhajans: "Daily Aarti and Bhajans",
    prasadDistribution: "Prasad Distribution",
    spiritualGuidance: "Spiritual Guidance",

    // Contact & Info
    established: "Established",
    phone: "Phone",
    address: "Address",
    timings: "Timings",

    // Contact Page
    contactUs: "Contact Us",
    contactSubtitle: "We're here to serve you. Reach out for any spiritual guidance or temple services",
    visitUs: "Visit Us",
    callUs: "Call Us",
    emailUs: "Email Us",
    sendMessage: "Send us a Message",
    contactFormSubtitle: "Have questions about our services, events, or need spiritual guidance? We're here to help.",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phoneNumber: "Phone Number",
    subject: "Subject",
    message: "Message",
    enterFirstName: "Enter your first name",
    enterLastName: "Enter your last name",
    enterEmail: "Enter your email address",
    enterPhone: "Enter your phone number",
    enterSubject: "What is this regarding?",
    enterMessage: "Please share your message, questions, or how we can help you...",
    findUs: "Find Us",
    interactiveMap: "Interactive Map",
    templeLocation: "Temple Location",
    quickContact: "Quick Contact",
    emergencyContact: "Emergency Contact",
    emergencySubtitle: "For urgent matters or emergencies, please call our 24/7 helpline:",
    historicalTimeline: "Historical Timeline",

    // Events Page
    upcomingEvents: "Upcoming Events",
    eventsSubtitle: "Join us in celebrating divine festivals and spiritual gatherings throughout the year",
    registerForEvent: "Register for Event",
    eventCalendar: "Event Calendar",
    calendarSubtitle: "Stay updated with our complete schedule of festivals, rituals, and special ceremonies",
    eventDay: "Event Day",
    majorFestival: "Major Festival",
    festival: "Festival",
    weeklyRitual: "Weekly Ritual",
    monthlyRitual: "Monthly Ritual",
    bimonthly: "Bi-monthly",

    // Gallery Page
    templeGallery: "Temple Gallery",
    gallerySubtitle: "Glimpses of divine moments, sacred celebrations, and spiritual heritage",
    temple: "Temple",
    festivals: "Festivals",
    galleryHistory: "History",

    // History Page
    historyOfTemple: "History of Shri Shrikantheshwara Swami Temple",
    historyPageSubtitle: "A sacred journey through time - preserving traditions, serving devotees since 1990",
    foundationAndInstallation: "Foundation and Sacred Installation",
    infrastructureGrowthTitle: "Infrastructure Growth",
    additionalDeitiesTitle: "Additional Deities",
    spiritualActivitiesTitle: "Spiritual Activities",
    decadesOfServiceTitle: "Decades of Service",
    communityImpact: "25+ Years of Service",
    dailyWorshipTitle: "Daily Worship",
    communityGrowth: "Community Growth",
    dailyWorshipSubtitle: "Since 1990, daily worship including Panchaamrutaabhisheka and Rudraabhisheka continues without interruption.",
    communityGrowthSubtitle: "The temple's growth has been possible through the dedicated service of trustees and generous support from devotees.",
    fiveNectarAbhisheka: "Panchaamrutaabhisheka (Five Nectar Abhisheka)",
    sacredShivaAbhisheka: "Rudraabhisheka (Sacred Shiva Abhisheka)",
    dedicatedTrustees: "Dedicated trustees and volunteers",
    generousSupport: "Generous support from devotees",
    communityWelfare: "Community welfare programs",
    spiritualGuidanceCounseling: "Spiritual guidance and counseling",

    // Deity Names
    lordGanesha: "Lord Ganesha",
    lordShivaLingam: "Lord Shiva Lingam",
    goddessParvati: "Goddess Parvati",
    lordHanuman: "Lord Hanuman",
  },

  kn: {
    // Header & Navigation
    home: "ಮುಖಪುಟ",
    events: "ಕಾರ್ಯಕ್ರಮಗಳು",
    gallery: "ಚಿತ್ರಶಾಲೆ",
    sevas: "ಸೇವೆಗಳು",
    history: "ಚರಿತ್ರೆ",
    management: "ನಿರ್ವಹಣೆ",
    communityHall: "ಸಮುದಾಯ ಭವನ",
    donate: "ದಾನ",

    // Hero Section
    templeName: "ಶ್ರೀ ಶ್ರೀಕಂಠೇಶ್ವರಸ್ವಾಮಿ ದೇವಸ್ಥಾನ",
    templeAddress: "ಚನ್ನಮ್ಮನಕೆರೆ ಅಚ್ಚುಕಟ್ಟು, ಬನಶಂಕರಿ 3ನೇ ಹಂತ, ಬೆಂಗಳೂರು 560 085",
    templePhone: "080-2598 6509",
    whatsapp: "ವಾಟ್ಸಾಪ್",
    templeTimings: "ದೇವಸ್ಥಾನ ಸಮಯಗಳು",

    // Events Section
    upcomingEventsTitle: "ಮುಂದಿನ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಹಬ್ಬಗಳು",
    upcomingEventsSubtitle: "ವರ್ಷದುದ್ದಕ್ಕೂ ದೈವಿಕ ಹಬ್ಬಗಳು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಸಮಾರಂಭಗಳನ್ನು ಆಚರಿಸಲು ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ. ಭಕ್ತಿ ಮತ್ತು ಸಮುದಾಯ ಪೂಜೆಯ ಸಂತೋಷವನ್ನು ಅನುಭವಿಸಿ.",
    clickToZoom: "ಜೂಮ್ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ",

    // History Section
    templeHistoryTitle: "ದೇವಸ್ಥಾನದ ಇತಿಹಾಸ ಮತ್ತು ಪರಂಪರೆ",
    templeHistorySubtitle: "ಕಾಲದ ಮೂಲಕ ಪವಿತ್ರ ಪ್ರಯಾಣ - 1990 ರಿಂದ ತಲೆಮಾರುಗಳ ಭಕ್ತರ ಆಧ್ಯಾತ್ಮಿಕ ಅಗತ್ಯತೆಗಳನ್ನು ಪೂರೈಸುತ್ತಾ ಪ್ರಾಚೀನ ಸಂಪ್ರದಾಯಗಳನ್ನು ಸಂರಕ್ಷಿಸುತ್ತಿದೆ",
    sacredOrigins: "ಪವಿತ್ರ ಮೂಲಗಳು",
    majorDevelopments: "ಪ್ರಮುಖ ಅಭಿವೃದ್ಧಿಗಳು",
    spiritualActivities: "ಆಧ್ಯಾತ್ಮಿಕ ಚಟುವಟಿಕೆಗಳು",
    decadesOfService: "25+ ವರ್ಷಗಳ ಸೇವೆ",
    divineBlessings: "ದೈವಿಕ ಆಶೀರ್ವಾದಗಳು",
    sarveJanahSukhinoBhavantu: "ಸರ್ವೇ ಜನಃ ಸುಖಿನೋ ಭವಂತು",
    mayAllBeingsBeHappy: "ಎಲ್ಲಾ ಜೀವಿಗಳೂ ಸುಖಿ ಮತ್ತು ಸಮೃದ್ಧರಾಗಲಿ",

    // History Content
    historyBeginning: "ಬನಶಂಕರಿ 3ನೇ ಹಂತದ ಚನ್ನಮ್ಮನಕೆರೆ ಲೇಔಟ್ ಅನ್ನು 1983 ರ ಸುಮಾರಿಗೆ ಬಿಡಿಎ ವಿಕಸಿಸಿತು. ನಿವಾಸಿಗಳು ತಮ್ಮ ಕಲ್ಯಾಣ ಸಂಘದ ಮೂಲಕ ಮೂಲ ನಾಗರಿಕ ಸೌಲಭ್ಯಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಪಡೆದ ನಂತರ, ಸಮುದಾಯವು ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಚಟುವಟಿಕೆಗಳಿಗಾಗಿ ಪೂಜಾ ಸ್ಥಳವನ್ನು ಸ್ಥಾಪಿಸುವ ಗಾಢವಾದ ಇಚ್ಛೆಯನ್ನು ಅನುಭವಿಸಿತು.",
    historyFoundation: "ಈ ಕನಸನ್ನು ನೆರವೇರಿಸಲು 'ಶ್ರೀ ಶ್ರೀಕಂಠೇಶ್ವರ ದೇವಸ್ಥಾನ ಟ್ರಸ್ಟ್' ಸ್ಥಾಪಿಸಲಾಯಿತು. 1990 ರ ಕಾರ್ತಿಕ ಮಾಸದ ಕೊನೆಯ ಸೋಮವಾರ, ಶ್ರೀ ಶ್ರೀಕಂಠೇಶ್ವರರನ್ನು ಸಾಂಪ್ರದಾಯಿಕ ಶೈವಾಗಮ ವಿಧಿಗಳನ್ನು ಅನುಸರಿಸಿ ವಿಧ್ಯುಕ್ತವಾಗಿ ಸ್ಥಾಪಿಸಲಾಯಿತು. ಕೋಲಾರ ಜಿಲ್ಲೆಯ ಶಿವರ ಗ್ರಾಮದಿಂದ ಸುಂದರವಾದ ಶಿವಲಿಂಗವನ್ನು ಬ್ರಾಹ್ಮೀ ಮುಹೂರ್ತದಲ್ಲಿ ಬೆಳಗಿನ 5:30 ಗಂಟೆಗೆ ಅಭಿಷೇಕ ಮಾಡಲಾಯಿತು.",
    historyGopuram: "ಮೂರು ಗರ್ಭಗುಡಿಗಳ ಮೇಲೆ ಸುಂದರವಾದ ವಿಮಾನ ಗೋಪುರಗಳನ್ನು (ದೇವಸ್ಥಾನ ಗೋಪುರಗಳು) ನಿರ್ಮಿಸಲಾಯಿತು, ಪರಮಪೂಜ್ಯ ರಂಗಪ್ರಿಯ ಸ್ವಾಮೀಜಿಯವರಿಂದ ಭವ್ಯ ಕುಂಭಾಭಿಷೇಕ ಸಮಾರಂಭವನ್ನು ನಡೆಸಲಾಯಿತು.",
    historyInfrastructure: "ದೇವಸ್ಥಾನ ಸಂಕೀರ್ಣವು ಮುಖ್ಯ ಸಭಾಂಗಣ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕಟ್ಟಡ, ಯಜ್ಞ ಮಂಟಪ, ಏಕಶಿಲೆಯಿಂದ ಕೆತ್ತಿದ 'ಧ್ಯಾನಶಕ್ತಿ' ಶಿವ ವಿಗ್ರಹ, ಕುಸುರಿ ಕೆಲಸದೊಂದಿಗೆ ಅಲಂಕೃತ ತೇಗದ ಬಾಗಿಲುಗಳು, ಧ್ವಜಸ್ತಂಭ ಮತ್ತು ನವೀಕರಿಸಿದ ವೇದಿಕೆಯನ್ನು ಒಳಗೊಂಡಂತೆ ವಿಸ್ತರಿಸಲಾಯಿತು.",
    historyDeities: "ದೇವ ಗಣಪತಿ, ದೇವಿ ಪಾರ್ವತಿ ಮತ್ತು ನವಗ್ರಹ ದೇವತೆಗಳನ್ನು ಸಮುದಾಯ ಬೆಂಬಲದೊಂದಿಗೆ ಸ್ಥಾಪಿಸಲಾಯಿತು, ಎಲ್ಲಾ ಭಕ್ತರಿಗಾಗಿ ಸಮಗ್ರ ಆಧ್ಯಾತ್ಮಿಕ ಆಶ್ರಯವನ್ನು ಸೃಷ್ಟಿಸಿತು.",
    historySpiritual: "ಸಂಕಷ್ಟ ಹರ ಗಣಪತಿ ವ್ರತ, ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ, ಪ್ರದೋಷ ಪೂಜೆ, ಮಾಸಶಿವರಾತ್ರಿ ಮತ್ತು ವಿಶೇಷ ಗಿರಿಜಾ ಕಲ್ಯಾಣೋತ್ಸವ (ದೈವಿಕ ವಿವಾಹ ಹಬ್ಬ) ಸೇರಿದಂತೆ ನಿಯಮಿತ ಹಬ್ಬಗಳು. ಪಂಚಾಮೃತಾಭಿಷೇಕ ಮತ್ತು ರುದ್ರಾಭಿಷೇಕ ಸೇರಿದಂತೆ ದೈನಂದಿನ ಪೂಜೆಯು ನಿರ್ವಿಘ್ನವಾಗಿ ಮುಂದುವರಿಯುತ್ತಿದೆ.",
    historyService: "1990 ರಿಂದ, ದೇವಸ್ಥಾನವು ಸಾವಿರಾರು ಭಕ್ತರಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸಿದೆ. ಅನೇಕರು ತಮ್ಮ ಪ್ರಾರ್ಥನೆಗಳಿಗೆ ಉತ್ತರ ದೊರೆತಿದೆ ಎಂದು ಸಾಕ್ಷ್ಯ ನೀಡುತ್ತಾರೆ, ವಿಶೇಷವಾಗಿ ವಿವಾಹ ವ್ಯವಸ್ಥೆಗಳು ಮತ್ತು ಸಂತತಿಯ ಕುರಿತು, ದೇವ ಶಿವರ ದೈವಿಕ ಕೃಪೆಯ ಮೂಲಕ. ದೇವಸ್ಥಾನದ ಬೆಳವಣಿಗೆ ಟ್ರಸ್ಟಿಗಳ ಸಮರ್ಪಿತ ಸೇವೆ ಮತ್ತು ಭಕ್ತರ ಉದಾರ ಬೆಂಬಲದ ಮೂಲಕ ಸಾಧ್ಯವಾಗಿದೆ.",

    // Major Developments
    gopuramConstruction: "2005 - ಗೋಪುರ ನಿರ್ಮಾಣ",
    gopuramDescription: "ಮೂರು ಗರ್ಭಗುಡಿಗಳ ಮೇಲೆ ಸುಂದರವಾದ ವಿಮಾನ ಗೋಪುರಗಳನ್ನು (ದೇವಸ್ಥಾನ ಗೋಪುರಗಳು) ನಿರ್ಮಿಸಲಾಯಿತು, ಪರಮಪೂಜ್ಯ ರಂಗಪ್ರಿಯ ಸ್ವಾಮೀಜಿಯವರಿಂದ ಭವ್ಯ ಕುಂಭಾಭಿಷೇಕ ಸಮಾರಂಭವನ್ನು ನಡೆಸಲಾಯಿತು.",
    infrastructureGrowth: "ಮೂಲಸೌಕರ್ಯ ಬೆಳವಣಿಗೆ",
    infrastructureDescription: "ದೇವಸ್ಥಾನ ಸಂಕೀರ್ಣವು ಮುಖ್ಯ ಸಭಾಂಗಣ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕಟ್ಟಡ, ಯಜ್ಞ ಮಂಟಪ, ಏಕಶಿಲೆಯಿಂದ ಕೆತ್ತಿದ 'ಧ್ಯಾನಶಕ್ತಿ' ಶಿವ ವಿಗ್ರಹ, ಕುಸುರಿ ಕೆಲಸದೊಂದಿಗೆ ಅಲಂಕೃತ ತೇಗದ ಬಾಗಿಲುಗಳು, ಧ್ವಜಸ್ತಂಭ ಮತ್ತು ನವೀಕರಿಸಿದ ವೇದಿಕೆಯನ್ನು ಒಳಗೊಂಡಂತೆ ವಿಸ್ತರಿಸಲಾಯಿತು.",
    additionalDeities: "ಹೆಚ್ಚುವರಿ ದೇವತೆಗಳು",
    deitiesDescription: "ದೇವ ಗಣಪತಿ, ದೇವಿ ಪಾರ್ವತಿ ಮತ್ತು ನವಗ್ರಹ ದೇವತೆಗಳನ್ನು ಸಮುದಾಯ ಬೆಂಬಲದೊಂದಿಗೆ ಸ್ಥಾಪಿಸಲಾಯಿತು, ಎಲ್ಲಾ ಭಕ್ತರಿಗಾಗಿ ಸಮಗ್ರ ಆಧ್ಯಾತ್ಮಿಕ ಆಶ್ರಯವನ್ನು ಸೃಷ್ಟಿಸಿತು.",

    // Spiritual Activities
    regularFestivals: "ನಿಯಮಿತ ಹಬ್ಬಗಳು",
    dailyWorship: "ದೈನಂದಿನ ಪೂಜೆ",
    sankashtaHaraGanapati: "ಸಂಕಷ್ಟ ಹರ ಗಣಪತಿ ವ್ರತ",
    satyanarayanaPuja: "ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ",
    pradoshaPuja: "ಪ್ರದೋಷ ಪೂಜೆ",
    maasashivaratri: "ಮಾಸಶಿವರಾತ್ರಿ",
    girijaKalyanaotsava: "ಗಿರಿಜಾ ಕಲ್ಯಾಣೋತ್ಸವ (ದೈವಿಕ ವಿವಾಹ ಹಬ್ಬ)",
    panchaamrutaabhisheka: "ಪಂಚಾಮೃತಾಭಿಷೇಕ",
    rudraabhisheka: "ರುದ್ರಾಭಿಷೇಕ",
    dailyAartiBhajans: "ದೈನಂದಿನ ಆರತಿ ಮತ್ತು ಭಜನೆಗಳು",
    prasadDistribution: "ಪ್ರಸಾದ ವಿತರಣೆ",
    spiritualGuidance: "ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನ",

    // Contact & Info
    established: "ಸ್ಥಾಪಿತ",
    phone: "ಫೋನ್",
    address: "ವಿಳಾಸ",
    timings: "ಸಮಯಗಳು",

    // Contact Page
    contactUs: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    contactSubtitle: "ನಾವು ನಿಮಗೆ ಸೇವೆ ಸಲ್ಲಿಸಲು ಇಲ್ಲಿದ್ದೇವೆ. ಯಾವುದೇ ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನ ಅಥವಾ ದೇವಸ್ಥಾನ ಸೇವೆಗಳಿಗಾಗಿ ಸಂಪರ್ಕಿಸಿ",
    visitUs: "ನಮ್ಮನ್ನು ಭೇಟಿ ಮಾಡಿ",
    callUs: "ನಮ್ಮನ್ನು ಕರೆ ಮಾಡಿ",
    emailUs: "ನಮಗೆ ಇಮೇಲ್ ಮಾಡಿ",
    sendMessage: "ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ",
    contactFormSubtitle: "ನಮ್ಮ ಸೇವೆಗಳು, ಕಾರ್ಯಕ್ರಮಗಳು ಅಥವಾ ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನದ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳಿವೆಯೇ? ನಾವು ಸಹಾಯ ಮಾಡಲು ಇಲ್ಲಿದ್ದೇವೆ.",
    firstName: "ಮೊದಲ ಹೆಸರು",
    lastName: "ಕೊನೆಯ ಹೆಸರು",
    email: "ಇಮೇಲ್",
    phoneNumber: "ಫೋನ್ ಸಂಖ್ಯೆ",
    subject: "ವಿಷಯ",
    message: "ಸಂದೇಶ",
    enterFirstName: "ನಿಮ್ಮ ಮೊದಲ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
    enterLastName: "ನಿಮ್ಮ ಕೊನೆಯ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
    enterEmail: "ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ",
    enterPhone: "ನಿಮ್ಮ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
    enterSubject: "ಇದು ಯಾವುದರ ಕುರಿತು?",
    enterMessage: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಸಂದೇಶ, ಪ್ರಶ್ನೆಗಳು ಅಥವಾ ನಾವು ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು ಎಂಬುದನ್ನು ಹಂಚಿಕೊಳ್ಳಿ...",
    findUs: "ನಮ್ಮನ್ನು ಹುಡುಕಿ",
    interactiveMap: "ಅಂತರ್ಕ್ರಿಯಾತ್ಮಕ ನಕ್ಷೆ",
    templeLocation: "ದೇವಸ್ಥಾನ ಸ್ಥಳ",
    quickContact: "ತ್ವರಿತ ಸಂಪರ್ಕ",
    emergencyContact: "ತುರ್ತು ಸಂಪರ್ಕ",
    emergencySubtitle: "ತ ುರ್ತು ವಿಷಯಗಳು ಅಥವಾ ತುರ್ತು ಸಂದರ್ಭಗಳಿಗಾಗಿ, ದಯವಿಟ್ಟು ನಮ್ಮ 24/7 ಸಹಾಯ ಲೈನ್ ಕರೆ ಮಾಡಿ:",
    historicalTimeline: "ಐತಿಹಾಸಿಕ ಕಾಲಮಾನ",

    // Events Page
    upcomingEvents: "ಮುಂದಿನ ಕಾರ್ಯಕ್ರಮಗಳು",
    eventsSubtitle: "ವರ್ಷದುದ್ದಕ್ಕೂ ದೈವಿಕ ಹಬ್ಬಗಳು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಸಮಾರಂಭಗಳನ್ನು ಆಚರಿಸಲು ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ",
    registerForEvent: "ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ನೋಂದಾಯಿಸಿ",
    eventCalendar: "ಕಾರ್ಯಕ್ರಮ ಕ್ಯಾಲೆಂಡರ್",
    calendarSubtitle: "ಹಬ್ಬಗಳು, ವಿಧಿಗಳು ಮತ್ತು ವಿಶೇಷ ಸಮಾರಂಭಗಳ ನಮ್ಮ ಸಂಪೂರ್ಣ ವೇಳಾಪಟ್ಟಿಯೊಂದಿಗೆ ನವೀಕೃತವಾಗಿರಿ",
    eventDay: "ಕಾರ್ಯಕ್ರಮದ ದಿನ",
    majorFestival: "ಪ್ರಮುಖ ಹಬ್ಬ",
    festival: "ಹಬ್ಬ",
    weeklyRitual: "ಸಾಪ್ತಾಹಿಕ ವಿಧಿ",
    monthlyRitual: "ಮಾಸಿಕ ವಿಧಿ",
    bimonthly: "ಅರ್ಧಮಾಸಿಕ",

    // Gallery Page
    templeGallery: "ದೇವಸ್ಥಾನ ಚಿತ್ರಶಾಲೆ",
    gallerySubtitle: "ದೈವಿಕ ಕ್ಷಣಗಳ, ಪವಿತ್ರ ಆಚರಣೆಗಳ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಪರಂಪರೆಯ ಒಂದು ನೋಟ",
    temple: "ದೇವಸ್ಥಾನ",
    festivals: "ಹಬ್ಬಗಳು",
    galleryHistory: "ಇತಿಹಾಸ",

    // History Page
    historyOfTemple: "ಶ್ರೀ ಶ್ರೀಕಂಠೇಶ್ವರಸ್ವಾಮಿ ದೇವಸ್ಥಾನದ ಇತಿಹಾಸ",
    historyPageSubtitle: "ಕಾಲದ ಮೂಲಕ ಪವಿತ್ರ ಪ್ರಯಾಣ - 1990 ರಿಂದ ಸಂಪ್ರದಾಯಗಳನ್ನು ಸಂರಕ್ಷಿಸುತ್ತಾ ಭಕ್ತರಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದೆ",
    foundationAndInstallation: "ಸ್ಥಾಪನೆ ಮತ್ತು ಪವಿತ್ರ ಸ್ಥಾಪನೆ",
    infrastructureGrowthTitle: "ಮೂಲಸೌಕರ್ಯ ಬೆಳವಣಿಗೆ",
    additionalDeitiesTitle: "ಹೆಚ್ಚುವರಿ ದೇವತೆಗಳು",
    spiritualActivitiesTitle: "ಆಧ್ಯಾತ್ಮಿಕ ಚಟುವಟಿಕೆಗಳು",
    decadesOfServiceTitle: "ಸೇವೆಯ ದಶಕಗಳು",
    communityImpact: "25+ ವರ್ಷಗಳ ಸೇವೆ",
    dailyWorshipTitle: "ದೈನಂದಿನ ಪೂಜೆ",
    communityGrowth: "ಸಮುದಾಯ ಬೆಳವಣಿಗೆ",
    dailyWorshipSubtitle: "1990 ರಿಂದ, ಪಂಚಾಮೃತಾಭಿಷೇಕ ಮತ್ತು ರುದ್ರಾಭಿಷೇಕ ಸೇರಿದಂತೆ ದೈನಂದಿನ ಪೂಜೆಯು ನಿರ್ವಿಘ್ನವಾಗಿ ಮುಂದುವರಿಯುತ್ತಿದೆ.",
    communityGrowthSubtitle: "ದೇವಸ್ಥಾನದ ಬೆಳವಣಿಗೆ ಟ್ರಸ್ಟಿಗಳ ಸಮರ್ಪಿತ ಸೇವೆ ಮತ್ತು ಭಕ್ತರ ಉದಾರ ಬೆಂಬಲದ ಮೂಲಕ ಸಾಧ್ಯವಾಗಿದೆ.",
    fiveNectarAbhisheka: "ಪಂಚಾಮೃತಾಭಿಷೇಕ (ಐದು ಅಮೃತ ಅಭಿಷೇಕ)",
    sacredShivaAbhisheka: "ರುದ್ರಾಭಿಷೇಕ (ಪವಿತ್ರ ಶಿವ ಅಭಿಷೇಕ)",
    dedicatedTrustees: "ಸಮರ್ಪಿತ ಟ್ರಸ್ಟಿಗಳು ಮತ್ತು ಸ್ವಯಂಸೇವಕರು",
    generousSupport: "ಭಕ್ತರ ಉದಾರ ಬೆಂಬಲ",
    communityWelfare: "ಸಮುದಾಯ ಕಲ್ಯಾಣ ಕಾರ್ಯಕ್ರಮಗಳು",
    spiritualGuidanceCounseling: "ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಸಲಹೆ",

    // Deity Names
    lordGanesha: "ದೇವ ಗಣೇಶ",
    lordShivaLingam: "ದೇವ ಶಿವಲಿಂಗ",
    goddessParvati: "ದೇವಿ ಪಾರ್ವತಿ",
    lordHanuman: "ದೇವ ಹನುಮಂತ",
  }
}

export const getTranslation = (language: Language, key: keyof Translations): string => {
  return translations[language][key]
} 