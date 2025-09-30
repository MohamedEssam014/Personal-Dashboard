import { useEffect, useState } from "react";
import { getMatches } from "../api/matches";

export default function MatchesCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMatches()
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data.length) return <p>جاري تحميل مواعيد المباريات...</p>;

  return (
    <div className="card">
      <h2>⚽ المباريات</h2>
      <ul>
        {data.map((match, idx) => (
          <li key={idx}>
            {match.teams} - {match.time} ({match.league})
          </li>
        ))}
      </ul>
    </div>
  );
}
