import { Tab } from 'tosslib';
import { TabValue } from './types';

interface SavingTapProps {
  value: TabValue;
  onChange: (value: TabValue) => void;
}

export const SavingTap = ({ value, onChange }: SavingTapProps) => {
  const handleChange = (newValue: string) => {
    if (newValue === 'products' || newValue === 'results') {
      onChange(newValue);
    }
  };

  return (
    <Tab onChange={handleChange}>
      <Tab.Item value="products" selected={value === 'products'}>
        적금 상품
      </Tab.Item>
      <Tab.Item value="results" selected={value === 'results'}>
        계산 결과
      </Tab.Item>
    </Tab>
  );
};
