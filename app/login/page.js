"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      router.push("/products");
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow w-96">
      <h2 className="text-xl font-bold mb-4">Вхід</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          placeholder="Ім'я користувача"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          className="w-full p-2 border rounded"
          type="password"
          placeholder="Пароль"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full">
          Увійти
        </button>
      </form>
    </div>
  );
}
