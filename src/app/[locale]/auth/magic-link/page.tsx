import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default async function MagicLinkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <Card>
        <CardContent className="space-y-4 pt-6 text-center">
          <h1 className="font-heading text-3xl text-root-800">Check your email</h1>
          <p className="text-sm text-root-600">
            We sent a magic link to your inbox. Click it to finish signing in.
          </p>
          <Link className="text-sm text-forest-roots" href={`/${locale}/auth/sign-in`}>
            Back to sign in
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
