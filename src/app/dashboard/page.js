import Link from "next/link";

export default function DashboardPage() {
  const trips = [
    {
      id: "chiangmai-trip",
      name: "ทริปเชียงใหม่",
      date: "20-25 พฤศจิกายน 2025",
      members: 4,
    },
    {
      id: "bangsaen-trip",
      name: "ทริปทะเลบางแสน",
      date: "5-7 ธันวาคม 2025",
      members: 6,
    },
  ];

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Trip Dashboard</h1>

      <div className="space-y-4">
        {trips.map((trip) => (
          <div key={trip.id} className="p-4 border rounded-lg shadow">
            <Link href={`/dashboard/${trip.id}`}>
              <h2 className="text-xl font-semibold hover:underline cursor-pointer">
                {trip.name}
              </h2>
            </Link>
            <p>
              {trip.date} | สมาชิก: {trip.members} คน
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
