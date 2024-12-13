import React from 'react';

const Testimonials = () => {
  return (
    <div
      name="testimonials"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-32 pb-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div className="text-center mb-10">
          <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 animate-heading">
            Testimonials
          </p>
          <p className="py-6 text-lg text-gray-300 italic">
            Here's what others have to say
          </p>
        </div>
        <div className="flex flex-col items-center space-y-8">
          <div className="max-w-screen-lg p-6 bg-gray-800 rounded-lg shadow-lg text-center">
            <p className="text-xl text-gray-300 italic">
              "I had the pleasure of working with Musquan for two years at L&T Infotech where we both began our software development careers. From the start, her coding skills and problem-solving abilities especially in application programming stood out. She tackles challenges with creativity and determination, consistently delivering innovative solutions.
               Musquan excels in code review, always providing insightful feedback that enhances our projects and elevates the team’s overall performance. Her analytical skills allow her to tackle complex challenges with ease, and her creative problem-solving approach leads to innovative solutions.
               Musquan also has a remarkable knack for fostering collaboration. She communicates complex concepts clearly, making her an invaluable resource for both peers and management. Her enthusiasm makes the workplace more enjoyable and productive.
               She’s the kind of colleague you’d want on your team—not just for her skills but for her genuine passion for what she does. Best of luck, Musquan! I can’t wait to see the incredible things you accomplish next."
            </p>
            <p className="mt-4 text-lg text-gray-400 font-semibold">Rishika Poojari</p>
            <p className="text-md text-gray-500">Full Stack SAP Developer</p>
          </div>
          <div className="text-center mt-6">
            <p className="text-lg text-gray-300 mb-4 italic">
              For more testimonials, check out my LinkedIn:
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.linkedin.com/in/musquankarovalia/details/recommendations/?detailScreenTabIndex=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer transform hover:scale-105 transition-transform duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
