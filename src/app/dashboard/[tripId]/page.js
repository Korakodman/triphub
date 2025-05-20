import trips from "@/app/data/trip";

export default function TripDetailPage({ params }) {
  const { tripId } = params;
  const trip = trips.find((trip) => trip.id === tripId);

  if (!trip) {
    return (
      <main className="p-6">
        <h1 className="text-2xl text-red-500 font-bold">ทริปไม่พบ</h1>
      </main>
    );
  }

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">{trip.name}</h1>
      <p className="text-gray-600">{trip.date}</p>
      <p>{trip.description}</p>
      <div>
        <h2 className="font-semibold mt-4">สมาชิก</h2>
        <ul className="list-disc ml-5">
          {trip.members.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
