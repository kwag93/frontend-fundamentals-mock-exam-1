import { http } from 'tosslib';
import { SavingsProduct } from './types';

const getSavingProducts = async () => {
  const response = await http.get<SavingsProduct[]>('/api/savings-products');
  return response;
};

export const getSavingProductsOptions = {
  queryKey: ['saving-products'],
  queryFn: getSavingProducts,
};
