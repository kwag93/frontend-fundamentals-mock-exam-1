import { SavingsProduct } from 'domains/savings/types';
import { ListRow, colors, Assets } from 'tosslib';

interface SavingProductProps {
  product: SavingsProduct;
  isSelected: boolean;
  onSelect: (product: SavingsProduct) => void;
}

export const SavingProduct = ({ product, isSelected, onSelect }: SavingProductProps) => {
  return (
    <ListRow
      contents={
        <ListRow.Texts
          type="3RowTypeA"
          top={product.name}
          topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
          middle={`연 이자율: ${product.annualRate}%`}
          middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
          bottom={`${product.minMonthlyAmount.toLocaleString()}원 ~ ${product.maxMonthlyAmount.toLocaleString()}원 | ${product.availableTerms}개월`}
          bottomProps={{ fontSize: 13, color: colors.grey600 }}
        />
      }
      right={isSelected ? <Assets.Icon name="icon-check-circle-green" /> : undefined}
      onClick={() => onSelect(product)}
    />
  );
};
