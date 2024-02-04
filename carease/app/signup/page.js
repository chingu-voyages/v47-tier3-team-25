"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

export default function SignUp(){

    const router = useRouter()

    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    })

    const onSignUp = async () => {
        try{
            const response = await axios.post("/api/users/signup", user)
            console.log("Signup successfull", response.data)

            router.push("/login")
        } catch (err) {
            console.error(err) 
        }
    }

    return (
        <div>
            <h1>Sign up</h1>
            <hr/>
            <label htmlFor="username">Username</label>
            <input 
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="Username"
            />

            <label htmlFor="email">Email</label>
            <input 
                id="email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="Email"
            />

            <label htmlFor="password">Password</label>
            <input 
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
            />
            <button onClick={onSignUp}>Sign up</button>
        </div>
    )
}