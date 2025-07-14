"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Каталог товарів</h1>
      {products.length === 0 && <p>Завантаження...</p>}
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <strong>{p.price} грн</strong>
          </li>
        ))}
      </ul>
    </main>
  );
}
