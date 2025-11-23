import { useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getSavingProductsOptions } from 'domains/savings/queries';
import { getAvailableSavingsProducts } from 'domains/savings/filters';
import { SavingsProduct } from 'domains/savings/types';
import { Border, ListRow, Spacing } from 'tosslib';

import { useSavingsCalculatorConditions } from 'features/savings-calculator/hooks/useSavingsCalculatorParams';
import { CalculationResult } from 'features/savings-calculator/components/CalculationResult';
import { RecommendedProducts } from 'features/savings-calculator/components/RecommendedProducts';
import { SavingCalculator } from 'features/savings-calculator/components/SavingCalculator';
import { SavingProduct } from 'features/savings-calculator/components/SavingProduct';
import { SavingTap } from 'features/savings-calculator/components/SavingTap';
import { TabValue } from 'features/savings-calculator/components/types';

export const SavingsCalculatorPage = () => {
  const conditions = useSavingsCalculatorConditions();

  const [selectedProduct, setSelectedProduct] = useState<SavingsProduct | null>(null);
  const [activeTab, setActiveTab] = useState<TabValue>('products');

  const { data: availableSavingsProducts } = useSuspenseQuery({
    ...getSavingProductsOptions,
    select: products => getAvailableSavingsProducts(products, conditions),
  });

  const canShowResult =
    selectedProduct !== null && conditions.monthlyPayment > 0 && conditions.term > 0 && conditions.targetAmount > 0;

  return (
    <>
      <SavingCalculator />
      <Spacing size={24} />
      <Border height={16} />
      <Spacing size={8} />

      <SavingTap value={activeTab} onChange={setActiveTab} />

      {activeTab === 'products' &&
        availableSavingsProducts.map(product => (
          <SavingProduct
            key={product.id}
            product={product}
            isSelected={selectedProduct?.id === product.id}
            onSelect={setSelectedProduct}
          />
        ))}

      {activeTab === 'results' && (
        <>
          <Spacing size={8} />
          {canShowResult && selectedProduct !== null ? (
            <>
              <CalculationResult
                monthlyPayment={conditions.monthlyPayment}
                term={conditions.term}
                targetAmount={conditions.targetAmount}
                annualRate={selectedProduct.annualRate}
              />
              <Spacing size={8} />
              <Border height={16} />
              <Spacing size={8} />
              <RecommendedProducts products={availableSavingsProducts} selectedProductId={selectedProduct.id} />
            </>
          ) : (
            <ListRow contents={<ListRow.Texts type="1RowTypeA" top="상품을 선택해주세요." />} />
          )}
        </>
      )}

      <Spacing size={40} />
    </>
  );
};
