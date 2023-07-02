import React from "react";

const InvestmentList = (props) => {
  return (
    <tr>
      <td>{props.yearData.year}</td>
      <td>{props.yearData.savingsEndOfYear}</td>
      <td>{props.yearData.yearlyInterest}</td>
      <td>
        {props.yearData.savingsEndOfYear -
          props.initialInvestment -
          props.yearData.yearlyContribution * props.yearData.year}
      </td>
      <td>{props.initialInvestment}</td>
    </tr>
  );
};

export default InvestmentList;
