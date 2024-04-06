import Image from 'next/image'
import imageUrl from '../public/images/Mclaren-720S.png'
import React from 'react'

const ReusableCard = ({model}) => {
  return (
    <>
      <div className='flex flex-col sm:mx-2 lg:mx-8'>
        <div className='bg-[#d9d9d9] my-6 pt-20 rounded-3xl flex justify-center'>
          <Image
            src={imageUrl}
            width={380}          
            alt=""
            priority={false}            
          />          
        </div>
        <h3 className='text-xl'>{model}</h3>            
      </div>      
    </>
  )
}

export default ReusableCard