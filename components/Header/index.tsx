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
      <div></div>
    </header>
  )
}

export default Header