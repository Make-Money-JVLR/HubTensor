import React from 'react'
import Image from 'next/image'
import orb from '@/images/orb.png'
import Tag from '../Tag'

const About = () => {
  return (
    <div className='mx-auto overflow-hidden'>
      <div className='relative flex lg:justify-between justify-start h-[701px] max-w-[1440px] mx-auto px-3 lg:px-0 '>
        <div className='w-[434.355px] h-[649.977px] rounded-[649.977px] bg-[radial-gradient(196.94%_173.68%_at_50%_173.68%,#CA61FB_30.82%,#9747FF_100%)] blur-[200px] absolute md:right-[-30%] right-[-90%]'></div>
        <Image src={orb} alt='orb' className='w-[656px] h-[701px] scale-[1.95] lg:flex hidden' />
        <div className='flex flex-col gap-8 w-fit flex-1 max-w-[466px] justify-center pr-[60px]'>
          <div className='flex flex-col gap-4'>
            <Tag text="HubTensor" />
            <h1 className='md:text-[48px] text-[32px] md:leading-[60px] leading-[48px]  font-bold font-segoe text-[#FDFDFD]'>ABout <span className='title-text'>HubTensor</span></h1>
          </div>
          <p className='md:text-[16px] text-[14px] md:leading-[24px] leading-[20px] font-segoe text-[#918DA4]'>HubTensor is an interoperability protocol that connects blockchains (50+ and counting), allowing developers to build seamless omnichain applications, tokens, and experiences. The protocol relies on immutable on-chain endpoints, a configurable Security Stack, and a permissionless set of Executors to transfer censorship-resistant messages between chains.</p>
        </div>
      </div>
    </div>
  )
}

export default About