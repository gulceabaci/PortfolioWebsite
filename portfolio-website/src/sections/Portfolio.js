import React from 'react';
import pic from '../assets/images/pic.jpeg';
import pic1 from '../assets/images/pic1.jpeg';
import pic2 from '../assets/images/pic2.jpeg';
import pic3 from '../assets/images/pic3.jpeg';
import pic4 from '../assets/images/pic4.jpeg';
import pic5 from '../assets/images/pic5.jpeg';
import pic6 from '../assets/images/pic6.jpeg';
import pic7 from '../assets/images/pic7.jpeg';
import pic8 from '../assets/images/pic8.jpeg';

function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-32 h-fit flex justify-center items-center gap-5 flex-col">
      <h1 className='text-center text-5xl font-bold text-black'>My Works</h1>
      <div id='gallery' className='flex  flex-wrap justify-center items-center gap-8 mt-8'>
        <img src={pic} alt='pic' className='w-[400px] h-[350px] cursor-pointer'/>
        <img src={pic1} alt='pic1' className='w-[400px] h-[350px] cursor-pointer'/>
        <img src={pic2} alt='pic2' className='w-[400px] h-[350px] cursor-pointer'/>
        <img src={pic3} alt='pic3' className='w-[400px] h-[350px] cursor-pointer'/>
        <img src={pic4} alt='pic4' className='w-[400px] h-[350px] cursor-pointer'/>  
        <img src={pic5} alt='pic5' className='w-[400px] h-[350px] cursor-pointer'/>
        <img src={pic6} alt='pic6' className='w-[400px] h-[350px] cursor-pointer'/>
        <img src={pic7} alt='pic7' className='w-[400px] h-[350px] cursor-pointer'/>
        <img src={pic8} alt='pic8' className='w-[400px] h-[350px] cursor-pointer'/>
      </div>
      <button className='px-10 py-4 bg-orange-500 text-white text-lg font-semibold hover:bg-black mt-6'>VIEW MORE</button>
    </section>
  )
}

export default Portfolio
