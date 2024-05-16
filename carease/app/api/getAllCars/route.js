import Car from "@/models/car";
import { NextResponse } from "next/server";

export async function GET(req){
    try{
        const cars = await Car.find()

        return NextResponse.json(cars, { status: 200 })
    } catch(err) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}