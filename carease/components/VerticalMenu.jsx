import Link from 'next/link'
import React from 'react'

const VerticalMenu = () => {
  return (
    <>
        <div className='flex flex-col p-4 bg-[#454444] rounded-md'>
            <div className="flex flex-col text-md text-bold gap-6 ">
                <Link href="/" className="bg-white px-8 py-1 rounded-md">
                    Engine
                </Link>
                
                <Link href="/" className="bg-white px-8 py-1 rounded-md">
                    RPM
                </Link>

                <Link href="/" className="bg-white px-8 py-1 rounded-md">
                    Fuel
                </Link>

                <Link href="/" className="bg-white px-8 py-1 rounded-md">
                    Mileage
                </Link>

                <Link href="/" className="bg-white px-8 py-1 rounded-md">
                    Transmission
                </Link>
            </div>

            <div className="flex items-center  text-xl text-bold  gap-6 ">
                
            </div>
        </div>
    </>
  )
}

export default VerticalMenu