import { connect } from "@/dbconfig/dbconfig"
import Car from "@/models/car"
import { NextResponse } from "next/server"

connect()

export async function GET(req, content) {    

    try {
        const popular = content.params.getTopThree[1]
        const supercars = content.params.getTopThree[2]       
        const upcoming = content.params.getTopThree[3]
        const other = content.params.getTopThree[4]

        const getTopThreeCars = async (category)=> {
            const cars = await Car.find({ category: category })
                .sort({ createdAt: -1 })
                .limit(3)
            return cars
        }

        const popularCarsData = await getTopThreeCars(popular)
        const superCarsData = await getTopThreeCars(supercars)
        const upcomingCarsData = await getTopThreeCars(upcoming)
        const otherCarsData = await getTopThreeCars(other)
        
        const result = {
            popularCarsData,
            superCarsData,
            upcomingCarsData,  
            otherCarsData,          
        }

        return NextResponse.json(result, {status: 200})

    } catch (err) {

        return NextResponse.json({err: "Internal server error"}, {status: 500})
        
    }

}