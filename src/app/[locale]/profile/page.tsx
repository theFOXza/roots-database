import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-heading text-4xl text-root-800">Amina K.</h1>
          <p className="text-root-600">Root Keeper • CQS 78</p>
        </div>
        <div className="flex gap-2">
          <Badge>🌿 Herbalist</Badge>
          <Badge>🥇 Gold Standard</Badge>
          <Badge>🌍 World Healer</Badge>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          { label: "Submissions", value: "12" },
          { label: "Points", value: "3,420" },
          { label: "Saved Remedies", value: "24" }
        ].map((item) => (
          <Card key={item.label}>
            <CardContent className="pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-root-500">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold text-forest-roots">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="pt-6">
            <h2 className="font-heading text-2xl">Recent Submissions</h2>
            <ul className="mt-4 space-y-3 text-sm text-root-600">
              <li>Hibiscus Infusion — Strong Root (78)</li>
              <li>Neem Skin Wash — Growing Root (62)</li>
              <li>Baobab Boost — Strong Root (80)</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h2 className="font-heading text-2xl">Saved Remedies</h2>
            <ul className="mt-4 space-y-3 text-sm text-root-600">
              <li>Ginger Tea — Gold Root (92)</li>
              <li>Moringa Porridge — Growing Root (71)</li>
              <li>Turmeric + Black Pepper — Strong Root (88)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
