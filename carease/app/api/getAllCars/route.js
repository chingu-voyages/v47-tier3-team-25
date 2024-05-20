import Car from "@/models/car";
import { connect } from '@/dbconfig/dbconfig';
import { NextResponse } from "next/server";

connect()

export async function GET(req) {
    try {
        
        const cars = await Car.find();
        
        const uniqueCategories = [...new Set(cars.map(car => car.category))];
        
        return NextResponse.json(uniqueCategories, { status: 200 });        
        
    } catch(err) {
        console.error("Error fetching cars:", err); // Log the error
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
