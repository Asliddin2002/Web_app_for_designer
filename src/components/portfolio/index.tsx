"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface ProjectCard {
  id: number;
  title: string;
  description: string;
  categories: string[];
  imageUrl: string;
}

const projects: ProjectCard[] = [
  {
    id: 1,
    title: "Little Cottage",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    categories: ["INTERIOR", "ARCHITECTURE"],
    imageUrl: "/images/interior1.webp",
  },
  {
    id: 2,
    title: "Compact House",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    categories: ["INTERIOR", "REPAIR"],
    imageUrl: "/images/interior2.webp",
  },
  {
    id: 3,
    title: "Conten Libra",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    categories: ["INTERIOR", "REPAIR"],
    imageUrl: "/images/interior3.webp",
  },
];

const categories = [
  "ALL CATEGORIES",
  "ARCHITECTURE",
  "INTERIOR DESIGN",
  "REPAIR",
];

const ProjectItem = ({ project }: { project: ProjectCard }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative cursor-pointer"
    >
      {/* Wrap the content with Link */}
      <Link href={`/portfolio/${project.id}`} passHref>
        {/* Project Image with hover effect */}
        <motion.div
          className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg bg-gray-200"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-full object-cover object-center group-hover:opacity-90 transition-opacity"
          />
        </motion.div>

        {/* Project Info */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-customwhite">
            {project.title}
          </h3>
          <p className="mt-1 text-customwhite opacity-50 text-sm">
            {project.description}
          </p>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default function ProjectList() {
  const [activeCategory, setActiveCategory] = React.useState("ALL CATEGORIES");

  const filteredProjects =
    activeCategory === "ALL CATEGORIES"
      ? projects
      : projects.filter(
          (project) =>
            project.categories
              .map((c) => c.toUpperCase())
              .includes(activeCategory.toUpperCase()) ||
            (activeCategory === "INTERIOR DESIGN" &&
              project.categories.includes("INTERIOR"))
        );

  return (
    <div className="sm:min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Category Filters with animation */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-12 tracking-widest"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:py-2 text-xs font-semibold transition-colors cursor-pointer ${
                activeCategory === category
                  ? "text-customred"
                  : "text-customwhite"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                color: activeCategory === category ? "#EF4444" : "#FFFFFF",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
