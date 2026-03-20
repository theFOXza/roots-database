import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const leaders = [
  { name: "Amina K.", points: 20450, rank: "Griot", region: "West Africa" },
  { name: "Lucia M.", points: 18320, rank: "Elder", region: "Brazil" },
  { name: "Noah S.", points: 15010, rank: "Root Keeper", region: "South Africa" }
];

export default function LeaderboardPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-root-500">Global</p>
        <h1 className="mt-2 font-heading text-4xl text-root-800">Leaderboard</h1>
      </div>

      <div className="mt-8 grid gap-4">
        {leaders.map((leader, index) => (
          <Card key={leader.name}>
            <CardContent className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-root-500">#{index + 1}</p>
                <h2 className="font-heading text-2xl text-root-800">{leader.name}</h2>
                <p className="text-sm text-root-600">{leader.region}</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge>{leader.rank}</Badge>
                <span className="text-lg font-semibold text-forest-roots">{leader.points.toLocaleString()} pts</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
