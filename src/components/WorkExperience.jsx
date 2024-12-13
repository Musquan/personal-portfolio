import React from 'react';

const WorkExperience = () => {
  return (
    <div name="experience" className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen text-white pt-20 pb-20">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 animate-heading">
            Professional Experience
          </p>
          <p className="text-lg py-4 text-gray-400 italic">
            Highlighting the impact I’ve made in various roles across the tech industry.
          </p>
        </div>
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-center border-b-2 border-gray-600 py-6">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white">Software Engineer</h3>
              <p className="text-lg text-gray-400">Larsen & Toubro Infotech Ltd, Mumbai, India</p>
              <p className="text-sm text-gray-500">Sept 2019 – Jul 2022</p>
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Collaborated with cross-functional teams to design innovative software solutions, enhancing product functionality and user experience.</li>
                <li>Developed and optimized scalable applications in a distributed environment, improving system performance by 50% and reducing report runtime.</li>
                <li>Created RESTful APIs to support multi-tiered architectures and integrated front-end with back-end systems seamlessly.</li>
                <li>Participated in agile sprint cycles, conducting code reviews to maintain high standards of code quality and optimize team productivity.</li>
                <li>Troubleshot production issues, delivering solutions that improved system reliability and reduced downtime.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-b-2 border-gray-600 py-6">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white">Teaching Assistant</h3>
              <p className="text-lg text-gray-400">University of Texas at San Antonio</p>
              <p className="text-sm text-gray-500">Aug 2022 – May 2024</p>
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Assisted students with hands-on coding projects in Java, Python, and web development, enhancing their understanding of software development principles.</li>
                <li>Developed and maintained tools and scripts to automate grading processes, improving efficiency by 20%.</li>
                <li>Guided students through algorithm development and efficient data structure implementation, helping them master coding challenges.</li>
                <li>Supported students in debugging projects and provided best practices for agile development and version control using Git.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
