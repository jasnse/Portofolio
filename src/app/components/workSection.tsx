"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  explanation: string;
  image: string;
  link: string;
  skills: string[];
};

export default function Work() {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const skills = [
    "Data Analyst",
    "UI/UX Design",
    "Front-end developer",
    "Software Quality Assurance",
    "Back-end developer",
    "System Analyst",
    "Business Analyst",
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Built with Next.js and Tailwind CSS and Node.JS",
      explanation:
        "My personal portfolio built with Next.js and Tailwind CSS.",
      image: "/porto.svg",
      link: "https://github.com/jasnse/Portofolio.git",
      skills: ["UI/UX Design", "Front-end developer"],
    },
    {
      id: 2,
      title: "Bloom Mate",
      description:
        'An UI/UX design specifically for a "invention" competition',
      explanation:
        "UI design of an application that serves as a platform for buying and selling plants.",
      image: "/bloomMate.svg",
      link: "https://www.figma.com/proto/Judip42OFBbA1cjPSb5TwF/Untitled?node-id=0-1&t=sF7st7IuSZQNX7ZT-1",
      skills: ["UI/UX Design"],
    },
    {
      id: 3,
      title: "Watch Dealer",
      description: "Desktop application to buy and sell watch",
      explanation:
        "Developing a desktop application for buying and selling watches using Java with the JavaFX framework integrated with MySQL.",
      image: "/watchDealer.svg",
      link: "https://github.com/jasnse/Watches-Dealer",
      skills: ["Back-end developer", "Front-end developer"],
    },
    {
      id: 4,
      title: "Kinder Log",
      description: "Conducted system analysis and designed the system",
      explanation:
        'Conducted system analysis and designed the system for an application called "kinderlog" prior to its development.',
      image: "/Kinderlog.svg",
      link: "https://binusianorg-my.sharepoint.com/personal/jason_gunawan_binus_ac_id/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fjason%5Fgunawan%5Fbinus%5Fac%5Fid%2FDocuments%2FProject%20AISAD&ga=1",
      skills: ["System Analyst", "Business Analyst"],
    },
    {
      id: 5,
      title: "Thesis",
      description:
        "The thesis serves as a key requirement for earning my bachelors degree.",
      explanation:
        'My thesis, titled "Analysis Requirement and Strategic Plan Development of E-Procurement Information System at PT Raja Elektronik," focuses on several key aspects including the design of system architecture, business processes, and UI/UX design for the companys e-procurement system.',
      image: "/binus sis logo.svg",
      link: "https://1drv.ms/b/s!Avalv0dHxVNci0YZfAEcBgicPWuZ?e=63Wg4d",
      skills: ["System Analyst", "Business Analyst", "UI/UX Design"],
    },
    {
      id: 6,
      title: "E-Collection Bank Jakarta",
      description: 'System development project at "Bank Jakarta".',
      explanation:
        "Responsible for conducting performance and API testing for the Bank DKI e-collection project.",
      image: "/bankDKI.svg",
      link: "https://github.com/jasnse/performance-test-Bank-Jakarta",
      skills: ["Software Quality Assurance"],
    },
    {
      id: 7,
      title: "CRMS Bank Danamon",
      description: 'System development project at "Bank Danamon".',
      explanation:
        "Responsible for performing system integration testing for the development of the Collection and Recovery Management System application at Bank Danamon Indonesia.",
      image: "/BDI.svg",
      link: "private",
      skills: ["Software Quality Assurance"],
    },
    {
      id: 8,
      title: "CIS BCA Finance",
      description: 'System development project at "BCA Finance".',
      explanation:
        "Responsible for performing system integration testing for the development of the Customer Identification System application at BCA Finance.",
      image: "/bcaf.svg",
      link: "private",
      skills: ["Software Quality Assurance"],
    },
  ];

  const filteredProjects = useMemo(
    () =>
      selectedSkill
        ? projects.filter((p) => p.skills.includes(selectedSkill))
        : projects,
    [selectedSkill, projects]
  );

  // Close dropdown saat klik di luar / tekan ESC
  const ddRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ddRef.current?.contains(e.target as Node)) setIsSkillsOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsSkillsOpen(false);
        setActiveProject(null);
      }
    }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Lock scroll saat modal buka
  useEffect(() => {
    if (activeProject) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [activeProject]);

  return (
    <section className="bg-gray-900 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-bold">My Work</h2>

        <div className="mb-8 flex justify-center">
          <p className="max-w-2xl text-center text-lg text-gray-300">
            &quot;A collection of my work from university and organizational
            projects. Use the dropdown menu to filter by skill set.&quot;
          </p>
        </div>

        {/* Skills Dropdown */}
        <div className="relative mb-12" ref={ddRef}>
          <button
            onClick={() => setIsSkillsOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-lg bg-gray-800 px-4 py-2 transition-colors hover:bg-gray-700 sm:w-64 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-haspopup="listbox"
            aria-expanded={isSkillsOpen}
          >
            <span>{selectedSkill || "Filter by Skill"}</span>
            <svg
              className={`h-5 w-5 transition-transform ${
                isSkillsOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <AnimatePresence>
            {isSkillsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                className="absolute z-10 mt-2 w-full rounded-lg bg-gray-800 shadow-lg sm:w-64"
                role="listbox"
              >
                <ul className="py-2">
                  <li
                    className="cursor-pointer px-4 py-2 transition-colors hover:bg-gray-700"
                    onClick={() => {
                      setSelectedSkill(null);
                      setIsSkillsOpen(false);
                    }}
                    role="option"
                    aria-selected={!selectedSkill}
                  >
                    All Skills
                  </li>
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="cursor-pointer px-4 py-2 transition-colors hover:bg-gray-700"
                      onClick={() => {
                        setSelectedSkill(skill);
                        setIsSkillsOpen(false);
                      }}
                      role="option"
                      aria-selected={selectedSkill === skill}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group overflow-hidden rounded-lg border border-white/10 bg-gray-800 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="p-4">
                <div className="overflow-hidden rounded-md">
                  {/* Jika tidak ingin next/image, ganti ke <img> dengan class yang sama */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={675}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="aspect-[16/9] w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="space-y-4 bg-gray-800 p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>

                <ul className="mb-4 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <li
                      key={`${project.id}-${skill}`}
                      className="rounded-full bg-gray-700 px-2 py-1 text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setActiveProject(project)}
                  className="inline-block rounded bg-white px-4 py-2 font-medium text-black transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  type="button"
                >
                  See More
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative mx-4 w-full max-w-lg rounded-2xl bg-white p-6 text-gray-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-title"
            >
              {/* Close */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute right-4 top-3 text-2xl font-bold text-gray-500 transition hover:text-gray-800"
                aria-label="Close"
                type="button"
              >
                &times;
              </button>

              {/* Content */}
              <h2 id="project-title" className="mb-2 text-2xl font-semibold">
                {activeProject.title}
              </h2>
              <p className="mb-4 text-gray-600">{activeProject.explanation}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {activeProject.skills.map((skill, idx) => (
                  <span
                    key={`${activeProject.id}-skill-${idx}`}
                    className="rounded-full bg-gray-200 px-2 py-1 text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={() => setActiveProject(null)}
                  className="rounded-md bg-gray-200 px-4 py-2 text-gray-800 transition hover:bg-gray-300"
                  type="button"
                >
                  Close
                </button>
                <a
                  onClick={(e) => {
                    if (!activeProject.link || activeProject.link === "private") {
                      e.preventDefault();
                      alert("Project is confidential");
                    }
                  }}
                  href={
                    activeProject.link && activeProject.link !== "private"
                      ? activeProject.link
                      : "#"
                  }
                  target={
                    activeProject.link && activeProject.link !== "private"
                      ? "_blank"
                      : "_self"
                  }
                  rel="noopener noreferrer"
                  className="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                >
                  Visit Link
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
