// دالة وهمية ترجع جدول مباريات
export async function getMatches() {
  return [
    { teams: "الأهلي 🆚 الزمالك", time: "20:00", league: "الدوري المصري" },
    { teams: "برشلونة 🆚 ريال مدريد", time: "22:00", league: "لا ليجا" },
    { teams: "ليفربول 🆚 مانشستر سيتي", time: "21:30", league: "بريميرليج" },
  ];
}
