import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default async function SignUpPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <Card>
        <CardContent className="space-y-6 pt-6">
          <div>
            <h1 className="font-heading text-3xl text-root-800">Join the Roots community</h1>
            <p className="mt-2 text-sm text-root-600">Create your profile and start preserving heritage.</p>
          </div>
          <div className="space-y-3">
            <label className="text-sm font-semibold text-root-700">Name</label>
            <Input placeholder="Your name" />
            <label className="text-sm font-semibold text-root-700">Email</label>
            <Input type="email" placeholder="you@family.com" />
          </div>
          <Button className="w-full">Create account</Button>
          <p className="text-center text-xs text-root-500">
            Already have an account? <Link className="text-forest-roots" href={`/${locale}/auth/sign-in`}>Sign in</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
