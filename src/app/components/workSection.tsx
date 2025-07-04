"use client";

import { useState } from 'react';

export default function Work(){
     const [isSkillsOpen, setIsSkillsOpen] = useState(false);
     const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

 const skills = ['Data Analyst','UI/UX Design','Front-end developer','Software Quality Assurance',
                 'Back-end developer', 'System Analyst', 'Business Analyst'];

 const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Built with Next.js and Tailwind CSS and Node.JS',
      image: '/project1.jpg',
      link: '#',
      skills: ['UI/UX Design', 'Front-end developer']
    },
    {
      id: 2,
      title: 'First Portofolio Website',
      description: 'an portofolio website that built with Vite framework',
      image: '/project2.jpg',
      link: '#',
      skills: ['Front-end developer', 'UI/UX Design']
    },
    {
      id: 3,
      title: 'Watch Dealer',
      description: 'Desktop application to buy and sell watch',
      image: '/project3.jpg',
      link: '#',
      skills: ['Back-end developer', 'Front-end developer']
    },
    {
      id: 4,
      title: 'Kinder Log',
      description: 'Conducted system analysis and designed the system',
      image: '/project4.jpg',
      link: '#',
      skills: ['System Analyst', 'Business Analyst']
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
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
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
                 onClick={() => window.location.href = project.link} // Or use your preferred navigation method
                className="inline-block px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
                >
                 See More
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

}
