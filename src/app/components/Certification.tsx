"use client";

import { useState, useEffect, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";

type Certification = {
  title: string;
  description: string;
  images: string[];
};

const certifications: Certification[] = [
  {
    title: "SASC Mentoring Program",
    description:
      "Served as a mentor in the SASC Mentoring Program as a requirement to receive the Mentoring Scholarship from BINUS University.",
    images: ["/mentor1.svg", "/mentor2.svg"],
  },
//   {
//     title: "UI/UX Bootcamp",
//     description: "Participated in a UI/UX bootcamp with final group presentation",
//     images: ["/uiux-cert.jpg", "/bootcamp-team.jpg"],
//   },
  {
    title: "Internship Completion",
    description: "This certificate was obtained after finishing an internship at BCA Finance for about one year in the role of Quality Assurance Automation.",
    images: ["/intern-cert.jpg", "/team-photo.jpg"],
  }
];

export default function Certifications() {
  const [activeImageIndexes, setActiveImageIndexes] = useState<number[]>(
    certifications.map(() => 0)
  );
  const [autoSwipeEnabled, setAutoSwipeEnabled] = useState(true);

  // State for popup modal - holds the certification selected
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const handleSwipe = useCallback(
    (index: number, direction: "prev" | "next") => {
      setActiveImageIndexes((prev) =>
        prev.map((curr, i) =>
          i === index
            ? direction === "next"
              ? (curr + 1) % certifications[i].images.length
              : (curr - 1 + certifications[i].images.length) %
                certifications[i].images.length
            : curr
        )
      );
    },
    []
  );

  useEffect(() => {
    if (!autoSwipeEnabled) return;

    const interval = setInterval(() => {
      certifications.forEach((_, index) => {
        handleSwipe(index, "next");
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [autoSwipeEnabled, handleSwipe]);

  const SwipeHandlers = (index: number) =>
    useSwipeable({
      onSwipedLeft: () => {
        setAutoSwipeEnabled(false);
        handleSwipe(index, "next");
      },
      onSwipedRight: () => {
        setAutoSwipeEnabled(false);
        handleSwipe(index, "prev");
      },
      onTouchStartOrOnMouseDown: () => setAutoSwipeEnabled(false),
      trackMouse: true,
    });

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Achievement and Award
        </h2>
        <p className="max-w-2xl text-gray-300 text-center mx-auto mb-10 text-lg">
          A collection of my certifications and accomplishments I&apos;ve earned
          throughout my journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative group" {...SwipeHandlers(index)}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndexes[index]}
                    src={cert.images[activeImageIndexes[index]]}
                    alt={`${cert.title} certification`}
                    className="w-full object-contain aspect-video mt-6 bg-gray-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  See Certificate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Popup Modal showing all images */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative bg-transparent max-w-5xl w-full p-4">
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-6 text-white text-3xl font-bold hover:text-red-500"
              >
                &times;
              </button>

              {/* Scrollable Image Area */}
              <div className="flex gap-4 overflow-x-auto p-4 rounded-lg">
                {selectedCert.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Certification Image ${idx + 1}`}
                    className="h-[60vh] object-contain rounded-lg bg-gray-800"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
