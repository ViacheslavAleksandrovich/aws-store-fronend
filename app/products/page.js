"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => {
        localStorage.removeItem("token");
        router.push("/login");
      });
  }, []);

  return (
    <div className="max-w-2xl w-full p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Каталог товарів</h1>
      <ul className="space-y-4">
        {products.map((p) => (
          <li key={p.id} className="p-4 border rounded">
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p>{p.description}</p>
            <p className="text-blue-700 font-bold">{p.price} грн</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
