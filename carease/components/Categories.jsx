import Image from 'next/image'
import ReusableCard from './ReusableCard'
const Categories = () => {

  const categories = [
    {
        name: 'Electric',
        img: '',
        tag: 'View comparison'
    },
    {
        name: 'Luxury',
        img: '',
        tag: 'View comparison'
    },
    {
        name: 'Vintage',
        img: '',
        tag: 'View comparison'
    },
    
  ]  

  return (
    <>
        {/* Section to display comparison */}
        <section className='w-full h-[55vh] bg-[#d9d9d9] flex flex-col items-center justify-center gap-6'>
            <h1 className='text-2xl font-bold'>Your comparison is currently empty</h1>
            <Image 
                src="/images/comparison.png"
                width="120"
                height="120"                
            />            
        </section>

        {/* Section to display categories */}
        <section className='px-16'>
            <h1 className='my-8 text-2xl font-bold'>Compare from a wide range of categories</h1>
            <div className='flex flex-col md:flex-row md:justify-center text-center text-[#312C2C]'>                <ReusableCard categories={categories[0]}/>
                <ReusableCard categories={categories[1]}/>
                <ReusableCard categories={categories[2]}/>
            </div>            
        </section>
    </>
  )
}

export default Categories