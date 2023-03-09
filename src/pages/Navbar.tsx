import React, { useState } from 'react'
import { navLinks, socialMedias } from '../constants'
import { AiOutlineSearch, AiOutlineUser, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { IconType } from 'react-icons'
import { Button } from '../components'

type Props = {}

const Navbar = (props: Props) => {
  const [toggle, setToggle] = useState<boolean>(false)

  const socialLogo = (Icon: IconType) => <Icon size={20} />

  return (
    <header className='flex w-full h-20 justify-between items-center px-4'>
      <h1 className='md:text-4xl'>BEACHES.</h1>

      <ul className='hidden md:flex justify-between'>
        {navLinks.map(({ title }, index) => (
          <li
            key={index}
            className='px-4'
          >
            {title}
          </li>
        ))}
      </ul>

      <div className='hidden md:flex justify-between'>
        <AiOutlineSearch size={25} className='mr-4' />
        <AiOutlineUser size={25} />
      </div>

      <button className='md:hidden z-40' onClick={() => setToggle(!toggle)}>
        {toggle ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </button>

      <div className={`${toggle ? 'absolute' : 'hidden'} top-0 left-0 md:hidden z-30 bg-gray-100/90 w-full px-4 pb-7 flex flex-col`}>
        <div className='h-20 flex items-center'>
          <h1>BEACHES.</h1>
        </div>

        <ul className='flex flex-col justify-between mb-4'>
          {navLinks.map(({ title }, index) => (
            <li
              key={index}
              className='p-4 text-xl border-b border-b-black'
            >
              {title}
            </li>
          ))}
        </ul>

        <div className='flex flex-col gap-6'>
          <Button>Search</Button>
          <Button>Account</Button>
        </div>

        <ul className='flex justify-between my-6'>
          {socialMedias.map(({ icon }, index) => (
            <li
              key={index}
              className='text-primary-dark'
            >
              {socialLogo(icon)}
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar