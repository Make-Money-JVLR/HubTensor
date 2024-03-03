import React from 'react'
import Image from 'next/image'
import reflect from '@/images/reflect.svg'
import Tag from '../content/Tag'
import Button from '../Button'
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
      <div className='w-[1320.167px] h-[522.078px] relative max-w-[1440px] mx-auto rounded-[60px] bg-[linear-gradient(180deg,rgba(5,5,29,0.00)_0%,#29176B_36.02%,#5F2FDA_59.89%,#906EF4_82.4%,#FFF_110.71%)] mt-[37px]'>
        <div className='flex flex-col gap-[87px]'>
          <div className='flex flex-col items-center justify-center gap-[16px]'>
            <Tag text="HubTensor" />
            <h1 className='text-[48px] leading-[44px] font-segoe title-text font-bold'>Tokenomic</h1>
          </div>
          <div className='flex items-center gap-[140px] justify-center'>
            {
              tokenomic.map((item, index) => (
                <div key={index} className='flex flex-col gap-[10px] items-center justify-center text-[#FDFDFD] font-segoe'>
                  <h1 className='text-[80px]  font-bold'>{item.number}</h1>
                  <p className='text-[24px] leading-[22px] font-semibold'>{item.title}</p>
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
            <h1 className='font-segoe text-[48px] leading-[44px] font-bold text-center text-[#FDFDFD]'>Enabling AI
              Infrastructure<br />
              On Blockchain</h1>
          </div>
          <Button content='Discover' color='#FDFDFD' alt='discover' className='bg-[#191919] text-[#FDFDFD]' />
        </div>
      </div>
    </div>
  )
}

export default Tokenomic