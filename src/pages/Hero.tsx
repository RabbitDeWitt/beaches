import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { beachVid } from '../assets'
import { Button } from '../components'




type Props = {}

const Hero = (props: Props) => {
  return (
    <section className='w-full h-screen relative '>
      <video
        className='w-full h-full object-cover'
        src={beachVid}
        autoPlay loop muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>

      <div className='absolute w-full h-full top-0 flex flex-col text-white justify-center items-center p-4'>
        <h1>First Class Travel</h1>
        <h3 className='py-4'>Top 1% Locations Worldwide</h3>

        <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md bg-gray-100/90'>
          <div className='text-black'>
            <input
              className='bg-transparent h-11 w-[300px] sm:w-[630px] focus:outline-none'
              type="text"
              maxLength={60}
              placeholder='Search Destinations' />
          </div>
          <div>
            <Button>
              <AiOutlineSearch size={20} />
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Hero