import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/user";
import { NextResponse } from "next/server";

connect()

export async function GET(request, content) {
    try{
        const userId = content.params.id
        const userData = await User.findById(userId)

        if(!userData){
            return NextResponse.json("No user available..")
        }

        return NextResponse.json(userData, { status : 200 })
        
    } catch(err) {
        return NextResponse.json({ error : "Internal server error" }, { status : 500 })
    }
}