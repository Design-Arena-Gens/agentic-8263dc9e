import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'CreatorBook ? Book top creators',
  description: 'Discover and book top creators for collaborations, shoutouts, and events.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 container-px mx-auto w-full max-w-6xl py-6 sm:py-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
