import { pingBackend } from "@/lib/api";

export default async function HomePage() {
  const data = await pingBackend();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">HoopIQ</h1>
      <p>Backend says: {data.message}</p>
    </main>
  );
}
