import Image from 'next/image'
import imageUrl from '../public/images/Mclaren-720S.png'
import React from 'react'

const SpecCard = () => {

  return (
    <>
      <div className='flex flex-col'>
        
          <>
            <div className='bg-black/[.50] px-5 md:px-12 lg:px-8 xl:px-16 py-8 rounded-md flex justify-around gap-6'>          
              <Image
                src={imageUrl}
                width={120}          
                alt=""
                priority={false}                                            
              />  
              <h3 className='text-sm lg:text-xl text-white'>Something</h3>                  
            </div>              
          </>          
        
      </div>      
    </>
  )
}

export default SpecCard