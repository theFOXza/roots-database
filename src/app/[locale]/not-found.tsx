import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-root-500">Not found</p>
      <h1 className="mt-3 font-heading text-4xl text-root-800">This remedy is still hidden in the roots.</h1>
      <p className="mt-3 text-root-600">Try browsing the database to find another remedy.</p>
      <Button className="mt-6" asChild>
        <Link href="/remedies">Browse remedies</Link>
      </Button>
    </div>
  );
}
