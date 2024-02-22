import mongoose from "mongoose"

const carSchema = new mongoose.Schema({
    model: {
        type: String,
        required: [true, "Please provide the car model"]
    },
    category: {
        type: String,
        default: "normal",
        enum: ["popular", "upcoming", "supercars", "other"]
    },        
    specifications: {
        exterior_color: {
            type: String,            
        },
        interior_color: {
            type: String,            
        },
        drivetrain: {
            type: String,            
        },
        mpg: {
            type: String,            
        },
        fuel_type: {
            type: String,            
        },
        transmission: {
            type: String,            
        },
        engine: {
            type: String,            
        },
        convenience: {
            type: String,            
        },
        entertainment: {
            type: String,            
        },
        exterior: {
            type: String,            
        },
        safety: {
            type: String,            
        }
    },
    imageUrl: {
        type: String,            
       },  
    cloudinary_id: {
        type: String,
    },       
    dealer : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Reference to the user model
    }
},
    { timestamps: true }
)

const Car = mongoose.models.cars || mongoose.model("cars", carSchema)

export default Car