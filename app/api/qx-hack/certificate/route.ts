import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

interface Participant {
  name: string;
  email: string;
}

function getParticipants(): Participant[] {
  const filePath = join(process.cwd(), 'participants.json');
  const raw = readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as Participant[];
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = (body.email ?? '').trim().toLowerCase();

    if (!email) {
      return NextResponse.json(
        { error: 'Please enter your email address.' },
        { status: 400 },
      );
    }

    const participants = getParticipants();
    const match = participants.find(
      (p) => p.email.trim().toLowerCase() === email,
    );

    if (!match) {
      return NextResponse.json(
        { error: 'This email was not found in our participant list. Please check the email you registered with.' },
        { status: 404 },
      );
    }

    return NextResponse.json({ name: match.name });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    );
  }
}
