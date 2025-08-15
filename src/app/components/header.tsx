"use client";

import Image from "next/image";


import { Typewriter } from "react-simple-typewriter";

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

<h2 className="fs-3 fw-semibold text-teal-custom" style={{height: "1.2rem" }}>
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


<div className="position-relative d-inline-flex align-items-center border border-success rounded-pill px-3 py-1 mt-1">
        <div className="position-relative me-2" style={{ width: "12px", height: "12px" }}>
          <div className="ping"></div>
          <div className="position-absolute top-0 start-0 bg-success rounded-circle"
          style={{ width: "12px", height: "12px" }}></div>
        </div>
        <span className="text-white small">Available for new jobs</span>
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

</div>
    );
}