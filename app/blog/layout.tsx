import Link from "next/link";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">

      {/* ✅ Sidebar */}
      <aside className="w-1/4 p-4 bg-gray-100 min-h-screen border-r">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>

        <ul className="space-y-2">
          <li>
            <Link href="/blog?category=tech" className="hover:underline">
              Tech
            </Link>
          </li>
          <li>
            <Link href="/blog?category=lifestyle" className="hover:underline">
              Lifestyle
            </Link>
          </li>
          <li>
            <Link href="/blog?category=education" className="hover:underline">
              Education
            </Link>
          </li>
        </ul>
      </aside>

      {/* ✅ Blog content goes here */}
      <main className="flex-1 p-6">
        {children}
      </main>
      
    </div>
  );
}
