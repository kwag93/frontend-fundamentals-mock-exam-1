import { NavigationBar, Spacing, TextField, SelectBottomSheet } from 'tosslib';
import { useSavingsCalculatorUrlParams } from '../hooks/useSavingsCalculatorParams';

export const SavingCalculator = () => {
  const { displayValues, handleTextFieldChange, handleTermChange } = useSavingsCalculatorUrlParams();

  return (
    <div>
      <NavigationBar title="적금 계산기" />
      <Spacing size={16} />
      <TextField
        label="목표 금액"
        placeholder="목표 금액을 입력하세요"
        suffix="원"
        value={displayValues.targetAmount}
        onChange={handleTextFieldChange('targetAmount')}
      />
      <Spacing size={16} />
      <TextField
        label="월 납입액"
        placeholder="희망 월 납입액을 입력하세요"
        suffix="원"
        value={displayValues.monthlyPayment}
        onChange={handleTextFieldChange('monthlyPayment')}
      />
      <Spacing size={16} />
      <SelectBottomSheet
        label="저축 기간"
        title="저축 기간을 선택해주세요"
        value={displayValues.term}
        onChange={handleTermChange}
      >
        <SelectBottomSheet.Option value={6}>6개월</SelectBottomSheet.Option>
        <SelectBottomSheet.Option value={12}>12개월</SelectBottomSheet.Option>
        <SelectBottomSheet.Option value={24}>24개월</SelectBottomSheet.Option>
      </SelectBottomSheet>
    </div>
  );
};
