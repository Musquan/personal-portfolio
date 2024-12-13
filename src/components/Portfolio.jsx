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
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen pt-32 pb-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="text-center mb-10">
          <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 animate-heading">
            Portfolio
          </p>
          <p className="text-lg py-4 text-gray-400 italic">Selected Projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, title }) => (
            <div
              key={id}
              className="flex flex-col justify-between bg-gray-800 shadow-lg rounded-lg hover:scale-105 duration-500 transition-transform w-full"
            >
               <div className="p-4">
                <p className="text-lg italic text-gray-300 text-center font-semibold overflow-hidden text-ellipsis whitespace-nowrap hover:overflow-visible hover:text-gray-100 hover:bg-gray-800 hover:rounded-md transition-all duration-300">
                  {title}
                </p>
              </div>  
                <img
                  src={src}
                  alt={title}
                  className="rounded-t-md duration-200 hover:scale-110 w-full h-48 object-cover shadow-lg"
                />
              <div className="flex flex-col items-center justify-between p-4 flex-grow">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full transition duration-300">
                    Code
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
