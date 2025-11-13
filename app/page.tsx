import Link from 'next/link';
import { ArrowRight, CalendarCheck, Search } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-10 sm:space-y-14">
      <section className="card relative overflow-hidden p-6 sm:p-10">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Book top creators for your next project
          </h1>
          <p className="text-gray-600">
            Discover creators across niches and platforms. Check real-time availability and book in minutes.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/creators" className="btn btn-primary">
              Browse creators
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/creators" className="btn btn-outline">
              <Search className="mr-2 h-4 w-4" />
              Quick search
            </Link>
          </div>
        </div>
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 items-center justify-center sm:flex">
          <div className="h-56 w-56 rounded-full bg-brand-200 blur-3xl" />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="card p-5">
          <h3 className="mb-1 text-base font-semibold">Verified creators</h3>
          <p className="text-sm text-gray-600">Handpicked profiles with transparent rates.</p>
        </div>
        <div className="card p-5">
          <h3 className="mb-1 text-base font-semibold">Instant booking</h3>
          <p className="text-sm text-gray-600">Reserve slots that fit your launch timeline.</p>
        </div>
        <div className="card p-5">
          <h3 className="mb-1 text-base font-semibold">Simple contracts</h3>
          <p className="text-sm text-gray-600">Clear terms, upfront deliverables, no surprises.</p>
        </div>
      </section>

      <section className="card p-6 sm:p-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold">Ready to collaborate?</h2>
            <p className="text-sm text-gray-600">Find a time that works for both of you.</p>
          </div>
          <Link href="/creators" className="btn btn-primary">
            Check availability
            <CalendarCheck className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
