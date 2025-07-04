// import Image from "next/image";

"use client";
import Profile from "./components/header";
import MyWork from "./components/workSection";

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

         {/* Work Section */}
        <section id="work" className="min-h-screen  flex items-center justify-center bg-gray-900">
          <MyWork />
        </section>

        <section id="connect" className="min-h-screen  flex items-center justify-center bg-gray-500">
          <div className="text-center p-8">
            <h2 className="text-4xl font-bold mb-8 text-white">lets connect</h2>
            {/* Add your portfolio projects here */}
          </div>
        </section>

    </div>

        
</main>
  );
}
