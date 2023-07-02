import React from "react";

import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";

import styles from "./InvestmentForm.module.css";

const InvestmentForm = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("SUBMITTED");
  };

  const formResetHandler = (event) => {
    event.preventDefault();
    console.log("RESET");
  };

  const inputHandler = (input, value) => {
    console.log(input, value);
  };

  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
      <Card className={`${styles["input-group "]}`}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputHandler("current-savings", event.target.value)
            }
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputHandler("yearly-contribution", event.target.value)
            }
            type="number"
            id="yearly-contribution"
          />
        </p>
      </Card>
      <Card className={`${styles["input-group "]}`}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputHandler("expected-return", event.target.value)
            }
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => inputHandler("duration", event.target.value)}
            type="number"
            id="duration"
          />
        </p>
      </Card>
      <p className={styles.actions}>
        <button
          onClick={formResetHandler}
          type="reset"
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <Button type="submit" className={styles.button}>
          Calculate
        </Button>
      </p>
    </form>
  );
};

export default InvestmentForm;
