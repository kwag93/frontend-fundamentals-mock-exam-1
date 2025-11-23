import { SavingsProduct, ParsedSavingsConditions } from './types';

export function getAvailableSavingsProducts(
  products: SavingsProduct[],
  conditions: ParsedSavingsConditions
): SavingsProduct[] {
  return products.filter(product => {
    if (conditions.monthlyPayment > 0) {
      const isWithinRange =
        product.minMonthlyAmount <= conditions.monthlyPayment && product.maxMonthlyAmount >= conditions.monthlyPayment;
      if (!isWithinRange) {
        return false;
      }
    }

    if (conditions.term > 0) {
      if (product.availableTerms !== conditions.term) {
        return false;
      }
    }

    return true;
  });
}
