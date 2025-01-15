import React, { useEffect, useState } from "react";

const EnhancedProjectShowcase = ({ project, index }) => {
    const [position, setPosition] = useState({ x: 0, y: 0, rotate: 0 });
    
      useEffect(() => {
        const randomizePosition = () => {
          setPosition({
            x: Math.random() * 100 - 20, 
            y: Math.random() * 100 - 20, 
            rotate: Math.random() * 90 - 50, 
          });
        };
    
        const interval = setInterval(randomizePosition, 3000); 
        return () => clearInterval(interval);
      }, []);
    
  return (
    <>
      <div
      className="absolute w-72 h-80 md:w-96 md:h-96 transition-all duration-1000 ease-in-out"
      style={{
        top: `${10 + (index % 2) * 25}%`,
        left: `${10 + (index % 4) * 20}%`,
        transform: `translate(${position.x}px, ${position.y}px) rotate(${position.rotate}deg)`,
      }}
    >
      <div className="group relative w-full h-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"> 
        <div className="relative h-2/3 overflow-hidden">
          <img
            src={project.img || "https://via.placeholder.com/300"}
            alt={project.title}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
          <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold py-1 px-3 rounded-full shadow-md">
            {project.tag || "Featured"}
          </span>
        </div>

        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm  opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm mt-2 px-4 text-center">{project.description}</p>
          <button className="mt-4 px-4 py-2 bg-white text-indigo-600 rounded-lg shadow hover:bg-gray-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default EnhancedProjectShowcase
