import Categories from "@/components/Categories"
import Image from 'next/image';
import NumOne from '@/public/images/1.svg'
import NumTwo from '@/public/images/2.svg'
import NumThree from '@/public/images/3.svg'
import NumFour from '@/public/images/4.svg'
import IPhoneFrame01 from '@/public/images/iPhoneFrame-01.svg'
import IPhoneFrame02 from '@/public/images/iPhoneFrame-02.svg'

const Comparison = () => {
  return (
    <>

      {/* Section to display comparison */}
      <section className='w-full h-[525px] bg-[#d9d9d9] flex flex-col items-center justify-center gap-6'>
        <h1 className='text-xl lg:text-2xl px-6 font-bold'>Your comparison is currently empty</h1>
        <Image 
            src="/images/comparison.png"
            width="120"
            height="120"                
        />            
      </section>

      <Categories />

      <section className='p-2 md:px-16'>
          <h1 className='my-8 text-xl lg:text-2xl font-bold'>Already know what you’re looking for ?</h1>
          <div className='flex flex-col text-sm sm:text-lg md:justify-center text-center text-[#312C2C]'>
            
            <div className="w-full py-8 md:px-12 flex justify-between items-center">
              <div className="h-[50px] flex items-start gap-4">                
                <Image 
                  src={NumOne}
                  width={20}
                  height={20}
                  alt="numOne"  
                  className="w-4 md:w-6"                
                />                
              
                <h2>Search for cars that you’d like to compare</h2>
                
              </div>
              
              
              <Image 
                src={IPhoneFrame01}
                width={190}
                height={385}
                alt="imgOne"
                className="lg:mr-40"
              />
            </div>


            <div className="w-full py-8 flex justify-around items-start">
              
              <Image 
                src={IPhoneFrame02}
                width={190}
                height={385}
                alt="imgOne"
              />              

              <div className="h-[50px] flex items-start gap-4">
                <Image 
                  src={NumTwo}
                  width={20}
                  height={20}
                  alt="numTwo"
                  className="w-4 md:w-6" 
                />
                <h2>Tap Compare. You’re done. No really, you are</h2>
              </div>

            </div>


            <div className="w-full py-8 flex justify-around items-center">

              <div className="md:px-12 pt-4 flex items-start">                
                <Image 
                  src={NumThree}
                  width={20}
                  height={20}
                  alt="numThree"
                  className="w-4 md:w-6" 
                />
                <h2>A huge comparison table comes up, allowing you to compare components and specs for each car.</h2>
              </div>

            <div className="md:px-12 pt-4 flex items-start">
              <div className="flex items-start gap-[5px]">
                <Image
                  src={NumFour}
                  width={20}
                  height={20}
                  alt="numFour"
                  className="w-4 md:w-6 mt-[4px]"
                />
                Want to delve into a car more? Click on the car’s name to
                view-in-depth info, reviews, prices,specification, images and
                more.
              </div>
            </div>

            </div>

          </div>

      </section>
    </>    
  )
}

export default Comparison