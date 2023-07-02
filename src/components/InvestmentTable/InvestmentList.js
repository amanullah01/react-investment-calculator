import React from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const InvestmentList = (props) => {
  return (
    <tr>
      <td>{props.yearData.year}</td>
      <td>{formatter.format(props.yearData.savingsEndOfYear)}</td>
      <td>{formatter.format(props.yearData.yearlyInterest)}</td>
      <td>
        {formatter.format(
          props.yearData.savingsEndOfYear -
            props.initialInvestment -
            props.yearData.yearlyContribution * props.yearData.year
        )}
      </td>
      <td>
        {formatter.format(
          +props.initialInvestment +
            +props.yearData.yearlyContribution * +props.yearData.year
        )}
      </td>
    </tr>
  );
};

export default InvestmentList;
