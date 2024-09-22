import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Sighting from '@/models/Sighting';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await dbConnect();
    const sighting = await Sighting.findById(id);
    if (!sighting) {
      return NextResponse.json({ message: 'Sighting not found' }, { status: 404 });
    }
    return NextResponse.json(sighting, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch sighting' }, { status: 400 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await dbConnect();
    await Sighting.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Sighting deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete sighting' }, { status: 400 });
  }
}
