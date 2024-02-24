import jwt from "jsonwebtoken"

export const getTokenData = (request) => {
    try{
        
        const tokenCookie = request.cookies.get("token")
        const token = tokenCookie ? tokenCookie.value : ''

        console.log(token)

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

        console.log(decodedToken)
        
        return decodedToken

    } catch(err) {
        throw new Error(err.message)
    }
}