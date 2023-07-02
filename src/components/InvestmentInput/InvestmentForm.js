import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./InvestmentForm.module.css";

const InvestmentForm = () => {
  return (
    <form className={styles.form}>
      <Card className={`${styles["input-group "]}`}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" />
        </p>
      </Card>
      <Card className={`${styles["input-group "]}`}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" />
        </p>
      </Card>
      <p className={styles.actions}>
        <Button type="reset" className={styles.buttonAlt}>
          Reset
        </Button>
        <Button type="submit" className={styles.button}>
          Calculate
        </Button>
      </p>
    </form>
  );
};

export default InvestmentForm;
