import { ReactNode } from "react";
import { PROPERTYLOOP_ICON } from "./values";

export interface ICareerItem {
  id: number;
  role: string;
  year: string;
  company: string;
  companyIcon: string;
  description: ReactNode;
}

export const CAREER_TIMELINE: ICareerItem[] = [
  {
    id: 1,
    role: "Senior Fullstack Engineer",
    year: "2022 - Present",
    company: "PropertyLoop",
    companyIcon: PROPERTYLOOP_ICON,
    description: (
      <p>
        Led a team for the development of various AI powered tools using
        technologies like <span className="text-primary-dark">Pinecone</span>,
        <span className="text-primary-dark">Langchain</span>,{" "}
        <span className="text-primary-dark">NestJs</span> for backend and{" "}
        <span className="text-primary-dark">NextJs</span> for frontend.
        Implemented the CI/CD pipelines for deployment to{" "}
        <span className="text-primary-dark">Azure</span>. Added{" "}
        <span className="text-primary-dark">Elastic Search</span> to decrease
        the search time by 80%
      </p>
    ),
  },
  {
    id: 2,
    role: "Frontend Engineer",
    year: "2020 - 2022",
    company: "Tata Consultancy Services",
    companyIcon: "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png",
    description: (
      <p>
        Revamped over 50% of traditional banking forms to{" "}
        <span className="text-primary-dark">React</span>, implementing{" "}
        <span className="text-primary-dark">Joi</span> validations that enhanced
        user interaction and reduced form submission errors by a measurable
        count of more than 200 per month.
      </p>
    ),
  },
  {
    id: 3,
    role: "Android Developer Intern",
    year: "2020 - 2020",
    company: "Magnum Solutions",
    companyIcon:
      "https://i.pinimg.com/736x/3a/30/04/3a3004eea3d936844acf06e1cc9fa2b4.jpg",
    description: (
      <p>
        Implemented a chat message-style story reading screen in the{" "}
        <span className="text-primary-dark">mobile application</span>, resulting
        in an increase of user engagement by 40%, as evidenced by higher session
        duration and frequency of app usage.
      </p>
    ),
  },
];
