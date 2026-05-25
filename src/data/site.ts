export type MuiIconName =
  | 'Language'
  | 'PhoneIphone'
  | 'SmartToy'
  | 'Email'
  | 'GitHub'
  | 'LinkedIn'
  | 'WhatsApp'
  | 'ArrowForward'
  | 'OpenInNew'
  | 'Menu'
  | 'Close'
  | 'FormatQuote'
  | 'BusinessCenter';

export type Locale = 'en' | 'id';

export interface Service {
  title: string;
  titleId?: string;
  description: string;
  descriptionId?: string;
  icon: MuiIconName;
}

export interface Project {
  title: string;
  slug: string;
  stack: string[];
  image: string;
  liveUrl?: string;
  detailsUrl?: string;
}

export interface Skill {
  name: string;
  deviconClass: string;
}

export interface Testimonial {
  quote: string;
  quoteId?: string;
  author: string;
  role: string;
}

export interface I18n {
  hero: {
    badge: string;
    cta: string;
    ctaSecondary: string;
  };
  nav: {
    cta: string;
  };
  sections: {
    services: { title: string; subtitle: string };
    projects: { title: string; subtitle: string };
    about: { title: string; subtitle: string; techStack: string; experience: string };
    testimonials: { title: string; subtitle: string };
  };
  cards: {
    liveDemo: string;
    details: string;
  };
  contact: {
    headline: string;
    subtext: string;
    whatsappLabel: string;
  };
  footer: {
    rights: string;
  };
  seo: {
    title: string;
    description: string;
  };
}

