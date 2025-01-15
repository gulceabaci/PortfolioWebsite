import React from 'react';
import pic from '../assets/pic.jpg';

function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-32 h-fit flex justify-center items-center gap-5 flex-col">
      <h1 className='text-center text-5xl font-bold text-black'>My Works</h1>
      <div id='gallery' className='flex  flex-wrap justify-center items-center gap-8 mt-8'>
        <img src={pic} alt='' className='w-[400px] h-[350px] cursor-pointer'/>

      </div>
    </section>
  )
}

export default Portfolio
