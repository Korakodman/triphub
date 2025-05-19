// src/app/dashboard/[tripId]/page.tsx
export default function TripDetailPage({ params }) {
  const { tripId } = params;
  console.log(tripId);
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Trip: {tripId}</h1>
      <p className="text-lg">รายละเอียดของทริป {tripId} จะแสดงที่นี่</p>
    </main>
  );
}
