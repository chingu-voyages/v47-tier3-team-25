"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image';
import compare from '../../public/images/compare.png'
import vectorRight from '../../public/images/vector-right.svg'
import vectorLeft from '../../public/images/vector-left.svg'
import axios from 'axios';
import { isAbsoluteUrl } from 'next/dist/shared/lib/utils';
const Compare = () => {    
     
  const [compareCarData, setCompareCarData] = useState({
    carA: {},
    carB: {},
  })

  const [showBuyButton, setShowBuyButton] = useState(false);

  const carId_A = '65cc76219161b91c86ff0f9a'
  const carId_B = '65cc789c9161b91c86ff0f9f'
  
  useEffect(() => {

    const fetchData = async () => {
        const response = await axios.get(`/api/compare/${carId_A}/${carId_B}`);                

        const [ carA, carB ] = await response.data

        setCompareCarData({
            carA : {
                mpg: carA.specifications.mpg,
                engine: carA.specifications.engine,
                fuel_type: carA.specifications.fuel_type,
                imageUrl: carA.imageUrl,
            },
            carB : {
                mpg: carB.specifications.mpg,
                engine: carB.specifications.engine,
                fuel_type: carB.specifications.fuel_type,
                imageUrl: carB.imageUrl,
            }
        })        
    }

    fetchData()        
    
}, []);

  return (
    <div className='w-[100vw] h-[100vh]'>
        
        <Image 
            className='w-[100%] h-[40%] md:h-[60%]'
            alt="supercar"
            src={compare} 
        />

        <div className='flex justify-around pt-8 bg-pink-300'> 
            
            <div className='w-[35%] h-[150px] md:w-[33%] lg:w-[30%] bg-green-900'>
                <Image                     
                    className='h-[150px] rounded-xl ease-in-out duration-500 hover:scale-105 hover:opacity-75'
                    alt="car1"
                    width={350}
                    height={125}
                    src={compareCarData.carA.imageUrl}                                    
                />
            </div>
            
        
            <div className='w-[35%] h-[150px] md:w-[33%] lg:w-[30%] bg-green-900'>
                <Image 
                    className='h-[150px] rounded-xl ease-in-out duration-500 hover:scale-105 hover:opacity-75'
                    alt="car2"
                    width={350}
                    height={125}
                    src={compareCarData.carB.imageUrl}
                />
            </div>                        

        </div>              

        <div className='m-9 rounded-md border-2 border-blue-200 sm:mx-12 md:mx-16 lg:mx-20 xl:mx-32'>
            {['mpg', 'engine', 'fuel_type'].map((property) => (
                <div 
                    key={property} 
                    className='mt-4 flex gap-3 items-center py-1 text-xs sm:text-sm '>                        
                    
                    <div className='w-[33%] text-left pl-2'>
                        {compareCarData.carA[property]}
                    </div>                                            
                    
                    <div className='w-[33%] flex justify-center gap-1'>
                        <Image 
                            width="7"
                            height="7"
                            src={vectorLeft} 
                        />
                        <div 
                            className='text-center font-bold 
                            border-2 border-blue-200 rounded-sm px-2 py-1 
                            lg:rounded-xl lg:w-20 lg:h-8 basis-1/4'
                        >                            
                            {property.toUpperCase()}                                           
                        </div>
                        <Image 
                            width="7"
                            height="7"
                            src={vectorRight} 
                        />
                    </div>                    
                    
                    <div className='w-[33%] text-right pr-2'>
                        {compareCarData.carB[property]}
                    </div>                        
                    
                </div>    
            ))}        
        </div>
        
    </div>
  )
}

export default Compare