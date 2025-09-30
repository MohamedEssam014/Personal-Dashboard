import { useEffect, useState } from "react";
import { getTransportTimes } from "../api/transport";

export default function TransportCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTransportTimes()
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data.length) return <p>جاري تحميل مواعيد المواصلات...</p>;

  return (
    <div className="card">
      <h2>🚌 المواصلات</h2>
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>
            {item.line} - {item.next}
          </li>
        ))}
      </ul>
    </div>
  );
}
