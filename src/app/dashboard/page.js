// src/app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Trip Dashboard</h1>

      <div className="space-y-4">
        <div className="p-4 border rounded-lg shadow">
          <h2 className="text-xl font-semibold">ทริปเชียงใหม่</h2>
          <p>20-25 พฤศจิกายน 2025 | สมาชิก: 4 คน</p>
        </div>

        <div className="p-4 border rounded-lg shadow">
          <h2 className="text-xl font-semibold">ทริปทะเลบางแสน</h2>
          <p>5-7 ธันวาคม 2025 | สมาชิก: 6 คน</p>
        </div>
      </div>
    </main>
  );
}
