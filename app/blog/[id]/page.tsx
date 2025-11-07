export const revalidate = 10; // ✅ ISR: regenerate every 10 seconds

interface BlogDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Author {
  id: number;
  name: string;
}

async function getPost(id: string): Promise<Post | null> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 10 }, // ✅ ISR with 10 second revalidation
  });

  if (!res.ok) return null;
  return res.json();
}

async function getAuthor(authorId: number): Promise<Author | null> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) return null;
  return res.json();
}

export default async function BlogDetailsPage({ params }: BlogDetailsProps) {
  const { id } = await params; // ✅ CRITICAL: Await params in Next.js 15
  
  const post = await getPost(id);

  if (!post) {
    return <p className="p-10 text-center">Post not found.</p>;
  }

  const author = await getAuthor(post.userId);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <p className="text-gray-500 mb-6">
         Author: <span className="font-semibold">{author?.name}</span>
      </p>

      <p className="text-gray-700 leading-relaxed">{post.body}</p>
    </div>
  );
}