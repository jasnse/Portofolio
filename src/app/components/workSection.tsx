"use client";

import { useState } from 'react';

export default function Work(){
     const [isSkillsOpen, setIsSkillsOpen] = useState(false);
     const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
     const [activeProject, setActiveProject] = useState<Project | null>(null);

 const skills = ['Data Analyst','UI/UX Design','Front-end','Software Quality Assurance',
                 'Back-end', 'System Analyst', 'Business Analyst'];

type Project = {
  id: number;
  title: string;
  description: string;
  explanation: string;
  image: string;
  link: string;
  skills: string[];
};

 const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Built with Next.js and Tailwind CSS and Node.JS',
      explanation: 'My personal portfolio built with Next.js and Tailwind CSS.',
      image: '/porto.svg',
      link: 'https://github.com/jasnse/Portofolio.git',
      skills: ['UI/UX Design', 'Front-end developer']
    },
    {
      id: 2,
      title: 'Bloom Mate',
      description: 'An UI/UX design specifically for a "invention" competition',
      explanation: 'UI design of an application that serves as a platform for buying and selling plants.',
      image: '/bloomMate.svg',
      link: 'https://www.figma.com/proto/Judip42OFBbA1cjPSb5TwF/Untitled?node-id=0-1&t=sF7st7IuSZQNX7ZT-1',
      skills: ['UI/UX Design']
    },
    {
      id: 3,
      title: 'Watch Dealer',
      description: 'Desktop application to buy and sell watch',
      explanation: 'Developing a desktop application for buying and selling watches using Java with the JavaFX framework integrated with MySQL.',
      image: '/watchDealer.svg',
      link: 'https://github.com/jasnse/Watches-Dealer',
      skills: ['Back-end developer', 'Front-end developer']
    },
    {
      id: 4,
      title: 'Kinder Log',
      description: 'Conducted system analysis and designed the system',
      explanation: 'Conducted system analysis and designed the system for an application called "kinderlog" prior to its development.',
      image: '/Kinderlog.svg',
      link: 'https://binusianorg-my.sharepoint.com/personal/jason_gunawan_binus_ac_id/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fjason%5Fgunawan%5Fbinus%5Fac%5Fid%2FDocuments%2FProject%20AISAD&ga=1',
      skills: ['System Analyst', 'Business Analyst']
    },
    {
      id: 5,
      title: 'Thesis',
      description: 'The thesis serves as a key requirement for earning my bachelors degree.',
      explanation: 'My thesis, titled "Analysis Requirement and Strategic Plan Development of E-Procurement Information System at PT Raja Elektronik," focuses on several key aspects including the design of system architecture, business processes, and UI/UX design for the companys e-procurement system.',
      image: '/binus sis logo.svg',
      link: 'https://1drv.ms/b/s!Avalv0dHxVNci0YZfAEcBgicPWuZ?e=63Wg4d',
      skills: ['System Analyst', 'Business Analyst', 'UI/UX Design']
    },
    {
      id: 6,
      title: 'E-Collection Bank Jakarta',
      description: 'System development project at "Bank Jakarta".',
      explanation: 'Responsible for conducting performance and API testing for the Bank DKI e-collection project.',
      image: '/bankDKI.svg',
      link: 'https://github.com/jasnse/performance-test-Bank-Jakarta',
      skills: ['Software Quality Assurance']
    },
    {
      id: 7,
      title: 'CRMS Bank Danamon',
      description: 'System development project at "Bank Danamon".',
      explanation: 'Responsible for performing system integration testing for the development of the Collection and Recovery Management System application at Bank Danamon Indonesia.',
      image: '/BDI.svg',
      link: 'private',
      skills: ['Software Quality Assurance'] 
    },
    {
      id: 8,
      title: 'CIS BCA Finance',
      description: 'System development project at "BCA Finance".',
      explanation: 'Responsible for performing system integration testing for the development of the Customer Identification System application at BCA Finance.',
      image: '/bcaf.svg',
      link: 'private',
      skills: ['Software Quality Assurance'] 
    }
  ];

  const filteredProjects = selectedSkill
    ? projects.filter(project => project.skills.includes(selectedSkill))
    : projects;

    return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Work</h2>

        <div className="flex justify-center mb-8">
             <p className="max-w-2xl text-gray-300 text-center text-lg">
        &quot;A collection of my work from university and organizational projects. Use the dropdown menu to filter by skill set.&quot;
            </p>
        </div>
       
        
        {/* Skills Dropdown */}
        <div className="mb-12 relative">
          <button 
            onClick={() => setIsSkillsOpen(!isSkillsOpen)}
            className="flex items-center justify-between w-full sm:w-64 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <span>{selectedSkill || 'Filter by Skill'}</span>
            <svg className={`w-5 h-5 transition-transform ${isSkillsOpen ? 'rotate-180' : ''}`} 
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isSkillsOpen && (
            <div className="absolute z-10 mt-2 w-full sm:w-64 bg-gray-800 rounded-lg shadow-lg">
              <ul className="py-2">
                <li 
                  className="px-4 py-2 hover:bg-gray-700 transition-colors cursor-pointer"
                  onClick={() => {
                    setSelectedSkill(null);
                    setIsSkillsOpen(false);
                  }}
                >
                  All Skills
                </li>
                {skills.map((skill) => (
                  <li 
                    key={skill} 
                    className="px-4 py-2 hover:bg-gray-700 transition-colors cursor-pointer"
                    onClick={() => {
                      setSelectedSkill(skill);
                      setIsSkillsOpen(false);
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-4 bg-gray-800">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-50 object-cover rounded-md "
              />
              </div>
              <div className="p-6 bg-gray-800">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-gray-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => setActiveProject(project)}
                className="inline-block px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
                >
                 See More
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
      
       {activeProject && (
   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity">
    <div className="bg-white text-gray-900 rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-6 relative animate-fade-in">
      
      {/* Close button */}
      <button
        onClick={() => setActiveProject(null)}
        className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        aria-label="Close"
      >
        &times;
      </button>

      {/* Modal content */}
      <h2 className="text-2xl font-semibold mb-2">{activeProject.title}</h2>
      <p className="text-gray-600 mb-4">{activeProject.explanation}</p>

      {/*skills display */}
      <div className="flex flex-wrap gap-2 mb-4">
        {activeProject.skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-gray-200 text-sm rounded-full text-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Modal footer buttons */}
      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={() => setActiveProject(null)}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
        >
          Close
        </button>
        <a
        onClick={(e) => {
                if (!activeProject.link || activeProject.link === 'private') {
                 e.preventDefault();
                alert('Project is confidential');
                }
          }}
        href={activeProject.link && activeProject.link !== 'private' ? activeProject.link : '#'}
        target={activeProject.link && activeProject.link !== 'private' ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
        Visit Link
        </a>
      </div>
    </div>
  </div>
)}

    </section>
  );

}
