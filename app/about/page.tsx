// ✅ This page uses SERVER-SIDE RENDERING (SSR)

interface Author {
  name: string;
  email: string;
  phone: string;
  website: string;
}

async function getAuthor(): Promise<Author> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    cache: "no-store", // ✅ This forces SSR
  });

  return res.json();
}

export default async function AboutPage() {
  const author = await getAuthor();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 space-y-8">
    <div className=" bg-slate-400 text-gray-800  rounded p-6 space-y-4 shadow w-1/4 ">
      <h1 className="text-3xl font-bold mb-4 underline">About the Author</h1>

      <p><strong>Name:</strong> {author.name}</p>
      <p><strong>Email:</strong> {author.email}</p>
      <p><strong>Phone:</strong> {author.phone}</p>
      <p><strong>Website:</strong> {author.website}</p>
    </div>
    </div>
  );
}
