import Categories from "@/components/Categories"
import Image from 'next/image';
import NumOne from '@/public/images/1.svg'
import IPhoneFrame01 from '@/public/images/iPhoneFrame-01.svg'
import IPhoneFrame02 from '@/public/images/iPhoneFrame-02.svg'

const Comparison = () => {
  return (
    <>
      <Categories />

      <section className='px-16'>
          <h1 className='my-8 text-2xl font-bold'>Already know what you’re looking for ?</h1>
          <div className='flex flex-col py-8 md:flex-row md:justify-center text-center text-[#312C2C]'>
            
            <div className="w-full flex justify-around items-center border-2 border-blue-500">
              <div className="h-[50px] flex items-center gap-4 border-2 border-red-600">                
                <Image 
                  src={NumOne}
                  width={20}
                  height={20}
                  alt="numOne"
                />                
              
                <h2>Search for cars that you’d like to compare</h2>
                
              </div>
              
              
              <Image 
                src={IPhoneFrame01}
                width={190}
                height={385}
                alt="imgOne"
              />
            </div>

          </div>

          <div className='flex flex-col py-8 md:flex-row md:justify-center text-center text-[#312C2C]'>
            
            <div className="w-full flex justify-around items-center border-2 border-blue-500">
              
              <Image 
                src={IPhoneFrame02}
                width={190}
                height={385}
                alt="imgOne"
              />              

              <div className="h-[50px] flex items-center gap-4">
                <Image 
                  src={NumOne}
                  width={20}
                  height={20}
                  alt="numOne"
                />
                <h2>Tap Compare. You’re done. No really, you are</h2>
              </div>

            </div>

          </div>      

          <div className='flex flex-col py-8 md:flex-row md:justify-center text-center text-[#312C2C]'>
            
            <div className="w-full flex justify-around items-center border-2 border-blue-500">

              <div className="h-[50px] flex items-center gap-4 border-2 border-red-600">                
                <Image 
                  src={NumOne}
                  width={20}
                  height={20}
                  alt="numOne"
                />
                <h2>A huge comparison table comes up, allowing you to compare components and specs for each car.</h2>
              </div>

              <div className="h-[50px] flex items-center gap-4 border-2 border-red-600">                
                <Image 
                  src={NumOne}
                  width={20}
                  height={20}
                  alt="numOne"
                />
                <h2>Want to delve into a car more? Click on the boke’s  name to view-in-depth info, reviews, prices,specification, images and more.</h2>
              </div>

            </div>

          </div> 


      </section>
    </>    
  )
}

export default Comparison