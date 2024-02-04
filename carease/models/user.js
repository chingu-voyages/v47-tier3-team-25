import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: [true, "Please provide an username"],
        unique: true,
    },
    email : {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },
    password : {
        type: String,
        required: [true, "Please provide a password"],        
    },
    role: {
        type: String,
        default: "customer",
        enum: ["admin", "customer", "dealer"]
    },    
},
    { timestamps: true }
)

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User