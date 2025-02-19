import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaJava, FaReact } from "react-icons/fa";
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
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Remote",
    description:
      "I graduated after 6 months of studying frontend development with freecodecamp. I began doing volunteering to small projects as a freelancer for free.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Backend Developer",
    location: "Upwork",
    description:
      " • Developed and deployed scalable backend solutions using Java and Spring Boot for clients across various industries. Built secure REST APIs and integrated database solutions using PostgreSQL and MySQL. Implemented authentication and authorization systems using JWT for secure data access",
    icon: React.createElement(FaJava),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Fiverr",
    description:
      "Back-end Developer Championed a full-stack web application that provides Mobile Event Verification (MEV) technology to accurately verify and document customer engagements",
    icon: React.createElement(FaJava),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Ecommerce Backend",
    githubUrl: "https://github.com/osteensouthpaw/simple-ecommerce-application",
    description:
      "An e-commerce application built with Spring Boot. It includes user authentication, product management, secure payment integration with paypal, and an admin dashboard",
    tags: ["Spring boot", "MySQL", "JPA", "JWT"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Issue Tracker",
    githubUrl: "https://github.com/osteensouthpaw/Issue-tracker",
    description:
      "A collaborative issue-tracking system to help teams manage tasks and track project progress. It features user authentication, tags, issue assignment and intuitive user interface for efficient issue management.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Game Hub",
    githubUrl: "https://github.com/osteensouthpaw/game-hub",
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
