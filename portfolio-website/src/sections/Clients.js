import React from 'react';
import {Carousel} from 'flowbite-react';
import client1 from '../assets/images/client1.jpg';

function Clients() {
  return (
    <section id='testimonial' className='w-full flex-col justify-center items-center h-[800px] lg:h-[600px]'>
      <Carousel className='w-full lg:w-[80%]' id='clients' slideInterval={2000} indicators={false}>
        <div className='flex items-center justify-between flex-col lg:flex-row w-full px-4 lg:px-32 gap-10'>
          <div id='client-img' className='w-[50%] lg:w-[30%]'>
            <img src={client1} alt='client image' className='w-[600px] h-[300px] lg:w-[350px] lg:h-[400px]' />
          </div>
          <div id='client-info' className='flex flex-col justify-center'>


          </div>


        </div>

      </Carousel>

    </section>
  )
}

export default Clients
