// import Image from "next/image";

"use client";
import Profile from "./components/header";
import MyWork from "./components/workSection";
import Certification from "./components/Certification";
import Tools from "./components/tools";

import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen"; // pastikan path benar

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000); 
    return () => clearTimeout(timer);
  }, []);

  return showSplash ? (
    <SplashScreen />
  ) : 

  
  (
<main className="min-h-screen flex items-center justify-center bg-gray-900">
   <div className="h-full">
    
        {/* Profile Section (Hero) */}
        <section className="min-h-screen  flex items-center justify-center">
          <Profile />
        </section>

         {/* tools */}
        <section id="work" className="min-h-screen  flex items-center justify-center bg-gray-900">
          <Tools />
        </section>

         <section id="work" className="min-h-screen  flex items-center justify-center bg-gray-900">
          <MyWork />
        </section>

        <section id="certification" className="min-h-screen  flex items-center justify-center bg-gray-900">
          <Certification />
        </section>

        <section id="connect" className="min-h-screen  flex items-center justify-center bg-gray-500">
          <div className="text-center p-8">
            <h2 className="text-4xl font-bold mb-8 text-white">lets connect</h2>
          </div>
        </section>

    </div>

        
</main>
  );
}
