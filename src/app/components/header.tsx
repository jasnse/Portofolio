"use client";

import Image from "next/image";

//import photo from "public/profile.svg";
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

<h2 className="text-3xl font-medium text-teal-400 h-10">
<Typewriter
words={[
        "System Analyst",
        "UI/UX Designer",
        "Quality Assurance Engineer",
        "Business Analyst",
        "Database Developer"
        ]}
loop={true}
cursor
cursorStyle="|" 
typeSpeed={70}
deleteSpeed={50}
delaySpeed={1000}
/>
</h2>

<div className="relative inline-flex items-center gap-3 border border-green-500 
rounded-full px-4 py-2 mt-1 group ">
        <div className="relative">
          
          <div className="absolute h-3 w-3 rounded-full bg-green-500 animate-ping opacity-75"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-xs text-white">Available for new jobs</span>
      </div>

<p className="max-w-md text-3x1 text-gray-300">
        A passionate developer with experience in testing, building, and designing modern web applications.
      </p>

    <div className="flex flex-row gap-3">
        <button className="bg-transparent border-2 
        border-teal-400 text-teal-400 hover:bg-teal-400/10 transition-all duration-300 py-2 px-4 rounded-full text-lg font-medium">
          Explore My Work
        </button>
        <button className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 transition-all duration-300 py-2 px-4 rounded-full text-lg font-medium">
          Let&#39;s Connect
        </button>
        <button className="bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 transition-all duration-300 py-2 px-4 rounded-full text-lg font-medium">
          My Resume
        </button>
    </div>

</div>
    );
}