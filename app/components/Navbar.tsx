import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl font-semibold">BlogAlly</h1>

        {/* Nav Links */}
        <div className="flex gap-6">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/blog" className="hover:text-gray-300">Blog</Link>
        </div>
      </nav>
    </header>
  );
}
