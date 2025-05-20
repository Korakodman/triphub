"use client";

import { useState } from "react";

export default function CreateTripPage() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    description: "",
    members: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tripData = {
      ...formData,
      members: formData.members.split(",").map((m) => m.trim()),
    };
    console.log("ส่งข้อมูลทริป:", tripData);
    alert("ทริปถูกสร้างแล้ว (mock)");
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">สร้างทริปใหม่</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">ชื่อทริป</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">วันที่</label>
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="เช่น 10-15 ตุลาคม 2025"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">รายละเอียด</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">สมาชิก (คั่นด้วย ,)</label>
          <input
            type="text"
            name="members"
            value={formData.members}
            onChange={handleChange}
            placeholder="เช่น บีม, แนต, อาร์ม"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          สร้างทริป
        </button>
      </form>
    </main>
  );
}
