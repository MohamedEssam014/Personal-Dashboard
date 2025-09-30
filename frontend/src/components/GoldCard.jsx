import { useEffect, useState } from "react";
import { getGoldPrice } from "../api/gold";

export default function GoldCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getGoldPrice()
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <p>جاري تحميل أسعار الذهب...</p>;

  return (
    <div className="card">
      <h2>🪙 أسعار الذهب</h2>
      <p>{data.price} {data.currency}</p>
    </div>
  );
}
