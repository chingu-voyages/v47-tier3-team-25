import { connect } from '@/dbconfig/dbconfig';
import Car from '@/models/car';
import { NextResponse } from 'next/server';

connect();

export async function GET(req, content) {
  try {
    const carId_A = content.params.compare[1];
    const carId_B = content.params.compare[2];

    if (!carId_A || !carId_B) return NextResponse.json('Invalid data..');

    const compareData = await Car.find({
      _id: { $in: [carId_A, carId_B] },
    });

    return NextResponse.json(compareData, { status: 200 });
  } catch (err) {
    return NextResponse.json({ err: 'Internal server error' }, { status: 500 });
  }
}
