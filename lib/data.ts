import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Ecommerce Backend",
    description:
      "An e-commerce application built with Spring Boot. It includes user authentication, product management, secure payment integration with paypal, and an admin dashboard",
    tags: ["Spring boot", "MySQL", "JPA", "JWT"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Issue Tracker",
    description:
      "A collaborative issue-tracking system to help teams manage tasks and track project progress. It features user authentication, tags, issue assignment and intuitive user interface for efficient issue management.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A dynamic React application that serves as a hub for gamers to discover and explore games. It includes features like a game search engine, detailed game information, filtering options",
    tags: ["React", "API Integration", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const frontendSkillsData = [
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Javascript",
  "Typescript",
] as const;

export const backendSkillsData = [
  "Java",
  "Spring",
  "Spring boot",
  "JPA",
  "Oauth2",
  "REST",
  "GraphQL",
  "MongoDB",
  "MySQL",
  "CI/CD",
  "Docker",
  "API Integration",
] as const;
