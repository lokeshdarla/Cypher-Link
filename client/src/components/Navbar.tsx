import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { navlinks } from '@/constants';
import { CiSearch } from "react-icons/ci";
import { SiPolymerproject } from 'react-icons/si';
import CustomButton from './connectBTN';

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
        <input type="text" placeholder="Search for Projects" className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none" />

        <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer text-white">
          <CiSearch size={20} />
        </div>
      </div>

      <div className="flex-row items-center justify-end hidden gap-4 sm:flex">
        <CustomButton />

        <Link to="/dashboard">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img src={'/metamask-icon.webp'} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>
        </Link>
      </div>

      <div className="relative flex items-center justify-between sm:hidden">
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <SiPolymerproject onClick={() => navigate('/')} className='text-[#1dc071]' />
        </div>
        <IoMenu
          className='text-[#1dc071]'
          size={20}
          onClick={() => setToggleDrawer((prev) => !prev)}
        />

        <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
          <ul className="mb-4">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 ${isActive === link.name && 'bg-[#3a3a43] text-[#1dc071]'}`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                {link.icon}
                <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#1dc071]' : 'text-[#808191]'}`}>
                  {link.name}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex mx-4">
            <CustomButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
