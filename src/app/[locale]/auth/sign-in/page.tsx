import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default async function SignInPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <Card>
        <CardContent className="space-y-6 pt-6">
          <div>
            <h1 className="font-heading text-3xl text-root-800">Welcome back</h1>
            <p className="mt-2 text-sm text-root-600">Sign in to continue your Roots journey.</p>
          </div>
          <div className="space-y-3">
            <Button variant="dark" className="w-full">Continue with Google</Button>
            <Button variant="secondary" className="w-full">Continue with Apple</Button>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-root-700">Email</label>
            <Input type="email" placeholder="you@family.com" />
            <Button className="w-full">Send magic link</Button>
          </div>
          <p className="text-center text-xs text-root-500">
            No account? <Link className="text-forest-roots" href={`/${locale}/auth/sign-up`}>Create one</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
