import React from 'react'
import Image from 'next/image'
import solana from '@/images/collab/Axelar 2 1.png'
import spay from '@/images/collab/Frame 1171278210 3.png'
import lido from '@/images/collab/logo-new.svg'
import layer from '@/images/collab/renec.png'
import linea from '@/images/collab/Kyber Network svg.png'

const Collaborator = () => {

  const collaborators = [
    {
      name: 'Solana',
      image: solana
    },
    {
      name: 'Spay',
      image: spay
    },
    {
      name: 'Lido',
      image: lido
    },
    {
      name: 'Layer',
      image: layer
    },
    {
      name: 'Linea',
      image: linea
    }
  ]

  return (
    <div className='py-[44px] flex items-center justify-center gap-[52px]'>
      {collaborators.map((item, index) => (
        <div key={index} className='flex items-center justify-center '>
          <Image src={item.image} alt={item.name} className='opacity-75'/>
        </div>
      ))}
    </div>
  )
}

export default Collaborator