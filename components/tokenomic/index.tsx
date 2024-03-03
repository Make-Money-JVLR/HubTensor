import React from 'react'
import Image from 'next/image'
import reflect from '@/images/reflect.svg'
import Tag from '../content/Tag'
import bgPatternLeft from '@/images/tokenPatternLeft.png'
import bgPatternRight from '@/images/tokenPatternRight.png'

const Tokenomic = () => {

  const tokenomic = [
    {
      number: '50+',
      title: 'by Tax',
    },
    {
      number: '100M',
      title: 'Max Supply',
    },
    {
      number: '30+',
      title: 'Max Supply',
    }
  ]

  return (
    <div className='h-[1085px] pb-[132px] flex flex-col justify-center items-center mx-auto overflow-hidden'>
      <div className='w-[1320.167px] h-[522.078px] relative max-w-[1440px] md:mx-auto rounded-[60px] bg-[linear-gradient(180deg,rgba(5,5,29,0.00)_0%,#29176B_36.02%,#5F2FDA_59.89%,#906EF4_82.4%,#FFF_110.71%)] mt-[37px]'>
        <div className='flex flex-col gap-[87px]'>
          <div className='flex flex-col items-center justify-center gap-[16px]'>
            <Tag text="HubTensor" />
            <h1 className='md:text-[48px] text-[32px] md:leading-[44px] leading-[40px] font-segoe title-text font-bold'>Tokenomic</h1>
          </div>
          <div className='flex items-center md:gap-[140px] gap-[32px] justify-center md:px-0 px-3'>
            {
              tokenomic.map((item, index) => (
                <div key={index} className='flex flex-col gap-[10px] items-center justify-center text-[#FDFDFD] font-segoe'>
                  <h1 className='md:text-[80px] text-[60px]  font-bold'>{item.number}</h1>
                  <p className='md:text-[24px] text-[16px] leading-[22px] font-semibold'>{item.title}</p>
                </div>
              ))
            }
          </div>
        </div>
        <Image src={bgPatternLeft} alt='bgPattern' className='left-[0%] absolute bottom-0 mix-blend-lighten ' />
        <Image src={bgPatternRight} alt='bgPattern' className='right-[0%] absolute bottom-0 mix-blend-lighten' />
      </div>
      <div
        style={{
          backgroundImage: `url(${reflect.src})`,
          backgroundSize: 'cover',
          backgroundPosition: '-20px 0px',
          backgroundRepeat: 'no-repeat'
        }}
        className='w-[1440px] h-[393.372px] top-[-3%] relative'>
        <div className='flex flex-col gap-[40px] items-center justify-center absolute top-[162px] left-1/2 transform -translate-x-1/2 '>
          <div className='flex flex-col gap-[16px] items-center justify-center'>
            <Tag text="HubTensor" />
            <h1 className='font-segoe md:text-[48px] text-[32px] md:leading-[44px] leading-[40px] font-bold text-center text-[#FDFDFD]'>Enabling AI
              Infrastructure<br />
              On Blockchain</h1>
          </div>
          <button className="bg-[#191919] rounded-full py-3 px-4 text-white font-jetbrains flex items-center gap-x-2 shadow-[0px_2px_4px_0px_#A158FF_inset,0px_-4px_12px_0px_rgba(190,_166,_255,_0.50)]">
            <span>Discover</span>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.66687 12.196L11.3335 5.5293" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4.66687 5.5293H11.3335V12.196" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tokenomic