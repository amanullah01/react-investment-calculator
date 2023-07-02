import React from "react";
import InvestmentList from "./InvestmentList";
import styles from "./InvestmentLists.module.css";

const InvestmentLists = (props) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearData) => (
          <InvestmentList
            key={yearData.year}
            yearData={yearData}
            initialInvestment={props.initialInvestment}
          />
        ))}
      </tbody>
    </table>
  );
};

export default InvestmentLists;
