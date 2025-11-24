// Mock data for Artist Portfolio

export const artistInfo = {
  name: "Alexandra Bennett",
  tagline: "Contemporary Fine Artist & Portrait Specialist",
  shortBio: "Award-winning artist specializing in contemporary portraits, abstract paintings, and mixed media art. Featured in major galleries across the country.",
  fullBio: "Alexandra Bennett is a contemporary fine artist whose work explores the intersection of emotion and color through portraiture and abstract expressionism. With over 15 years of professional experience, her distinctive style has been featured in galleries nationwide and collected by art enthusiasts worldwide. Her work is characterized by bold brushstrokes, vibrant color palettes, and an uncanny ability to capture the essence of her subjects.",
  artistStatement: "My art is a journey through human emotion, translated into visual language. Each piece tells a story—sometimes loud and bold, sometimes whispered in subtle hues. I believe that art should evoke feeling, spark conversation, and challenge perspectives. Through my work, I aim to create connections between the viewer and the canvas, bridging the gap between the tangible and the emotional.",
  email: "alexandra@artistportfolio.com",
  phone: "+1 (555) 123-4567",
  location: "New York, USA",
  social: {
    instagram: "https://instagram.com/alexandrabennett",
    youtube: "https://youtube.com/@alexandrabennett",
    facebook: "https://facebook.com/alexandrabennettart",
    twitter: "https://twitter.com/alexbennettart"
  }
};

export const timeline = [
  {
    year: "2024",
    title: "Solo Exhibition - 'Reflections'",
    description: "Major solo exhibition at Contemporary Art Museum featuring 40 new works exploring themes of identity and transformation."
  },
  {
    year: "2023",
    title: "International Art Fair - Paris",
    description: "Represented at Paris International Art Fair, with works acquired by European collectors."
  },
  {
    year: "2022",
    title: "Artist Residency - Italy",
    description: "Three-month residency in Florence, Italy, focusing on classical portraiture techniques and Renaissance influences."
  },
  {
    year: "2021",
    title: "Featured in Art Magazine",
    description: "Cover feature in Contemporary Art Review, highlighting emerging artists making waves in the portrait genre."
  },
  {
    year: "2020",
    title: "Gallery Representation",
    description: "Signed with prestigious Madison Gallery for exclusive representation."
  },
  {
    year: "2018",
    title: "MFA Graduation",
    description: "Master of Fine Arts in Painting from Rhode Island School of Design."
  }
];

export const awards = [
  {
    year: "2024",
    title: "National Portrait Award",
    organization: "American Portrait Society",
    description: "First place award for excellence in contemporary portraiture",
    image: "https://images.unsplash.com/photo-1639377947236-7c437d2fb142"
  },
  {
    year: "2023",
    title: "Emerging Artist Grant",
    organization: "National Endowment for the Arts",
    description: "$50,000 grant for innovative contemporary art projects",
    image: "https://images.unsplash.com/photo-1613825787641-2dbbd4f96a1c"
  },
  {
    year: "2023",
    title: "Best in Show",
    organization: "Contemporary Art Exhibition",
    description: "Top prize at the Annual Contemporary Art Exhibition",
    image: "https://images.pexels.com/photos/7723731/pexels-photo-7723731.jpeg"
  },
  {
    year: "2022",
    title: "Excellence in Fine Arts",
    organization: "International Art Council",
    description: "Recognition for outstanding contribution to contemporary fine arts",
    image: "https://images.pexels.com/photos/3387892/pexels-photo-3387892.jpeg"
  },
  {
    year: "2021",
    title: "Rising Star Award",
    organization: "Art Collectors Association",
    description: "Awarded to promising artists making significant impact",
    image: "https://images.unsplash.com/photo-1715173679369-18006e84d6a8"
  }
];

export const mediaFeatures = [
  {
    title: "Local Artist Makes National Headlines",
    publication: "The Art Times",
    date: "March 2024",
    excerpt: "Alexandra Bennett's latest exhibition 'Reflections' has captured the attention of critics and collectors nationwide...",
    image: "https://images.unsplash.com/photo-1623039405147-547794f92e9e",
    type: "article"
  },
  {
    title: "Studio Visit: Inside the Creative Process",
    publication: "Artist Magazine",
    date: "January 2024",
    excerpt: "We spent a day in Bennett's studio exploring her unique approach to contemporary portraiture and mixed media...",
    image: "https://images.unsplash.com/photo-1585241936774-6929b1721ffa",
    type: "article"
  },
  {
    title: "Rising Stars of Contemporary Art",
    publication: "Modern Art Review",
    date: "November 2023",
    excerpt: "Bennett is among the top 10 emerging artists to watch in the contemporary art scene...",
    image: "https://images.pexels.com/photos/9469733/pexels-photo-9469733.jpeg",
    type: "article"
  },
  {
    title: "Behind the Canvas Documentary",
    publication: "Art TV Network",
    date: "September 2023",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    excerpt: "An intimate look at Alexandra Bennett's creative journey and artistic philosophy.",
    image: "https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg",
    type: "video"
  },
  {
    title: "Portrait of Success",
    publication: "Cultural Times",
    date: "June 2023",
    excerpt: "How one artist is redefining contemporary portraiture for a new generation...",
    image: "https://images.unsplash.com/photo-1763758298936-f6610008043e",
    type: "article"
  }
];

