"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi, I’m Osteen, a full-stack developer passionate about creating
        innovative and scalable software solutions. My expertise includes
        building modern web applications with Next.js on the frontend and Spring
        Boot on the backend. I’m committed to continuous learning and enjoy
        solving complex technical challenges while delivering user-focused
        experiences. I’m excited to grow as a software engineer and contribute
        to impactful projects that make a difference. Let’s build something
        great together! My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Spring boot, and MySQL
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a fullstack
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and playing music.
      </p>
    </motion.section>
  );
}
