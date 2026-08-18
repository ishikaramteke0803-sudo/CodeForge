import { connectToDatabase } from "@/lib/db";

export default async function Home() {
  await connectToDatabase(); // <-- Triggers the connection on page load

  return (
    <main>
      <h1>CodeForge</h1>
    </main>
  );
}