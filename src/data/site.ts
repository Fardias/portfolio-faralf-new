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

export type ProjectCategory = 'website' | 'mobile' | 'ai';

export interface ProjectContent {
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
}

export interface Project {
  title: string;
  slug: string;
  category: ProjectCategory;
  stack: string[];
  image: string;
  liveUrl?: string;
  detailsUrl?: string;
  content?: ProjectContent;
}

export const dummyContent: ProjectContent = {
  overview:
    'This project was built to solve a real-world problem for a client. The goal was to deliver a fast, reliable, and maintainable solution that could scale with the business over time.',
  challenge:
    'The main challenge was integrating multiple data sources into a single coherent interface while keeping the user experience simple and intuitive. Performance and security were top priorities throughout the development process.',
  solution:
    'We designed a modular architecture that separates concerns cleanly. Each layer of the stack was chosen deliberately — prioritizing developer experience, runtime performance, and long-term maintainability.',
  outcome:
    'The final product launched on schedule and received positive feedback from end users. Key metrics improved significantly within the first month of deployment.',
};

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
    blog: string;
  };
  sections: {
    services: { title: string; subtitle: string };
    projects: { title: string; subtitle: string };
    about: { title: string; subtitle: string; techStack: string; experience: string };
    testimonials: { title: string; subtitle: string };
    blog: { title: string; subtitle: string };
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
      blog: 'Blog',
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
      blog: {
        title: 'Blog',
        subtitle: 'Articles, tutorials, and thoughts on web development, design, and technology.',
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
      blog: 'Blog',
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
      blog: {
        title: 'Blog',
        subtitle: 'Artikel, tutorial, dan pemikiran tentang pengembangan web, desain, dan teknologi.',
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
  linkedin: 'https://linkedin.com/in/fardias-a-179b0829a',
  nav: [
    { label: 'Blog', labelId: 'Blog', href: '/blog' },
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
      title: 'LensMate - Photographer Platform',
      slug: 'lensmate-photographer-platform',
      category: 'website',
      stack: ['React', 'Vite', 'Tailwind CSS', 'React Icons'],
      image: '/images/lensmate.png', 
      liveUrl: 'https://lens-mate-compro.vercel.app/',
      detailsUrl: '/projects/lensmate-photographer-platform',
      content: {
        overview:
          'LensMate is a modern, premium company profile and on-demand marketplace platform connecting users with local professional photographers in Indonesia. The site features an interactive photographer catalog, dynamic pricing/service packages, and smooth booking/CTA flows.',
        challenge:
          'Creating a highly engaging, visually stunning interface that loads quickly and remains responsive on all devices. Additionally, integrating structured package configurations and direct messaging routes for immediate conversion without complex barriers.',
        solution:
          'We built a component-driven SPA using React and Vite with Vanilla CSS and Tailwind for high-fidelity responsive layouts. A curated dark-mode theme with rich micro-interactions, smooth sliding transitions, and integrated one-click WhatsApp action items is utilized.',
        outcome:
          'A sleek, high-performing corporate portfolio showcasing professional digital services with instant call-to-actions, resulting in high user engagement, premium user feedback, and optimized SEO-friendly responsive loading times.',
      },
    },
    {
      title: 'Fitness Mobile App',
      slug: 'fitness-mobile-app',
      category: 'mobile',
      stack: ['React Native', 'Firebase'],
      image: '/images/project-3.svg',
      liveUrl: '#',
    },
    {
      title: 'AI Customer Support Bot',
      slug: 'ai-customer-support-bot',
      category: 'ai',
      stack: ['Python', 'OpenAI', 'FastAPI'],
      image: '/images/project-4.svg',
      detailsUrl: '/projects/ai-customer-support-bot',
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
