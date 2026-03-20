export function getTier(score: number) {
  if (score >= 90) {
    return { label: "Gold Root", color: "#D4A017" };
  }
  if (score >= 75) {
    return { label: "Strong Root", color: "#8FA898" };
  }
  if (score >= 50) {
    return { label: "Growing Root", color: "#C4723A" };
  }
  if (score >= 25) {
    return { label: "Seedling", color: "#5A8F5C" };
  }
  return { label: "Unverified", color: "#8A9BAE" };
}
