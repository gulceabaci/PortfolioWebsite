import React from 'react';
import heroimg from '../assets/images/heroimg.png';
import web from '../assets/icons/webdesign.svg';
import arrow from '../assets/icons/arrow.svg';

function Hero() {
  return (
    <section id='home' className='w-full bg-white h-fit flex justify-center lg:justify-start items-center px-10 py-20 flex-col gap-4'>
      <h1 className='text-6xl text-black font-semibold text-center'>
        Mark hudsorf 
        <span className='text-orange-500 text-6xl font-semibold'>Resume</span>
      </h1>
      <p className='text-2xl text-black font-semibold text-center'>What I Do?</p>
      <img src={heroimg} alt='hero img' width={500} height={500} className='mt-7'/>
    
      <div id='aboutgrids' className='flex justify-center items-center gap-5-w-[90%] -mt-20 z-20 flex-col lg:flex-row'>
        <div className='flex justify-center items-start gap-5 bg-white px-2 lg:px-6 py-4 rounded-md bg-opacity-30'>
          <div className='bg-black p-5 rounded-full flex justify-center items-center'>
            <img src={web} alt='icon img' width={45} height={45} />
          </div>
          <div className='flex justify-center items-start flex-col gap-3'>
            <h1 className='text 2xl text-black font-bold'>Web Design</h1>
            <p className='text-lg text-slate-900'>Lorem ipsum dolor sit amet, consectetur adipisicing <br/> elit. Doloribus, repellat.</p>
            <img src={arrow} alt='arrow icon' width={50} height={50}/>
          </div>
        </div>
        <div className='flex justify-center items-start gap-5 bg-white px-2 lg:px-6 py-4 rounded-md bg-opacity-30'>
          <div className='bg-black p-5 rounded-full flex justify-center items-center'>
            <img src={web} alt='icon img' width={45} height={45} />
          </div>
          <div className='flex justify-center items-start flex-col gap-3'>
            <h1 className='text 2xl text-black font-bold'>Web Design</h1>
            <p className='text-lg text-slate-900'>Lorem ipsum dolor sit amet, consectetur adipisicing <br/> elit. Doloribus, repellat.</p>
            <img src={arrow} alt='arrow icon' width={50} height={50}/>
          </div>
        </div>
        <div className='flex justify-center items-start gap-5 bg-white px-2 lg:px-6 py-4 rounded-md bg-opacity-30'>
          <div className='bg-black p-5 rounded-full flex justify-center items-center'>
            <img src={web} alt='icon img' width={45} height={45} />
          </div>
          <div className='flex justify-center items-start flex-col gap-3'>
            <h1 className='text 2xl text-black font-bold'>Web Design</h1>
            <p className='text-lg text-slate-900'>Lorem ipsum dolor sit amet, consectetur adipisicing <br/> elit. Doloribus, repellat.</p>
            <img src={arrow} alt='arrow icon' width={50} height={50}/>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Hero
