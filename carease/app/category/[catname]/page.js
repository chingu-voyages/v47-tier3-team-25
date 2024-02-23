"use client"

import Card from "@/components/Card"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

const CategoryName = ({params}) => {

    const [carsByCategory, setCarsByCategory] = useState([])

    useEffect(() => {

        const getCarsData = async() => {            
            const carsData = await axios.get(`/api/getCarByCategory/${params.catname}`)
            setCarsByCategory(carsData.data)
        }

        getCarsData()

    }, [])

    return (
        
        <div className="mx-4">
            <h4 className="text-3xl md:text-[40px] ">{params.catname.toUpperCase()}</h4>
            
            <div className="w-full h-full flex gap-3">
            {carsByCategory.map((car) => {
                
                return (

                    <Card 
                        tag={car.category}
                        imageUrl={car.imageUrl}
                        model={car.model}
                        carId={car._id}
                    />
                                      
                )                
            })}
            </div>
        </div>
        
    )
}

export default CategoryName