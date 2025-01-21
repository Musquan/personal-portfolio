import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/musquankarovalia/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/Musquan',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:musquankarovalia@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/Musquan-Karovalia.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <>
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-10">
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={
                'flex justify-between items-center w-40 h-14 px-4 font-semibold italic bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 text-white ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 shadow-lg ' +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 w-full bg-black text-white py-2 px-4 flex justify-around items-center z-10 shadow-lg">
        {links.map(({ id, href, child, download }) => (
          <a
            key={id}
            href={href}
            download={download}
            target="_blank"
            rel="noreferrer"
            className="text-white text-2xl hover:text-blue-400 transform hover:scale-110 duration-200"
          >
            {child.props.children[1]}
          </a>
        ))}
      </div>
    </>
  );
};

export default Social;