export const galleryCategories = [
  {
    id: "paintings",
    title: "Paintings",
    description: "Contemporary abstract and figurative paintings",
    count: 12
  },
  {
    id: "portraits",
    title: "Portraits",
    description: "Expressive portrait studies and commissioned works",
    count: 15
  },
  {
    id: "sketches",
    title: "Sketches",
    description: "Preliminary studies and charcoal drawings",
    count: 20
  },
  {
    id: "digital",
    title: "Digital Art",
    description: "Mixed media and digital explorations",
    count: 8
  },
  {
    id: "charcoal",
    title: "Charcoal Art",
    description: "Dramatic monochrome charcoal pieces",
    count: 10
  },
  {
    id: "custom",
    title: "Custom Works",
    description: "Commissioned pieces and special projects",
    count: 6
  }
];

export const artworks = [
  // Paintings
  { id: 1, category: "paintings", title: "Sunset Dreams", year: "2024", medium: "Oil on Canvas", size: "48 x 36 inches", image: "https://images.unsplash.com/photo-1740598307395-3ccc0ec28a28", featured: true },
  { id: 2, category: "paintings", title: "Urban Rhythm", year: "2024", medium: "Acrylic on Canvas", size: "60 x 40 inches", image: "https://images.pexels.com/photos/16040659/pexels-photo-16040659.jpeg" },
  { id: 3, category: "paintings", title: "Abstract Emotions", year: "2023", medium: "Mixed Media", size: "36 x 36 inches", image: "https://images.pexels.com/photos/9221307/pexels-photo-9221307.jpeg" },
  { id: 4, category: "paintings", title: "Color Symphony", year: "2023", medium: "Oil on Canvas", size: "72 x 48 inches", image: "https://images.unsplash.com/photo-1569342380852-035f42d9ca41", featured: true },
  
  // Portraits
  { id: 5, category: "portraits", title: "Silent Contemplation", year: "2024", medium: "Oil on Canvas", size: "30 x 24 inches", image: "https://images.unsplash.com/photo-1762117499084-2305f510c84c", featured: true },
  { id: 6, category: "portraits", title: "The Artist", year: "2024", medium: "Watercolor", size: "24 x 18 inches", image: "https://images.unsplash.com/photo-1716934893244-450310a6ab29" },
  { id: 7, category: "portraits", title: "Elegance in Blue", year: "2023", medium: "Oil on Canvas", size: "40 x 30 inches", image: "https://images.unsplash.com/photo-1713779490284-a81ff6a8ffae" },
  { id: 8, category: "portraits", title: "Modern Muse", year: "2023", medium: "Acrylic on Canvas", size: "36 x 28 inches", image: "https://images.unsplash.com/photo-1623317978595-5eed03cbba31" },
  
  // Sketches
  { id: 9, category: "sketches", title: "Studio Sketch Series", year: "2024", medium: "Graphite on Paper", size: "18 x 12 inches", image: "https://images.unsplash.com/photo-1613746011089-6a89f373d232" },
  { id: 10, category: "sketches", title: "Figure Study", year: "2024", medium: "Charcoal on Paper", size: "24 x 18 inches", image: "https://images.unsplash.com/photo-1628586431263-44040b966252" },
  { id: 11, category: "sketches", title: "Composition Studies", year: "2023", medium: "Ink on Paper", size: "16 x 12 inches", image: "https://images.pexels.com/photos/4587855/pexels-photo-4587855.jpeg" },
  
  // Digital Art
  { id: 12, category: "digital", title: "Digital Fusion", year: "2024", medium: "Digital Mixed Media", size: "Digital Print - Various", image: "https://images.pexels.com/photos/8356905/pexels-photo-8356905.jpeg" },
  { id: 13, category: "digital", title: "Contemporary Vision", year: "2024", medium: "Digital Art", size: "Digital Print - Various", image: "https://images.pexels.com/photos/34846069/pexels-photo-34846069.jpeg" },
  
  // Charcoal Art
  { id: 14, category: "charcoal", title: "Dramatic Shadows", year: "2024", medium: "Charcoal on Canvas", size: "30 x 24 inches", image: "https://images.pexels.com/photos/6932520/pexels-photo-6932520.jpeg" },
  { id: 15, category: "charcoal", title: "Monochrome Series", year: "2023", medium: "Charcoal on Paper", size: "24 x 18 inches", image: "https://images.unsplash.com/photo-1641639206124-54252d7fe09a" },
  
  // Custom Works
  { id: 16, category: "custom", title: "Commissioned Portrait", year: "2024", medium: "Oil on Canvas", size: "Custom Size", image: "https://images.unsplash.com/photo-1740598307395-3ccc0ec28a28" },
  { id: 17, category: "custom", title: "Private Collection Piece", year: "2023", medium: "Mixed Media", size: "Custom Size", image: "https://images.pexels.com/photos/16040659/pexels-photo-16040659.jpeg" }
];

export const featuredWorks = artworks.filter(work => work.featured);

export const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Art Collector",
    text: "Alexandra's work is breathtaking. The emotion she captures in her portraits is unmatched. Her pieces have become centerpieces in my collection.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    name: "David Chen",
    role: "Gallery Director",
    text: "Working with Alexandra has been a pleasure. Her professionalism and artistic vision make her one of the most exciting contemporary artists today.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  },
  {
    name: "Emily Rodriguez",
    role: "Private Commissioner",
    text: "The commissioned portrait Alexandra created for my family is absolutely stunning. She captured our essence perfectly and exceeded all expectations.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
  }
];