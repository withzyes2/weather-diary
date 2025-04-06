import Calendar from "@/components/Calendar";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">🌤️ 오늘의 기분 기록</h1>
      <Calendar />
    </main>
  );
}