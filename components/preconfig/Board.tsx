import React from 'react'
import Button from '../Button'

const Board = () => {

  const contents = [
    {
      color : '#E047F5',
      title: 'Making Mining  Effortless',
      text: 'Making Mining  Effortless-Simplify cryptocurrency mining with one-click setup, removing technical barriers for all users, from beginners to experts'
    },
    {
      color: '#FB6064',
      title: 'Pre-configured Network',
      text: 'Making Mining  Effortless-Simplify cryptocurrency mining with one-click setup, removing technical barriers for all users, from beginners to experts'
    },
    {
      color: '#47F582',
      title: 'Pre-configured Network',
      text: 'Making Mining  Effortless-Simplify cryptocurrency mining with one-click setup, removing technical barriers for all users, from beginners to experts'
    }
  ]

  return (
    <article className='font-segoe p-8 max-w-[537px] flex flex-col gap-[44px] rounded-2xl border border-[#FFF] 
    bg-[linear-gradient(318deg,rgba(151,71,255,0.20)_1.88%,rgba(151,71,255,0.00)_59.1%),rgba(255,255,255,0.10)]
    shadow-[-7px_4px_20px_0px_rgba(0,0,0,0.20)] backdrop-blur-[25px]
    '>
      {
        contents.map((item, index) => (
          <div key={index} className='flex flex-col gap-[44px]'>
            <div className='flex flex-col gap-6'>
              <div className='flex items-center gap-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M11.4418 0C10.2498 6.39982 4.91244 12.2106 0 12.2106C3.46709 12.5589 9.43266 15.4042 11.4418 24C11.4418 17.4316 19.8139 13.4036 24 12.2106C16.3652 12.2106 13.0737 4.07021 11.4418 0Z" fill={item.color} />
                </svg>
                <h3 className='config-text font-bold text-[24px]'>{item.title}</h3>
              </div>
              <p className='text-[#FDFDFD] text-[16px] leading-[23px]'>{item.text}</p>
            </div>
             {
              contents.length - 1 !== index && (
                <div className='h-[1px] w-full bg-[rgba(253,253,253,0.20)]'></div>
              )
             }
          </div>
         
        ))
      }
      <Button content="Start Soon" alt="Start Soon" className="bg-white text-black w-fit" color="#000" />
    </article>
  )
}

export default Board