import Link from 'next/link';
import Image from 'next/image';
import type { Creator } from '@/lib/types';

export function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center gap-4 p-4">
        <Image
          src={creator.avatarUrl}
          alt={creator.name}
          width={64}
          height={64}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold">{creator.name}</h3>
          <p className="truncate text-sm text-gray-600">{creator.categories.join(', ')}</p>
        </div>
        <div className="ml-auto text-right">
          <p className="text-sm text-gray-500">From</p>
          <p className="text-base font-semibold">${creator.ratePerPost}</p>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-gray-100 p-3">
        <div className="flex flex-wrap gap-2 text-xs text-gray-600">
          {creator.platforms.map((p) => (
            <span key={p} className="rounded-full bg-gray-50 px-2 py-1">{p}</span>
          ))}
        </div>
        <Link href={`/creators/${creator.id}`} className="btn btn-primary">View</Link>
      </div>
    </div>
  );
}
