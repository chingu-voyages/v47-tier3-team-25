import Car from '@/models/car'
import { connect } from '@/dbconfig/dbconfig';
import { writeFile } from 'fs/promises'
import { NextResponse } from "next/server"
import cloudinary from '@/utils/cloudinary';

connect()

export async function POST (request) {

    const data = await request.formData()
    
    const model = data.get('model')
    const category = data.get('category')
    const exterior_color = data.get('exterior_color')
    const interior_color = data.get('interior_color')
    const drivetrain = data.get('drivetrain')
    const mpg = data.get('mpg')
    const fuel_type = data.get('fuel_type')
    const transmission = data.get('transmission')
    const engine = data.get('engine')
    const convenience = data.get('convenience')
    const entertainment = data.get('entertainment')
    const exterior = data.get('exterior')
    const safety = data.get('safety')
    const dealer = data.get('dealer')

    const file = data.get('file')    

    if(!file){
        return NextResponse.json({ "message": "No image found", success: false })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const path = `./public/${file.name}`
    await writeFile(path, buffer) 

    try{           
        const cloudinaryResponse = await cloudinary.uploader.upload(path, {
            folder: "carease", 
        });
    
        const imageUrl = cloudinaryResponse.secure_url;
        const cloudinary_id = cloudinaryResponse.public_id;
        
        const car = new Car({
            model, 
            category,
            specifications: {
                exterior_color,
                interior_color,
                drivetrain,
                mpg,
                fuel_type,
                transmission,
                engine,
                convenience,
                entertainment,
                exterior,
                safety,
            },           
            imageUrl,
            cloudinary_id,
            dealer,
        });
        
        await car.save();
        
        return NextResponse.json({ message: "File uploaded", success: true });
        
      } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error uploading file", success: false });
      }
}
  