
import React from 'react';

const About = () => {
  return (
    <div 
      name="about" 
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen text-white pt-20 pb-20 overflow-x-hidden"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 animate-heading">
            About Me
          </p>
          <p className="text-lg py-4 text-white italic">
            Passionate Full Stack Developer focused on innovative solutions and growth.
          </p>
        </div>

        <div className="text-xl text-gray-300 leading-relaxed mt-4 sm:mt-0 space-y-6">
          <p className="mb-4">
            I'm a software engineer with a Master’s in Computer Science and over 3 years of experience in developing scalable web applications using Java, JavaScript, and Python. My focus is on building efficient, user-friendly applications, and optimizing system performance.
          </p>
          <p className="mb-4">
            I have a strong foundation in algorithms and data structures (DSA), which I utilize to solve complex problems and optimize code. I am experienced in applying advanced algorithms for problem-solving, ensuring that the software I build is both scalable and efficient.
          </p>
          <p className="mb-4">
            In addition to my technical expertise, I have worked in agile environments and collaborated with cross-functional teams to deliver high-quality solutions. I’m also passionate about mentoring and code reviews, always looking for ways to improve my skills and contribute to team success.
          </p>
          <p>
            Continuously seeking new challenges, I aim to apply my problem-solving skills, DSA expertise, and creativity to develop innovative software solutions in a dynamic team environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
