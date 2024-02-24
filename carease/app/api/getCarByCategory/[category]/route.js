import Car from "@/models/car";
import { NextResponse } from "next/server";

export async function GET(req, content){

    try{
        const category = content.params.category

        const carData = await Car.find({ category: category })

        return NextResponse.json(carData, { status : 200 })

    } catch(err){
        return NextResponse.json({ error : "Internal servery errory" }, { status : 500 })
    }
}