export const translations: Record<Locale, I18n> = {
  en: {
    hero: {
      badge: 'Full-Stack Developer',
      cta: 'View Projects',
      ctaSecondary: 'Contact Me',
    },
    nav: {
      cta: 'Contact Me',
    },
    sections: {
      services: {
        title: 'Services',
        subtitle: 'What I can help you build — focused, reliable, and ready to ship.',
      },
      projects: {
        title: 'Projects',
        subtitle: 'Selected work — real products built for clients and personal experiments.',
      },
      about: {
        title: 'About',
        subtitle: 'A bit about me and the tools I work with every day.',
        techStack: 'Tech Stack',
        experience: 'years experience',
      },
      testimonials: {
        title: 'Testimonials',
        subtitle: 'What clients say about working together.',
      },
    },
    cards: {
      liveDemo: 'Live Demo',
      details: 'Details',
    },
    contact: {
      headline: "Have a project? Let's talk",
      subtext: 'Tell me about your idea — I usually reply within 24 hours.',
      whatsappLabel: 'Chat on WhatsApp',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    seo: {
      title: 'Fardias Alfathan — Full-Stack Developer Portfolio',
      description:
        'Portfolio of a full-stack developer specializing in websites, mobile apps, and AI chatbots.',
    },
  },
  id: {
    hero: {
      badge: 'Full-Stack Developer',
      cta: 'Lihat Proyek',
      ctaSecondary: 'Hubungi Saya',
    },
    nav: {
      cta: 'Hubungi Saya',
    },
    sections: {
      services: {
        title: 'Layanan',
        subtitle: 'Apa yang bisa saya bantu — fokus, andal, dan siap diluncurkan.',
      },
      projects: {
        title: 'Proyek',
        subtitle: 'Karya pilihan — produk nyata yang dibangun untuk klien dan eksperimen pribadi.',
      },
      about: {
        title: 'Tentang',
        subtitle: 'Sedikit tentang saya dan alat yang saya gunakan setiap hari.',
        techStack: 'Tech Stack',
        experience: 'tahun pengalaman',
      },
      testimonials: {
        title: 'Testimoni',
        subtitle: 'Apa kata klien tentang bekerja bersama.',
      },
    },
    cards: {
      liveDemo: 'Demo Langsung',
      details: 'Detail',
    },
    contact: {
      headline: 'Punya proyek? Ayo ngobrol',
      subtext: 'Ceritakan ide kamu — saya biasanya membalas dalam 24 jam.',
      whatsappLabel: 'Chat di WhatsApp',
    },
    footer: {
      rights: 'Hak cipta dilindungi.',
    },
    seo: {
      title: 'Fardias Alfathan — Portofolio Full-Stack Developer',
      description:
        'Portofolio full-stack developer yang spesialis di website, aplikasi mobile, dan chatbot AI.',
    },
  },
};

export const site = {
  name: 'Fardias Alfathan',
  tagline: 'I build websites, apps & AI chatbots that work',
  taglineId: 'Saya membangun website, aplikasi & chatbot AI yang bekerja',
  yearsExperience: 3,
  whatsappUrl: 'https://wa.me/6287882355688',
  email: 'dias.fathan2005@gmail.com',
  github: 'https://github.com/fardias',
  linkedin: 'https://linkedin.com/in/yourusername',
  nav: [
    { label: 'Services', labelId: 'Layanan', href: '/#services' },
    { label: 'Projects', labelId: 'Proyek', href: '/#projects' },
    { label: 'About', labelId: 'Tentang', href: '/#about' },
    { label: 'Testimonials', labelId: 'Testimoni', href: '/#testimonials' },
  ],
  services: [
    {
      title: 'Website',
      titleId: 'Website',
      description:
        'Landing pages, company profiles, and web apps — fast, responsive, and SEO-ready.',
      descriptionId:
        'Landing page, profil perusahaan, dan web app — cepat, responsif, dan siap SEO.',
      icon: 'Language',
    },
    {
      title: 'Mobile Apps',
      titleId: 'Aplikasi Mobile',
      description:
        'Cross-platform mobile experiences with clean UI and reliable performance.',
      descriptionId:
        'Pengalaman mobile lintas platform dengan UI bersih dan performa yang andal.',
      icon: 'PhoneIphone',
    },
    {
      title: 'Chatbot / AI',
      titleId: 'Chatbot / AI',
      description:
        'Custom AI assistants and chatbots integrated into your product or workflow.',
      descriptionId:
        'Asisten AI dan chatbot kustom yang terintegrasi ke produk atau alur kerja kamu.',
      icon: 'SmartToy',
    },
  ] satisfies Service[],
  projects: [
    {
      title: 'E-Commerce Dashboard',
      slug: 'e-commerce-dashboard',
      stack: ['React', 'Node.js', 'PostgreSQL'],
      image: '/images/project-1.svg',
      liveUrl: '#',
      detailsUrl: '/projects/e-commerce-dashboard',
    },
    {
      title: 'Company Profile Site',
      slug: 'company-profile-site',
      stack: ['Astro', 'Tailwind'],
      image: '/images/project-2.svg',
      liveUrl: '#',
      detailsUrl: '/projects/company-profile-site',
    },
    {
      title: 'Fitness Mobile App',
      slug: 'fitness-mobile-app',
      stack: ['React Native', 'Firebase'],
      image: '/images/project-3.svg',
      liveUrl: '#',
    },
    {
      title: 'AI Customer Support Bot',
      slug: 'ai-customer-support-bot',
      stack: ['Python', 'OpenAI', 'FastAPI'],
      image: '/images/project-4.svg',
      detailsUrl: '/projects/ai-customer-support-bot',
    },
    {
      title: 'Booking Platform',
      slug: 'booking-platform',
      stack: ['Next.js', 'Prisma', 'MySQL'],
      image: '/images/project-5.svg',
      liveUrl: '#',
      detailsUrl: '/projects/booking-platform',
    },
    {
      title: 'Portfolio CMS',
      slug: 'portfolio-cms',
      stack: ['Astro', 'Contentful'],
      image: '/images/project-6.svg',
      liveUrl: '#',
      detailsUrl: '/projects/portfolio-cms',
    },
  ] satisfies Project[],
  about: {
    bio: 'Full-stack developer focused on building practical digital products for businesses and startups. I turn ideas into clean, maintainable code — from landing pages to mobile apps and AI-powered tools.',
    bioId: 'Full-stack developer yang fokus membangun produk digital praktis untuk bisnis dan startup. Saya mengubah ide menjadi kode yang bersih dan mudah dikelola — dari landing page hingga aplikasi mobile dan alat berbasis AI.',
    image: '/images/profile-placeholder.svg',
    skills: [
      { name: 'HTML5', deviconClass: 'devicon-html5-plain' },
      { name: 'CSS3', deviconClass: 'devicon-css3-plain' },
      { name: 'JavaScript', deviconClass: 'devicon-javascript-plain' },
      { name: 'TypeScript', deviconClass: 'devicon-typescript-plain' },
      { name: 'React', deviconClass: 'devicon-react-original' },
      { name: 'Node.js', deviconClass: 'devicon-nodejs-plain' },
      { name: 'Astro', deviconClass: 'devicon-astro-plain' },
      { name: 'Tailwind', deviconClass: 'devicon-tailwindcss-plain' },
      { name: 'Python', deviconClass: 'devicon-python-plain' },
      { name: 'PostgreSQL', deviconClass: 'devicon-postgresql-plain' },
      { name: 'Git', deviconClass: 'devicon-git-plain' },
      { name: 'Figma', deviconClass: 'devicon-figma-plain' },
    ] satisfies Skill[],
  },
  testimonials: [
    {
      quote:
        'Delivered our company website on time with a clean design. Communication was clear throughout the project.',
      quoteId:
        'Website perusahaan kami selesai tepat waktu dengan desain yang bersih. Komunikasi sangat jelas selama proyek berlangsung.',
      author: 'Budi Santoso',
      role: 'CEO, Startup XYZ',
    },
    {
      quote:
        'The chatbot integration saved our team hours every week. Highly recommend for automation needs.',
      quoteId:
        'Integrasi chatbot menghemat jam kerja tim kami setiap minggu. Sangat direkomendasikan untuk kebutuhan otomasi.',
      author: 'Sarah Chen',
      role: 'Operations Manager',
    },
    {
      quote:
        'Professional, responsive, and understood our requirements quickly. Will hire again for the mobile app phase.',
      quoteId:
        'Profesional, responsif, dan cepat memahami kebutuhan kami. Akan menyewa lagi untuk fase aplikasi mobile.',
      author: 'Ahmad Rizki',
      role: 'Founder, Tech Labs',
    },
  ] satisfies Testimonial[],
  seo: {
    siteUrl: 'https://example.com',
  },
} as const;
