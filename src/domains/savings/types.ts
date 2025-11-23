export interface SavingsProduct {
  id: string;
  name: string;
  annualRate: number;
  minMonthlyAmount: number;
  maxMonthlyAmount: number;
  availableTerms: number;
}

export interface ParsedSavingsConditions {
  monthlyPayment: number;
  term: number;
  targetAmount: number;
}
