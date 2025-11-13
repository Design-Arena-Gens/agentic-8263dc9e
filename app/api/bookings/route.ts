import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });

  const { creatorId, name, email, date, time, notes } = body as Record<string, string>;
  if (!creatorId || !name || !email || !date || !time) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const bookingId = Math.random().toString(36).slice(2, 10).toUpperCase();
  // In a real app, persist to a database and send emails.
  return NextResponse.json({ bookingId, status: 'confirmed' });
}

export async function GET() {
  // Demo: returns empty list (no persistence).
  return NextResponse.json({ bookings: [] });
}
