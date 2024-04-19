import Image from 'next/image'
import imageUrl from '../public/images/Mclaren-720S.png'
import React from 'react'

const ReusableCard = ({model, categories}) => {

  console.log('the cata is ', categories)

  return (
    <>
      <div className='flex flex-col mb-8 sm:px-2 lg:px-8'>
        {categories ? (
          <>
            <div className='bg-[#d9d9d9] py-0 md:py-8 rounded-3xl md:px-8'>
              <div className='text-left flex justify-around items-center md:flex md:w-[95%]'>
                
                <Image
                  src={imageUrl}
                  width={150}          
                  alt=""
                  priority={false} 
                  className='w-[50%] mt-8 md:mt-0 md:w-[65%] lg:w-[60%]'                                     
                />
                
                <div>
                  <h2 className='md:text-lg font-semibold md:-my-6'>{categories.name}</h2>        
                  <h3 className='md:hidden block pt-4'>View comparison</h3>                       
                </div>                  
              </div> 
              <h3 className='md:block hidden pt-4'>View comparison</h3>                       
            </div>
          </>
        ) : (
          <>
            <div className='bg-[#d9d9d9] my-6 pt-20 rounded-3xl flex justify-center'>          
              <Image
                src={imageUrl}
                width={380}          
                alt=""
                priority={false}            
              />          
            </div>
            <h3 className='text-xl'>{model}</h3>            
          </>          
        )}        
      </div>      
    </>
  )
}

export default ReusableCard