import React from 'react'
import Image from 'next/image'
import logo from '@/images/logo.png'
import Link from 'next/link'

const Header = () => {

  const menu = [
    {
      name: 'Feature',
      link: '/'
    },
    {
      name: 'Pricing',
      link: '/about'
    },
    {
      name: 'How to use',
      link: '/services'
    },
    {
      name: 'Roadmap',
      link: '/contact'
    }
  ]


  return (
    <header className='pt-[12px] pb-[16px] px-[60px] flex items-center justify-between  w-full mx-auto font-jetbrains h-[74px] border-b border-[#353539]'>
      <Image src={logo} alt='logo' />
      <ul className='flex items-center gap-[25px] h-full'>
        {menu.map((item, index) => (
          <li key={index} className='flex items-center gap-[25px] h-full  text-[14px] leading-[22px] font-medium silver-text '>
            <Link href={item.link} className='px-[10px] py-[12px]' >
              <span>{item.name}</span>
            </Link>
            {
              menu.length - 1 !== index && (
                <div className='h-full max-h-[20px] w-[1px] bg-[#353539] my-[12px]'></div>
              )
            }
          </li>
        ))}
      </ul>
      <button className="rounded-full p-1 " style={{
        backgroundImage: "linear-gradient(90deg, #C7B3F8 0%, #6C3BEF 28.75%, #4223A1 100%)"
      }}>
        <div className="bg-[#010214] rounded-full px-5 py-2 flex items-center gap-x-2">
          <span>Started Now</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4.66699 11.3332L11.3337 4.6665" stroke="#FDFDFD" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.66699 4.6665H11.3337V11.3332" stroke="#FDFDFD" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </button>
    </header>
  )
}

export default Header