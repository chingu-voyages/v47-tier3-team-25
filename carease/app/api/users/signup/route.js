import { connect } from "@/dbconfig/dbconfig"
import User from "@/models/user"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"

connect()

export async function POST(request){
    try{
        const reqBody = await request.json()
        const {username, email, role, password} = reqBody

        console.log(reqBody)

        //check if user already exists with the provided email
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exists with that email"}, {status: 400})
        }

        // if this is a new user, then go ahead and hash the password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            role,
            password: hashedPassword
        })

        const savedUser = await newUser.save()        

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })

    } catch (err) {
        return NextResponse.json({error: err.message}, 
            {status: 500})
    }
}

