import React, { useState } from "react";

import Card from "../UI/Card";
// import Input from "../UI/Input";
import Button from "../UI/Button";

import styles from "./InvestmentForm.module.css";

const initialInput = {
  "current-savings": 500,
  "yearly-contribution": 25000,
  "expected-return": 7,
  duration: 10,
};

const InvestmentForm = (props) => {
  const [userInput, setUserInput] = useState(initialInput);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onSubmitInvestmentForm(userInput);
  };

  const formResetHandler = (event) => {
    event.preventDefault();
    console.log("RESET");
    setUserInput(initialInput);
  };

  const inputHandler = (input, value) => {
    console.log(input, value);
    setUserInput((prevInput) => {
      return { ...prevInput, [input]: value };
    });
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
            value={userInput["current-savings"]}
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
            value={userInput["yearly-contribution"]}
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
            value={userInput["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => inputHandler("duration", event.target.value)}
            type="number"
            id="duration"
            value={userInput["duration"]}
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
