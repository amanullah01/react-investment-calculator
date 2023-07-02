import React, { useState } from "react";
import Header from "./components/Header";
import InvestmentForm from "./components/InvestmentInput/InvestmentForm";
import InvestmentLists from "./components/InvestmentTable/InvestmentLists";

function App() {
  const [userInput, setUserInput] = useState(null);

  const yearlyData = [];

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: +yearlyInterest,
        savingsEndOfYear: +currentSavings,
        yearlyContribution: +yearlyContribution,
      });
    }

    console.log(userInput);
    console.log(yearlyData);
  }

  return (
    <div>
      <Header />
      <InvestmentForm onSubmitInvestmentForm={calculateHandler} />

      {!userInput && <p style={{ textAlign: "center" }}>No data found</p>}
      {userInput && (
        <InvestmentLists
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
