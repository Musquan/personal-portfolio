import React from 'react';
import RentalProperty from '../assets/RentalProperty.jpg';
import TechnoTreasure from '../assets/TechnoTreasure.jpg';
import HeartDiseasePrediction from '../assets/HeartDiseasePrediction.jpeg';
import ToDo from '../assets/ToDo.jpg';
import RecipeFinder from '../assets/RecipeFinder.jpg';
import StackOverFlowTagPrediction from '../assets/StackOverflowTagPrediction.jpeg';
import TicTacToe from '../assets/TicTacToe.jpg';
import WordStatistics from '../assets/WordStatistics.jpeg';

const Portfolio = () => {
  const portfolios = [
    { id: 1, src: RentalProperty, link: 'https://github.com/NabeelDhukka14/hotelsDB', title: 'Rental Property Management System' },
    { id: 2, src: TechnoTreasure, link: 'https://github.com/Musquan/ecommerce_website', title: 'Techno Treasure' },
    { id: 3, src: HeartDiseasePrediction, link: 'https://github.com/Musquan/HeartDiseasePrediction', title: 'Heart Disease Prediction' },
    { id: 4, src: ToDo, link: 'https://github.com/Musquan/todo', title: 'To-Do List' },
    { id: 5, src: RecipeFinder, link: 'https://github.com/Musquan/recipe-finder', title: 'Recipe Finder' },
    { id: 6, src: StackOverFlowTagPrediction, link: 'https://github.com/Musquan/StackOverflowTagPrediction', title: 'Stack Overflow Tag Prediction' },
    { id: 7, src: TicTacToe, link: 'https://github.com/Musquan/TicTacToe', title: 'Tic Tac Toe' },
    { id: 8, src: WordStatistics, link: 'https://github.com/Musquan/WordStatistics', title: 'Word Statistics' },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white min-h-screen pt-32 pb-20"
    >
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 animate-heading leading-tight">
            Projects
          </p>
          <p className="text-lg py-4 italic">A Selection of My Work</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.map(({ id, src, link, title }) => (
            <div
              key={id}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 duration-300"
            >
              {/* Image */}
              <img
                src={src}
                alt={title}
                className="w-full h-48 object-cover"
              />

              {/* Title */}
              <div className="p-4">
                <h3
                  className="text-xl font-semibold text-center text-gray-300 truncate hover:whitespace-normal transition-all duration-300"
                >
                  {title}
                </h3>
              </div>

              {/* Button */}
              <div className="p-4 flex justify-center">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button className="w-full py-2 bg-gradient-to-r from-blue-400 to-green-400 text-white rounded-lg font-semibold hover:scale-105 transform transition duration-300">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
