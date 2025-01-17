import React from 'react';
import fb from '../assets/icons/fb.svg';
import insta from '../assets/icons/insta.svg';
import yt from '../assets/icons/yt.svg';
import linkdin from '../assets/icons/linkdin.svg';

function Contact() {
  return (
    <section id="contact" className="w-full py-20 flex flex-col lg:flex-row justify-center items-start px-6 lg:px-32 gap-6 lg:gap-28">
      <div id='left' className='flex justify-center istems-start flex-col gap-6 lg:w-[40%]'>
        <h1 className='text-5xl font-bold text-black'>Contact Me</h1>
        <p className='text-xl text-slate-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <h3 className='text-black text-[20px] font-bold'>+91 98 789 4509</h3>
        <h3 className='text-black text-[20px] font-bold'>demomail@gmail.com</h3>
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
      <div id='right' className='w-full lg:w-[60%]'>
        <form action="" className='flex flex-col justify-center items-start gap-10'>
          <input className='w-full border-t-0 border-l-0 border-r-0 border-2 border-b-2 border-black text-[20px] py-4 px-2' 
          type='text'
          placeholder='Enter your valid name here'/>
          <input className='w-full border-t-0 border-l-0 border-r-0 border-2 border-b-2 border-black text-[20px] py-4 px-2' 
          type='email'
          placeholder='Enter your valid email here'/>
          <input className='w-full border-t-0 border-l-0 border-r-0 border-2 border-b-2 border-black text-[20px] py-4 px-2' 
          type='number'
          placeholder='Enter your valid phone number here'/>
          <textarea className='w-full border-t-0 border-l-0 border-r-0 border-2 border-b-2 border-black text-[20px] py-4 px-2' 
          name='' 
          id=''
          cols={30}
          rows={4}
          placeholder='Enter your message here'></textarea>
          <input className='px-10 py-3 bg-orange-600 text-white text-md font-semibold hover:bg-black mt-6 cursor-pointer' 
          type='button' 
          value='SUBMIT'/>
        </form>
      </div>
    </section>
  )
}

export default Contact
