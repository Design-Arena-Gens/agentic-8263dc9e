"use client";

import { useMemo, useState } from 'react';
import type { Creator } from '@/lib/types';
import { CreatorCard } from './CreatorCard';

export function CreatorList({ creators }: { creators: Creator[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  const categories = useMemo(() => {
    return Array.from(new Set(creators.flatMap((c) => c.categories))).sort();
  }, [creators]);

  const filtered = useMemo(() => {
    return creators.filter((c) => {
      const q = query.trim().toLowerCase();
      const matchesQuery = !q ||
        c.name.toLowerCase().includes(q) ||
        c.categories.some((cat) => cat.toLowerCase().includes(q));
      const matchesCategory = !category || c.categories.includes(category);
      return matchesQuery && matchesCategory;
    });
  }, [creators, query, category]);

  return (
    <div className="space-y-4">
      <div className="card flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
        <input
          type="text"
          placeholder="Search creators or categories"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:w-64 focus:outline-none focus:ring-2 focus:ring-brand-400"
        >
          <option value="">All categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <CreatorCard key={c.id} creator={c} />
        ))}
      </div>
    </div>
  );
}
