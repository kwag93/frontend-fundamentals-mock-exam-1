import { SavingsProduct } from 'domains/savings/types';
import { ListHeader, Spacing } from 'tosslib';
import { SavingProduct } from './SavingProduct';
import { getTopRatedProducts } from 'utils/products';

interface RecommendedProductsProps {
  products: SavingsProduct[];
  selectedProductId: string;
}

export const RecommendedProducts = ({ products, selectedProductId }: RecommendedProductsProps) => {
  const topProducts = getTopRatedProducts(products, 2);

  return (
    <>
      <ListHeader title={<ListHeader.TitleParagraph fontWeight="bold">추천 상품 목록</ListHeader.TitleParagraph>} />
      <Spacing size={12} />
      {topProducts.map(product => (
        <SavingProduct
          key={product.id}
          product={product}
          isSelected={selectedProductId === product.id}
          onSelect={() => {}}
        />
      ))}
    </>
  );
};
