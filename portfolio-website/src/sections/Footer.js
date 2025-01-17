import React from 'react';
import copyright from '../assets/icons/copyright.svg';
import totop from '../assets/icons/totop.svg';
import {Link} from 'react-scroll';

function Footer() {
  return (
    <section className='w-full bg-black text-white p-6'>
      <div className='flex justify-center items-center gap-2 text-center'>
        <img src={copyright} alt='copyright image' width={20} height={20}/>
        <h1>Copyright 2025 : Gülce ABACI - All Rights Reserved</h1>
        <Link
        to='home'
        spy={true}
        smooth={true}
        offset={-100}>
        <img className='fixed bottom-20 right-3 cursor-pointer' 
        width={55}
        height={55}
        src={totop} 
        alt='scroll to top image' /></Link>

        </div>


    </section>
  )
}

export default Footer
