import React from "react";
import InvestmentList from "./InvestmentList";
import styles from "./InvestmentLists.module.css";

const InvestmentLists = () => {
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
        <InvestmentList />
      </tbody>
    </table>
  );
};

export default InvestmentLists;
