import React from 'react';

const Testimonials = () => {
  return (
    <div
      name="testimonials"
      className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen pt-32 pb-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div className="text-center mb-10">
          <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Testimonials
          </p>
          <p className="py-6 text-lg text-white italic">
            Here's what others have to say about working with me
          </p>
        </div>

        <div className="flex flex-col items-center space-y-12">
          <div className="max-w-screen-lg p-8 bg-gray-800 rounded-lg shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <p className="text-xl text-gray-100 italic">
              "I had the pleasure of working with Musquan for two years at L&T Infotech where we both began our software development careers. From the start, her coding skills and problem-solving abilities especially in application programming stood out. She tackles challenges with creativity and determination, consistently delivering innovative solutions. Musquan excels in code review, always providing insightful feedback that enhances our projects and elevates the team’s overall performance. Her analytical skills allow her to tackle complex challenges with ease, and her creative problem-solving approach leads to innovative solutions. Musquan also has a remarkable knack for fostering collaboration. She communicates complex concepts clearly, making her an invaluable resource for both peers and management. Her enthusiasm makes the workplace more enjoyable and productive. She’s the kind of colleague you’d want on your team—not just for her skills but for her genuine passion for what she does. Best of luck, Musquan! I can’t wait to see the incredible things you accomplish next."
            </p>
            <p className="mt-6 text-lg text-gray-200 font-semibold">Rishika Poojari</p>
            <p className="text-md text-gray-300">Full Stack SAP Developer</p>
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-300 mb-4 italic">
              For more testimonials, check out my LinkedIn:
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.linkedin.com/in/musquankarovalia/details/recommendations/?detailScreenTabIndex=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white w-fit px-8 py-4 my-2 flex items-center rounded-full bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 cursor-pointer transform hover:scale-105 transition-transform duration-300"
              >
                View LinkedIn Recommendations
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
