// دالة وهمية ترجع مواعيد مواصلات
export async function getTransportTimes() {
  return [
    { line: "مترو حلوان - المرج", next: "10 دقائق" },
    { line: "أتوبيس 400 - الجيزة", next: "20 دقيقة" },
    { line: "قطار القاهرة - بنى سويف", next: "45 دقيقة" },
  ];
}
