import { ListRow, colors } from 'tosslib';

interface CalculationResultProps {
  monthlyPayment: number;
  term: number;
  targetAmount: number;
  annualRate: number;
}

export const CalculationResult = ({ monthlyPayment, term, targetAmount, annualRate }: CalculationResultProps) => {
  const finalAmount = monthlyPayment * term * (1 + annualRate * 0.5);
  const goalGap = targetAmount - finalAmount;
  const rawRecommendedMonthly = targetAmount / (term * (1 + annualRate * 0.5));
  const recommendedMonthly = Math.round(rawRecommendedMonthly / 1000) * 1000;

  return (
    <>
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="예상 수익 금액"
            topProps={{ color: colors.grey600 }}
            bottom={`${finalAmount.toLocaleString()}원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="목표 금액과의 차이"
            topProps={{ color: colors.grey600 }}
            bottom={`${goalGap.toLocaleString()}원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="추천 월 납입 금액"
            topProps={{ color: colors.grey600 }}
            bottom={`${recommendedMonthly.toLocaleString()}원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
    </>
  );
};
