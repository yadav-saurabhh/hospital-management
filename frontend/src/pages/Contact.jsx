import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>B2/50A, Bhadaini, <br />Tulsi Ghat, Assi Road(Heritage varanasi)</p>
          <p className=' text-gray-500'>Tel: 9621893109 <br /> Email: syadav02818@gmail.com
          Tel: 8081679626 <br /> Email: akashpro8585@gmail.com
          Tel: 9956571969 <br /> Email: prashantchaubey051@gmail.com
          </p>
          <p className=' font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
