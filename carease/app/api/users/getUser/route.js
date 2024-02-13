import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/user";
import { NextResponse } from "next/server";

connect()

export async function GET(request, content) {
    try{
        const usersList = await User.find()

        if(!usersList){
            return NextResponse.json("No users available..")
        }

        return NextResponse.json(usersList, { status : 200 })
        
    } catch(err) {
        return NextResponse.json({ error : "Internal server error" }, { status : 500 })
    }
}