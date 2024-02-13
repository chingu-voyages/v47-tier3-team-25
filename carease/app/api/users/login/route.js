import { connect } from "@/dbconfig/dbconfig"
import User from "@/models/user"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

connect()

export async function POST(request) {
    try{

        const reqBody = await request.json()
        const {email, password} = reqBody         

        const user = await User.findOne({email})

        //Check if user exists
        if(!user) {
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }

        //Check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password)

        if(!validPassword){
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }

        //create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        }

        // create the token
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn: "1d"})
        
        const response = NextResponse.json({
            message : "Login successful",
            success : true
        })
        response.cookies.set("token", token, {
            httpOnly: true,            
        })

        return response

    } catch(err) {
        return NextResponse.json({error: err.message},
            {status: 500})
    }
}