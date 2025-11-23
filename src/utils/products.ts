export function getTopRatedProducts<T extends { annualRate: number }>(products: T[], count: number): T[] {
  return [...products].sort((a, b) => b.annualRate - a.annualRate).slice(0, count);
}
