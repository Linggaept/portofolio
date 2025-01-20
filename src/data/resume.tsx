import { Icons } from "@/components/icons";
import { HomeIcon, icons, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Lingga Eka Praditya Tama",
  initials: "DV",
  url: "https://lingga.io",
  location: "Yogyakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/yogyakarta",
  description:
    "I am a Front-End Developer.",
  summary:
    "I began delving into programming, particularly web development, in 2020 and gained hands-on experience with WordPress during an internship in 2021. Currently, I am a Coding Mentor and [a student at Universitas Amikom Yogyakarta](#education), majoring in Information Systems. [My focus is on building front-end applications using ReactJS within the Next.js framework](#projects). I also have several [awards from competitions](#Achievements). Outside of coding, I enjoy playing music, especially the guitar, as a creative outlet.",
  avatarUrl: "/me.jpg",
  skills: [
    "ReactJS",
    "Next.js",
    "Typescript",
    "JavaScript",
    "Node.js",
    "Zustand",
    "Python",
    "Postgres",
    "Prisma",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "linggaept@gmail.com",
    tel: "+6282133695380",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Linggaept",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/linggaept/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/keyma.keyma.395",
        icon: Icons.facebook,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/linggaekapt_",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "ajakonline.com",
      href: "https://ajakonline.com/",
      badges: [],
      location: "on-site work",
      title: "Wordpress Engineer",
      logoUrl: "/ajakonline.jpg",
      start: "Aug 2021",
      end: "Desember 2021",
      description:
        "Implemented a website marketplace and online shop for local UMKM (Micro, Small, and Medium Enterprises) using WordPress. I designed the website to provide a platform for local businesses to showcase and sell their products online.",
    },
    {
      company: "SkillUpKids",
      badges: [],
      href: "https://skillupkids.id/",
      location: "on-site work",
      title: "Mentorship",
      logoUrl: "/skillupkids.png",
      start: "Aug 2024",
      end: "Now",
      description:
        "I work as a Coding Mentor for several programming languages, including Python, C++, and JavaScript, helping students and developers enhance their skills and build efficient applications. I guide learners through best practices, problem-solving techniques, and real-world coding scenarios to strengthen their understanding and boost their confidence in these languages.",
    },
  ],
  education: [
    {
      school: "SMK Negeri 2 Surakarta",
      href: "https://smkn2solo.sch.id/",
      degree: "Certification of Competence",
      logoUrl: "/smk.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "Amikom university Yogyakarta",
      href: "https://home.amikom.ac.id/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/amikom.png",
      start: "2022",
      end: "now",
    },
  ],
  projects: [
    {
      title: "Mategram",
      href: "https://mategram.online",
      dates: "Nov 2024 - Jan 2025",
      active: true,
      description:
        "Mategram is a website that serves as a platform for content creators to showcase their creativity, while also providing an opportunity for them to earn income.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Chakra UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://mategram.online",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mategram.png",
    },
    {
      title: "Sinari Desa",
      href: "https://sinaridesa.com/",
      dates: "Aug 2023 - Oct 2023",
      active: true,
      description:
        "Sinari Desa is an innovative ICT education platform aimed at enhancing the skills and personal development of young people in rural areas with AI Chat BOT.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://sinaridesa.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sinaridesa.jpg",
    },
    {
      title: "Segerahabis",
      href: "https://sikuat.online/segerahabis.sikuat.online/",
      dates: "Jun 2024 - Jul 2024",
      active: true,
      description:
        "Developed a marketplace application called Segerahabis, which offers instant food products nearing expiration at discounted prices, and created a comprehensive business plan for its operation.",
      technologies: [
        "CodeIgniter",
        "PHP",
        "MySQL",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://sikuat.online/segerahabis.sikuat.online/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/segerahabis.png",
    },
  ],
  hackathons: [
    {
      title:
        "World Youth Science Competition (WYSC) & World Youth Invention and Innovation Award 2024",
      dates: "October 10th - 14th, 2024",
      location: "Gold Medal & Best Project",
      description:
        "Research on education utilizing technological advancements aim to explore innovative methods and tools that enhance learning experiences and improve educational outcomes through the integration of modern technology.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "GEMASI 2025 - Innovating the Future Through Technology",
      dates: "January 3st - 5th, 2025",
      location: "1st Place in the Digital Business and Fintech Category.",
      description:
        "Developed a marketplace application called Segerahabis, which offers instant food products nearing expiration at discounted prices, and created a comprehensive business plan for its operation.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mkhsnw/segerahabis",
        },
      ],
    },
  ],
} as const;
