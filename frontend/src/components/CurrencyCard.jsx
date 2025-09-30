import { useEffect, useState } from "react";
import { getCurrencyRates } from "../api/currency";

export default function CurrencyCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getCurrencyRates("USD")
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <p>جاري تحميل أسعار العملات...</p>;

  return (
    <div className="card">
      <h2>💵 أسعار العملات</h2>
      <p>Base: {data.base_code}</p>
      <ul>
        <li>EGP: {data.rates.EGP}</li>
        <li>EUR: {data.rates.EUR}</li>
        <li>SAR: {data.rates.SAR}</li>
      </ul>
    </div>
  );
}
