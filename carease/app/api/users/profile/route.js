import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { getTokenData } from "@/helpers/getTokenData";

connect()

export async function GET(request) {
    try{    
        const { id, role } = await getTokenData(request)
        const user = await User.findById(id).select("-password")

        let welcomeMessage = "Welcome to admin profile"

        if(role === 'customer'){
            welcomeMessage = "Welcome customer"
        } else if(role ==='dealer') {
            welcomeMessage = "Welcome dealer"
        }

        return NextResponse.json({ message: welcomeMessage, user })
    } catch(err){
        return NextResponse.json({ error: err.message }, { status: 400 })
    }
} 