import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-root-500">Our Mission</p>
        <h1 className="mt-3 font-heading text-4xl text-root-800">Preserve ancestral wisdom. Verify with science.</h1>
        <p className="mt-4 text-root-600">
          The Roots Database is built to honor the healers, grandmothers, and practitioners who have kept communities
          healthy for generations. We document, research, and share traditional remedies with cultural respect.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="pt-6">
            <h2 className="font-heading text-2xl">How scoring works</h2>
            <p className="mt-3 text-sm text-root-600">
              Each remedy receives a Roots Score based on Ancestral Depth, Cross-Cultural Reach, Scientific Validation,
              Modern Applications, and Safety Profile. Scores are assigned after review by our research team.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h2 className="font-heading text-2xl">Team & community</h2>
            <p className="mt-3 text-sm text-root-600">
              Our team blends ethnobotany, clinical research, and cultural stewardship. Community contributors earn
              badges, rank progression, and share in recognition.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
