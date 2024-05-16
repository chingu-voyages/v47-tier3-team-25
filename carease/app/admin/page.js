import VerticalMenu from '@/components/VerticalMenu';
import Link from 'next/link';
import React from 'react'
import imageUrl from '../../public/images/Mclaren-720S.png'
import Image from 'next/image';
import Button from '@/components/Button';

const page = () => {
  return (
    
    <section className=" w-[100%] h-[100%] sm:px-4 lg:px-16 py-20 sm:py-16 lg:py-32 px-1">
        <div
          className="relative flex flex-col justify-center md:justify-end items-end gap-3"
        //   onMouseLeave={() => setShow(false)}
        >
          {/* <div className="bg-gradient-to-t to-[#343131]/80 from-black/60 text-xs md:text-sm font-light transition-all duration-300 py-2 w-[98%] sm:w-[450px]  lg:w-[500px] flex justify-center gap-1 sm:gap-4 px-4  rounded-md ">
            {['Engine', 'Drive', 'Transmission', 'Exterior', 'MPG'].map(
              (item, index) => {
                return (
                  <Link
                    key={index}
                    href="#"
                    className="text-white px-2 md:px-4 py-2 rounded-md hover:bg-[#fff] 
                     transition-all duration-300 hover:text-[#3f3f3f]"
                  >
                    {item}
                  </Link>
                );
              }
            )}
          </div> */}
          <div className="h-14">
            <Button 
                name="Add Category"                 
            />
          </div>
          {/* {show && <CompareCarModel modelStyle="py-1" />} */}
        </div>

        <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between">
          <VerticalMenu />

          <div>
            <table class="table-fixed">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category name</th>                    
                        <th>Action</th>                    
                        <th>Action</th>                    
                    </tr>
                </thead>
                <tbody>
                    <tr className='hover:bg-blue-100'>
                        <td className='p-8'>
                            <Image
                                src={imageUrl}
                                width={120}          
                                alt=""
                                priority={false}                                            
                            />
                        </td>
                        <td className='p-8'>Malcolm Lockyer</td>                        
                        <td className='p-8'>Remove</td>
                        <td className='p-8'>Update</td>
                    </tr>
                    <tr className='hover:bg-blue-100'>
                        <td className='p-8'>
                            <Image
                                src={imageUrl}
                                width={120}          
                                alt=""
                                priority={false}                                            
                            />
                        </td>
                        <td className='p-8'>Malcolm Lockyer</td>
                        <td className='p-8'>Remove</td>
                        <td className='p-8'>Update</td>
                    </tr>
                    <tr className='hover:bg-blue-100'>
                        <td className='p-8'>
                            <Image
                                src={imageUrl}
                                width={120}          
                                alt=""
                                priority={false}                                            
                            />
                        </td>
                        <td className='p-8'>Malcolm Lockyer</td>
                        <td className='p-8'>Remove</td>
                        <td className='p-8'>Update</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
    </section>

  )
}

export default page