import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Sighting from '@/models/Sighting';

export async function GET() {
  try {
    await dbConnect();
    const sightings = await Sighting.find({});
    return NextResponse.json(sightings, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to fetch sightings' }, { status: 400 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await dbConnect();
    const sighting = await Sighting.create(body);
    return NextResponse.json({ message: 'Sighting created', sighting }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to create sighting' }, { status: 400 });
  }
}
