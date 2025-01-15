import React from 'react'

function About() {
  return (
    <section id='about' className='flex justify-center items-center gap-5 flex-col m-auto w-full h-fit py-20'>
      <div className='flex justify-between items-center gap-5 flex-col lg:flex-row border-2 border-y-black border-x-0 px-0 py-7 lg:py-12 w-[80%]'>
        <h1 className='text-[25px] font-bold'>About Myself</h1>
        <p className='text-xl text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, repellat.</p>
      </div>

      <div className='flex justify-center items-center ap-10 flex-col px-4 lg:px-20 mt-20 w-[80%]'>
        <h1 className='text-black text-4xl lg:text-5xl text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, repellat.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, repellat.</h1>
        <h1 className='text-orange-500 text-4xl lg:text-6xl font-semibold text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, repellat.</h1>
      </div>
    </section>
  )
}

export default About
