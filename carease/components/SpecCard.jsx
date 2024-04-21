import Image from 'next/image'
import imageUrl from '../public/images/Mclaren-720S.png'
import React from 'react'

const SpecCard = () => {

  return (
    <>
      <div className='flex flex-col mb-8 sm:px-2 lg:px-8'>
        
          <>
            <div className='bg-[#abadb0] p-6 rounded-md flex justify-center'>          
              <Image
                src={imageUrl}
                width={120}          
                alt=""
                priority={false}            
              />  
              <h3 className='text-xl'>Something</h3>                  
            </div>              
          </>          
        
      </div>      
    </>
  )
}

export default SpecCard