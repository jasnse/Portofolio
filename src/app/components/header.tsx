"use client";

import Image from "next/image";


import { Typewriter } from "react-simple-typewriter";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Profile(){
    return(
<div className="flex flex-col items-center gap-4 text-center mt-[-100px]">
    <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gray-200">
         <Image
        src="/profile.svg"
        alt="Profile Photo"
        width={160}
        height={160}
        className=" object-cover"
      />
    </div>

<h1 className="text-4xl font-extrabold text-white">Jason Theofillus Gunawan</h1>

<h2 className="text-[1.75rem] font-semibold text-teal-300 leading-none whitespace-nowrap">
<Typewriter
words={[
        "System Analyst",
        "UI/UX Designer",
        "Quality Assurance Engineer",
        "Business Analyst",
        "Data Analyst"
        ]}
loop={true}
cursor
cursorStyle="|" 
typeSpeed={70}
deleteSpeed={50}
delaySpeed={1000}
/>
</h2>


<div className="relative inline-flex items-center border border-green-500 rounded-full px-4 py-1 mt-1">
  {/* Dot + ping */}
  <div className="relative mr-2 h-3 w-3">
    <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></span>
    <span className="absolute inset-0 rounded-full bg-green-500"></span>
  </div>

  {/* Teks */}
  <span className="text-white text-sm">Available for new jobs</span>
</div>

      <p className="max-w-md text-3x1 text-gray-300">
        An enthusiastic IT professional skilled in Testing, Data, and Designing cutting-edge web applications.
      </p>

    <div className="flex flex-row gap-3">
        <button 
        onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}
        className="bg-transparent border-2 
        border-teal-400 text-teal-400 hover:bg-teal-400/10 transition-all duration-300 py-2 px-4 rounded-full text-lg font-medium">
          Skills and Tools
        </button>

        <button
        onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
        className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 transition-all duration-300 py-2 px-4 rounded-full text-lg font-medium">
          Activities and Achivement
        </button>

        <button 
        onClick={() => {
            const link = document.createElement('a');
            link.href = '/CV - Jason.pdf';
            link.download = 'Jason-Gunawan-Resume.pdf';
            link.click();
         }}
        className="bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 transition-all duration-300 py-2 px-4 rounded-full text-lg font-medium">
          Resume
        </button>
    </div>

    <footer className="
          fixed bottom-0 left-0 right-0
          w-full h-16
          bg-gray-900/90 text-white
          backdrop-blur
          border-t border-white/10
          flex flex-col items-center gap-4 text-center
          px-6 z-50
          [padding-bottom:env(safe-area-inset-bottom)]
          pt-3
        ">
         <nav className="flex items-center gap-4">
          <div className="flex gap-4 text-3xl">
          <a href="mailto:jasonoke03@gmail.com" className="hover:text-red-500 transition text-white"><FaEnvelope>Email</FaEnvelope></a>
          <a href="https://wa.me/6285211821384" target="_blank" className="hover:text-green-400 transition text-white"><FaWhatsapp>Whatsapp</FaWhatsapp></a>
          <a href="https://linkedin.com/in/jasontheofillusgunawan" target="_blank" className="hover:text-blue-500 transition text-white"><FaLinkedin>linkedin</FaLinkedin></a>
          </div>
        </nav>

    </footer>

</div>
    );
}