"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'


const page = ({params}) => {

  const [car, setCar] = useState([])  

  useEffect(() => {

    const getCar = async() => {
        const carData = await axios.get(`/api/getCar/${params.carId}`)
        setCar(carData.data)
    }
    getCar()

  }, [])  

  return (

    <div className='flex gap-4 justify-center'>
        <div className="relative  md:w-[400px] flex flex-col text-center  flex-wrap my-6">
            <div className="mt-6  h-[400px] bg-[#D9D9D9] rounded-2xl relative">
                <div className="bg-[url('/images/ellipse.svg')] bg-no-repeat absolute top-[-50px] w-[150px] h-[80px] mx-[31%]">
                <p className="uppercase text-center mt-12 ">{car.category}</p>
                </div>
                <div className=" mt-[40%]">          
                <Image 
                    src={car.imageUrl}
                    width={450} 
                    height={400} 
                />
                </div>
            </div>
            <p className="text-4xl my-4">{car.model}</p>            
        </div>

        <div className="relative md:w-[800px] flex flex-col flex-wrap my-6">
            <div className="mt-6  h-[400px] bg-[#D9D9D9] rounded-2xl relative">
                <div className="bg-[url('/images/ellipse.svg')] bg-no-repeat absolute top-[-50px] w-[160px] h-[100px] mx-[31%]">
                <p className="uppercase text-center mt-12 ">Specifications</p>
                </div>
                <div className="text-left px-4 mt-[15%]">          
                    <p>Fuel Type : {car.specifications?.fuel_type}</p>
                    <p>MPG : {car.specifications?.mpg}</p>
                    <p>Drivetrain : {car.specifications?.drivetrain}</p>
                    <p>Transmission : {car.specifications?.transmission}</p>
                    <p>Engine : {car.specifications?.engine}</p>
                    <p>Safety : {car.specifications?.safety}</p>
                    <p>Exterior : {car.specifications?.exterior}</p>
                    <p>Colors : {car.specifications?.exterior_color}, {car.specifications?.interior_color}</p>
                </div>
            </div>            
            <div className="flex justify-around lg:justify-between ">

                <Button styleType={'bg-[#F14021] text-white border-none'}
                name="Discover"></Button>
                
            </div>
        </div>
    </div>
  )
}

export default page