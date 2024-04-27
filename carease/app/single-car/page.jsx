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
      <section className='w-full h-screen bg-single-car-bg bg-cover bg-center'>

        <div className="w-full h-full backdrop-blur-sm px-16 py-32">
          <div className="flex justify-end gap-3">
            <div className="bg-[#707172] text-sm font-light p-1 w-[45%] flex justify-center gap-6 rounded-md">
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
              className=" text-white bg-[#E11D48] px-6 py-1 rounded-xl items-center"
            >
              Compare
            </Link>
          </div>        

          <div className="flex items-center justify-between">

            <VerticalMenu />

            <Image 
              src={SingleCar}
              width="450"
              height="300"
              className="mr-28 mt-16 w-[500px]"
            />       

          </div>
        </div>
                      
      </section>

      <Categories />      
    </>    
  )
}

export default Comparison