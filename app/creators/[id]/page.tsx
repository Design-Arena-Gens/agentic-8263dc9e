import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { creators } from '@/lib/data';
import { BookingForm } from '@/components/BookingForm';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return creators.map((c) => ({ id: c.id }));
}

export default function CreatorPage({ params }: { params: { id: string } }) {
  const creator = creators.find((c) => c.id === params.id);
  if (!creator) return notFound();

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="card p-4 lg:col-span-2">
        <div className="flex items-center gap-4">
          <Image src={creator.avatarUrl} alt={creator.name} width={80} height={80} className="h-20 w-20 rounded-full object-cover" />
          <div>
            <h1 className="text-2xl font-semibold">{creator.name}</h1>
            <p className="text-sm text-gray-600">{creator.location}</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-sm text-gray-500">From</p>
            <p className="text-xl font-semibold">${creator.ratePerPost}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">{creator.bio}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600">
          {creator.platforms.map((p) => (
            <span key={p} className="rounded-full bg-gray-50 px-2 py-1">{p}</span>
          ))}
          {creator.categories.map((p) => (
            <span key={p} className="rounded-full bg-gray-50 px-2 py-1">{p}</span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {creator.socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              className="text-brand-700 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {s.platform}
            </a>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Book {creator.name}</h2>
        <BookingForm creator={creator} />
      </div>
    </div>
  );
}
