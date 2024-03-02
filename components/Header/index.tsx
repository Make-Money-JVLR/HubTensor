import React from 'react'
import Image from 'next/image'
import logo from '@/images/logo.png'
import Link from 'next/link'

const Header = () => {

  const menu = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Services',
      link: '/services'
    },
    {
      name: 'Contact',
      link: '/contact'
    }
  ]


  return (
    <header className='pt-[12px] pb-[16px] px-[60px] flex items-center justify-between  w-full mx-auto font-jetbrains h-[74px] border-b border-[#353539]'>
      <Image src={logo} alt='logo' />
      <ul className='flex items-center gap-[25px] h-full'>
        {menu.map((item, index) => (
          <li key={index} className='flex items-center gap-[25px] h-full px-[10px] py-[12px] text-[14px] leading-[22px] font-medium silver-text '>
            <Link href={item.link} >
              <span>{item.name}</span>
            </Link>
            <div className='h-full max-h-[20px] w-[1px] bg-[#353539]'></div>
          </li>
        ))}
      </ul>
      <button className="button-outer clip p-1">
        <div className="bg-[#010214] clip px-10 py-2">
          Buy Now
        </div>
      </button>
    </header>
  )
}

export default Header