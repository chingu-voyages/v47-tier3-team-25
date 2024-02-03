import { connect } from "@/dbconfig/dbconfig";
import Car from "@/models/car";
import { NextResponse } from "next/server";

connect()

export async function GET(req, content){    

    try{
        const carId = content.params.id

        const carData = await Car.findById(carId)

        if(!carData) {
            return NextResponse.json('No car found..' )
        }
        
        return NextResponse.json(carData, {status: 200})

    } catch(err){
        
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });

    }
    
}