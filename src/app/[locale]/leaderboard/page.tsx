const leaders = [
  { name: "Amina K.", points: 20450, rank: "Griot", region: "West Africa" },
  { name: "Lucia M.", points: 18320, rank: "Elder", region: "Brazil" },
  { name: "Noah S.", points: 15010, rank: "Root Keeper", region: "South Africa" },
  { name: "Priya M.", points: 12780, rank: "Herbalist", region: "India" },
  { name: "Jean-Baptiste L.", points: 10450, rank: "Seedkeeper", region: "Haiti" }
];

const initialsFromName = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default async function LeaderboardPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;

  return (
    <div className="page active" id="page-leaderboard">
      <section className="section">
        <div className="section-default">
          <p className="eyebrow">Global Leaderboard</p>
          <h1 className="section-title" style={{ marginBottom: "var(--space-8)" }}>
            Top Contributors
          </h1>

          {leaders.map((leader, index) => (
            <div className="leaderboard-item" key={leader.name}>
              <div className="lb-rank">{index + 1}</div>
              <div className="lb-avatar">{initialsFromName(leader.name)}</div>
              <div className="lb-info">
                <div className="lb-name">{leader.name}</div>
                <div className="lb-region">{leader.region}</div>
              </div>
              <span className="lb-badge">{leader.rank}</span>
              <div className="lb-points">
                {leader.points.toLocaleString()} <span>pts</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
