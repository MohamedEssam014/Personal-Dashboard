// دالة وهمية ترجع أسعار عملات
export async function getCurrencyRates(base = "USD") {
  return {
    base_code: base,
    rates: {
      EGP: 49.3,
      EUR: 0.92,
      SAR: 3.75,
    },
  };
}
