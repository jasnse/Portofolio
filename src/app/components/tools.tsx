"use client";

type Tool = {
  name: string;
  level: "beginner" | "intermediate" | "advanced";
  image: string; 
};

const tools: Tool[] = [
  { name: "Java", level: "advanced", image: "/logo/Java.png" },
  { name: "Android Studio", level: "advanced", image: "/logo/android-studio.png" },
  { name: "Python", level: "advanced", image: "/logo/python.png" },
  { name: "PL/SQL", level: "intermediate", image: "/logo/sql.png" },
  { name: "Javascript", level: "intermediate", image: "/logo/Javascript.png" },
  { name: "Postman", level: "intermediate", image: "/logo/postman.png" },
  { name: "JMeter", level: "intermediate", image: "/logo/Jmeter.png" },
  { name: "NextJS", level: "intermediate", image: "/images/nextjs-logo.png" },
  { name: "Tailwind CSS", level: "beginner", image: "/images/tailwind-logo.png" },
  { name: "Selenium", level: "intermediate", image: "/images/selenium-logo.png" },
  { name: "Appium", level: "beginner", image: "/images/appium-logo.png" },
  { name: "Playwright", level: "beginner", image: "/images/playwright-logo.png" },
  { name: "Groovy", level: "beginner", image: "/images/groovy-logo.png" },
  { name: "Figma", level: "intermediate", image: "/images/figma-logo.png" },
  { name: "Typescript", level: "intermediate", image: "/images/typescript-logo.png" },
];

const getWidth = (level: "beginner" | "intermediate" | "advanced") => {
  switch (level) {
    case "beginner":
      return "w-1/4";
    case "intermediate":
      return "w-2/3";
    case "advanced":
      return "w-full";
  }
};

export default function Tools() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">My Skills & Tools</h2>
        <p className="max-w-2xl text-gray-300 text-center mx-auto mb-10 text-lg">
          A showcase of the tools I&apos;m skilled in
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden w-full h-40"
            >
              <div className="p-4">
                {/* Tool Image and Name */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-18 h-18 mr-4 object-cover" // Gambar logo dengan ukuran kecil
                    />
                    <h5 className="text-sm font-bold text-[#1E1E1E]">{tool.name}</h5> {/* Nama alat */}
                  </div>

                  {/* Level Badge */}
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      tool.level === "beginner"
                        ? "bg-yellow-400 text-black"
                        : tool.level === "intermediate"
                        ? "bg-blue-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {tool.level} 
                  </span>
                </div>

                {/* Skill Progress Bar */}
                <div className="w-full h-2 bg-gray-200 rounded mb-4">
                  <div
                    className={`h-2 bg-[#1E9F9A] rounded ${getWidth(tool.level)}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
