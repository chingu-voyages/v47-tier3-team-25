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
      <section className='w-full h-full px-16 py-32 bg-[#d9d9d9]'>

        <div className="flex items-center justify-between gap-6">

          <VerticalMenu />

          <Image 
            src={SingleCar}
            width="450"
            height="300"
          />

          <div className="flex items-center  text-xl text-bold  gap-6 ">
            <Link href="/" className="bg-[#171414] text-white px-8 py-1 rounded-2xl">
              Compare
            </Link>
          </div>

        </div>

        <div className='flex flex-col pt-12 md:flex-row md:justify-center text-center text-[#312C2C]'>
          <SpecCard />          
          <SpecCard /> 
          <SpecCard /> 
        </div>        
                      
      </section>

      <Categories />      
    </>    
  )
}

export default Comparison