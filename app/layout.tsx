import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-neutral-950">
        <nav className="border-b border-neutral-800 px-4 py-3">
          <div className="max-w-md mx-auto flex gap-6">
            <Link
              href="/"
              className="text-xs tracking-widest uppercase text-gray-400 hover:text-orange-500 transition"
            >
              Calculate
            </Link>
            <Link
              href="/history"
              className="text-xs tracking-widest uppercase text-gray-400 hover:text-orange-500 transition"
            >
              History
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
