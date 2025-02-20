import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2 className="font-medium text-2xl mb-8 tracking-tighter">
        Oh no! This page does not exist.
      </h2>
      <p> If you expected to see something here, let me know.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
