import React from 'react'
import ReusableCard from './ReusableCard'

const FeaturedComparison = () => {
  return (
    <>
        <section className='py-20 px-10 bg-gradient-to-b from-white to-[#908C8D]'>
            <h2 className='text-[30px] font-bigHeadings md:ml-10 md:text-[46px] md:mb-8 font-normal'>Featured Comparison</h2>

            <div className='md:flex justify-center text-center text-[#312C2C]'>
                <ReusableCard model="MCLAREN 720S" />
                <ReusableCard model="MCLAREN 720S" />
                <ReusableCard model="MCLAREN 720S" />
            </div>

            <div className='flex justify-center'>
              <button className='w-[40%] sm:w-[30%] lg:w-[25%] h-16 mt-12 bg-[#E11D48] hover:bg-[#E4335A] text-white rounded-xl'>      
                  View Comparison
              </button>
            </div>
            
        </section>
    </>
  )
}

export default FeaturedComparison