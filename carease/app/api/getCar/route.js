import { connect } from '@/dbconfig/dbconfig';
import Car from '@/models/car';
import { NextResponse } from 'next/server';

connect();

export async function GET(req, content) {
  try {
    const carData = await Car.find();

    const carNameId = [];
    carData.map((item) => {
      return carNameId.push({ model: item.model, id: item.id });
    });
    return NextResponse.json(carNameId, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
