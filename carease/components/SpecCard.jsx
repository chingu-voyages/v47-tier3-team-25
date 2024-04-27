import Image from 'next/image'
import imageUrl from '../public/images/Mclaren-720S.png'
import React from 'react'

const SpecCard = () => {

  return (
    <>
      <div className='flex flex-col'>
        
          <>
            <div className='bg-black/[.50] py-8 rounded-md flex justify-around'>          
              <Image
                src={imageUrl}
                width={120}          
                alt=""
                priority={false}            
              />  
              <h3 className='text-xl text-white px-20'>Something</h3>                  
            </div>              
          </>          
        
      </div>      
    </>
  )
}

export default SpecCard