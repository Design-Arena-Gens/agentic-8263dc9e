"use client";

import { useMemo, useState } from 'react';
import type { Creator } from '@/lib/types';
import { format } from 'date-fns';

function todayYMD() {
  return format(new Date(), 'yyyy-MM-dd');
}

export function BookingForm({ creator }: { creator: Creator }) {
  const [date, setDate] = useState<string>(todayYMD());
  const [time, setTime] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const times = useMemo(() => creator.availability[date] ?? [], [creator.availability, date]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ creatorId: creator.id, date, time, name, email, notes }),
      });
      if (!res.ok) throw new Error('Request failed');
      const data = await res.json();
      setStatus(`Booked! Confirmation #${data.bookingId}`);
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="card space-y-4 p-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">Date</label>
          <input
            type="date"
            min={todayYMD()}
            value={date}
            onChange={(e) => { setDate(e.target.value); setTime(''); }}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Time</label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
            required
          >
            <option value="" disabled>Select a time</option>
            {times.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">Your name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@example.com"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
            required
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Briefly describe the collaboration"
          className="min-h-[80px] w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">Rate: <span className="font-semibold">${creator.ratePerPost}</span> per deliverable</p>
        <button type="submit" disabled={loading} className="btn btn-primary">
          {loading ? 'Booking?' : 'Confirm booking'}
        </button>
      </div>

      {status && (
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm">{status}</div>
      )}
    </form>
  );
}
