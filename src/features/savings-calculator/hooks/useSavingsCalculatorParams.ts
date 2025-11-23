import { ChangeEvent, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

function parseNumberParam(value: string | null): number {
  if (value === null || value === '') {
    return 0;
  }
  const parsed = Number(value);
  return isNaN(parsed) || parsed < 0 ? 0 : parsed;
}

function filterNumericInput(value: string): string {
  return value.replace(/[^0-9]/g, '');
}

export function useSavingsCalculatorConditions() {
  const [searchParams] = useSearchParams();

  return useMemo(
    () => ({
      monthlyPayment: parseNumberParam(searchParams.get('monthlyPayment')),
      term: parseNumberParam(searchParams.get('term')),
      targetAmount: parseNumberParam(searchParams.get('targetAmount')),
    }),
    [searchParams]
  );
}

export function useSavingsCalculatorUrlParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const displayValues = useMemo(
    () => ({
      targetAmount: searchParams.get('targetAmount') ?? '',
      monthlyPayment: searchParams.get('monthlyPayment') ?? '',
      term: parseNumberParam(searchParams.get('term')) || undefined,
    }),
    [searchParams]
  );

  const handleTextFieldChange = (key: 'targetAmount' | 'monthlyPayment') => (e: ChangeEvent<HTMLInputElement>) => {
    const numericValue = filterNumericInput(e.target.value);
    setSearchParams(prev => {
      prev.set(key, numericValue);
      return prev;
    });
  };

  const handleTermChange = (value: number) => {
    setSearchParams(prev => {
      prev.set('term', value.toString());
      return prev;
    });
  };

  return {
    displayValues,
    handleTextFieldChange,
    handleTermChange,
  };
}
