import Link from "next/link";

// ✅ Static Site Generation (SSG)
interface Post {
  id: number;
  title: string;
  body: string;
}

// ✅ Fetch posts at build time
async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 0 }, // ✅ SSG (no revalidation)
  });
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts(); // ✅ Runs on the server

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="border p-4 rounded-lg shadow-sm">
            <Link 
              href={`/blog/${post.id}`} 
              className="text-xl font-semibold hover:underline"
            >
              {post.title}
            </Link>

            <p className="text-gray-600">
              {post.body.substring(0, 80)}...
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}