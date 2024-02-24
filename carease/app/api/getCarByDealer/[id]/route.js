import { connect } from "@/dbconfig/dbconfig";
import Car from "@/models/car";
import { NextResponse } from "next/server";

export async function GET (request, content) {
    try {
        const dealerId = content.params.id

        const carsByDealer = await Car.find({ dealer: dealerId })

        if(!carsByDealer) {
            return NextResponse.json({ message : "No cars listed by dealer" })
        }

        return NextResponse.json( carsByDealer , { status : 200} )

    } catch (err) {
        return NextResponse.json({ error : "Internal Server Error" }, { status: 500 })
    }
}