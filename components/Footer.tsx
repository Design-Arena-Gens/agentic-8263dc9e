export function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-100">
      <div className="container-px mx-auto w-full max-w-6xl py-6 text-sm text-gray-500">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p>? {new Date().getFullYear()} CreatorBook</p>
          <p className="text-xs">Demo app ? no data is persisted.</p>
        </div>
      </div>
    </footer>
  );
}
