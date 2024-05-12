import Categories from "@/components/Categories"
import Image from 'next/image';
import SingleCar from '@/public/images/single.png'
import VerticalMenu from "@/components/VerticalMenu";
import Link from "next/link";
import SpecCard from "@/components/SpecCard";

const Comparison = () => {
  return (
    <>

      {/* Section to display comparison */}
      <section className='w-screen h-[100%] px-2 sm:px-4 lg:px-16 py-32 bg-single-car-sm lg:bg-single-car-bg bg-cover bg-center'>

        {/* <div className="w-full h-full backdrop-blur-xs px-16 py-32"> */}
          <div className="flex justify-center md:justify-end gap-3">
            <div className="bg-[#707172] text-xs md:text-sm font-light p-1 lg:w-[50%] flex justify-center gap-1 sm:gap-4 md:gap-6 lg:gap-3 rounded-md">
              <Link href="/" className="text-white px-2 py-1 rounded-md hover:bg-[#fff] hover:text-[#3f3f3f]">                      
                  Compare            
              </Link>
              <Link href="/" className="text-white px-2 py-1 rounded-md hover:bg-[#fff] hover:text-[#3f3f3f]">                      
                Compare            
              </Link>
              <Link href="/" className="text-white px-2 py-1 rounded-md hover:bg-[#fff] hover:text-[#3f3f3f]">                      
                  Compare            
              </Link>
              <Link href="/" className="text-white px-2 py-1 rounded-md hover:bg-[#fff] hover:text-[#3f3f3f]">                      
                  Compare            
              </Link>
              <Link href="/" className="text-white px-2 py-1 rounded-md hover:bg-[#fff] hover:text-[#3f3f3f]">                      
                  Compare            
              </Link>
            </div>

            {/* <Link href="/" className="bg-[#171414] text-white px-6 py-3 rounded-md">                      
              Compare            
            </Link> */}

            <Link
              href="/"
              className=" text-white text-sm md:text-lg bg-[#E11D48] px-2 md:px-6 py-1 rounded-lg md:rounded-xl items-center"
            >
              Compare
            </Link>
          </div>        

          <div className="flex flex-col-reverse md:flex-row lg:items-center lg:justify-between">

            <VerticalMenu />

            <Image 
              src={SingleCar}
              width="450"
              height="300"
              className="w-[350px] md:w-[405px] lg:w-[450px] xl:w-[500px] mx-auto mt-36 lg:mr-28"              
              
            />       

          </div>
        {/* </div> */}
                      
      </section>
      
      <section className="py-[50px]">
        <Categories />      
      </section>
      
    </>    
  )
}

export default Comparison