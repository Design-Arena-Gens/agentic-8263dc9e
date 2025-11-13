import Link from 'next/link';

export function Navbar() {
  return (
    <header className="border-b border-gray-100">
      <div className="container-px mx-auto flex w-full max-w-6xl items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold">
          CreatorBook
        </Link>
        <nav className="flex items-center gap-2">
          <Link href="/creators" className="btn btn-outline">Find creators</Link>
          <Link href="/creators" className="btn btn-primary">Book now</Link>
        </nav>
      </div>
    </header>
  );
}
