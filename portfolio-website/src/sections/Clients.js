import React from 'react';
import {Carousel} from 'flowbite-react';
import client1 from '../assets/images/client1.jpg';
import client2 from '../assets/images/client2.jpg';


function Clients() {
  return (
    <section id='testimonial' className='w-full flexz flex-col justify-center items-center h-[800px] lg:h-[600px]'>
      <Carousel className='w-full lg:w-[80%]' id='clients' slideInterval={2000} indicators={false}>
        <div className='flex items-center justify-between flex-col lg:flex-row w-full px-4 lg:px-32 gap-10'>
          <div id='client-img' className='w-[50%] lg:w-[30%]'>
            <img src={client1} alt='client image' className='w-[600px] h-[300px] lg:w-[350px] lg:h-[400px]' />
          </div>
          <div id='client-info' className='flex flex-col justify-center items-center lg:items-start gap-4 w-[70%]'>
            <h1 className='text-[28px] font-bold text-black text-center'>Linda Larson <span className='text-[28px] text-orange-500 italic font-semibold'>designer</span></h1>
            <p className='text-lg text-black text-center lg:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deserunt, aperiam.</p>
            <button className='px-10 py-3 bg-orange-600 text-white text-md font-semibold hover:bg-black mt-6'>VIEW MORE</button>
          </div>
        </div>
        <div className='flex items-center justify-between flex-col lg:flex-row w-full px-4 lg:px-32 gap-10'>
          <div id='client-img' className='w-[50%] lg:w-[30%]'>
            <img src={client2} alt='client image' className='w-[600px] h-[300px] lg:w-[350px] lg:h-[400px]' />
          </div>
          <div id='client-info' className='flex flex-col justify-center items-center lg:items-start gap-4 w-[70%]'>
            <h1 className='text-[28px] font-bold text-black text-center'>Andrew Dami<span className='text-[28px] text-orange-500 italic font-semibold'>developer</span></h1>
            <p className='text-lg text-black text-center lg:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deserunt, aperiam.</p>
            <button className='px-10 py-3 bg-orange-600 text-white text-md font-semibold hover:bg-black mt-6'>VIEW MORE</button>
          </div>
        </div>
      </Carousel>
    </section>
  )
}

export default Clients
