import React from 'react';
import {useState} from 'react';
import { Link } from 'react-scroll';
import {FaXmark, FaBars} from 'react-icons/fa6';
import fb from '../assets/icons/fb.svg';
import insta from '../assets/icons/insta.svg';
import yt from '../assets/icons/yt.svg';
import linkdin from '../assets/icons/linkdin.svg';
import mobimg from '../assets/images/mob-image.png';



function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const closeMenu = () => {
    setIsMenuOpen(false);
  }
  const navItems = [
    {link: 'Home', path: 'home'},
    {link: 'About', path: 'about'},
    {link: 'Portfolio', path: 'portfolio'},
    {link: 'Testimonials', path: 'clients'},
    {link: 'Contact', path: 'contact'},
  ]
  return (
    <nav className='flex justify-between items-center gap-4 bg-black px-10 py-6 sticky- top-0 z-30'>
      <div id='logo'>
        <h3 className='text-3xl text-orange-600 font-bold'>DEMO PORTFOLIO</h3>
      </div>
      <ul className='lg:flex justify-center items-center gap-10 hidden'>
        {navItems.map(({link, path}) => (
          <Link className='text-[16px] cursor-pointer text-white font-semibold uppercase hover:text-orange-500  active:text-orange-500'
          key={path}
          to={path}
          spy={true}
          smooth={true}
          offset={-100}
          >
            {link}
          </Link>
        ))}
      </ul>
        <div className='flex justify-center items-center lg:hidden'
        onClick={toggleMenu}>
          {isMenuOpen ? <FaXmark className='text-white text-2xl cursor-pointer' /> : <FaBars className='text-white text-2xl cursor-pointer' />}
        </div>
        <div className={`${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out flex flex-col justify-between items-center gap-5 absolute top-0 bg-black w-[70%] px-8 h-screen transform left-0`}>
          <div className='flex flex-col justify-center items-center gap-4'>
            <img src={mobimg} alt='mobile image' width={200} height={200} className='mt-7 mb-3' />
            {navItems.map(({link, path}) => (
              <Link className='text-[28px] cursor-pointer text-white font-semibold uppercase hover:text-orange-500 active:text-orange-600'
              key={path}
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              onClick={closeMenu}
              >
                {link}
              </Link>
            ))}
          </div>
          <div className='w-full' id='social-icons'>
            <hr className='w-full mb-7' />
            <h1 className='text-white text-center text-3xl font-semibold'>Fallow Me</h1>
            <div id='icons' className='flex justify-center items-center gap-3 mt-6'>
              <div className='bg-orange-500 rounded-full p-3 hover:bg-black cursor-pointer'>
                <img src={fb} alt='fb'  width={25} height={25} />
              </div>
              <div className='bg-orange-500 rounded-full p-3 hover:bg-black cursor-pointer'>
                <img src={insta} alt='fb'  width={25} height={25} />
              </div>
              <div className='bg-orange-500 rounded-full p-3 hover:bg-black cursor-pointer'>
                <img src={yt} alt='fb'  width={25} height={25} />
              </div>
              <div className='bg-orange-500 rounded-full p-3 hover:bg-black cursor-pointer'>
                <img src={linkdin} alt='fb'  width={25} height={25} />
              </div>
            </div>
          </div>

        </div>
    </nav>
  )
}

export default Header
