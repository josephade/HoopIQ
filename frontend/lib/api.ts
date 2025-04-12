export async function pingBackend() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/` );
  return res.json();
}