import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find({});
    return NextResponse.json({ message: 'Users fetched successfully', data: users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const newUser = await User.create(body);

    return NextResponse.json({ message: 'User created successfully', user: newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 400 });
  }
}
