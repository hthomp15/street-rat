import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Sighting from '@/models/Sighting';

export async function GET() {
  try {
    // Connect to the MongoDB database
    await dbConnect();

    // Query the database to fetch all sightings
    const sightings = await Sighting.find({}).limit(5); // Fetch the first 5 sightings

    return NextResponse.json({ message: 'Connection successful', data: sightings }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to connect to the database' }, { status: 500 });
  }
}
