import { SHADCN_ICON } from "./values";

export interface ISkill {
  name: string;
  imageUrl: string;
}

export const SKILLS: ISkill[] = [
  // Frontend
  {
    name: "React",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "HTML",
    imageUrl:
      "https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png",
  },
  {
    name: "CSS",
    imageUrl: "https://img.icons8.com/fluent/512/css3.png",
  },
  {
    name: "Typescript",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Next.js",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwindcss",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },

  {
    name: "Shadcn",
    imageUrl: SHADCN_ICON,
  },

  // Backend
  {
    name: "Node.js",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Nest.js",
    imageUrl: "https://nestjs.com/img/logo-small.svg",
  },
  {
    name: "Python",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    name: "GraphQL",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
  },
  {
    name: "Elastic Search",
    imageUrl: "https://assets.zabbix.com/img/brands/elastic.svg",
  },
  {
    name: "PostgreSQL",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    imageUrl:
      "https://cdn.prod.website-files.com/6130fa1501794e37c21867cf/6191a3901b4f74718ba3916a_613294646e81b85ff5c7a1ef_MongoDB.svg",
  },
  {
    name: "Pinecone",
    imageUrl:
      "https://cdn.prod.website-files.com/63daf1fa1abcbc5e7969d7c9/641e0cf34bb664fa0044863d_pinecone-fav.webp",
  },

  // DevOps
  {
    name: "Docker",
    imageUrl: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
  },
  {
    name: "Azure",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
  },
  {
    name: "AWS",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
];
