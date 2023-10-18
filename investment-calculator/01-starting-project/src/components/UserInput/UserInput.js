import React, { useState } from "react";

const UserInput = (props) => {
    const initialinput = {
        "current-savings": 10000,
        "yearly-contribution": 1200,
        "expected-return": 12,
        duration: 10,
      }
      const [userInput, setUserInput] = useState(initialinput);

  const SubmitHandler = (event) => {
    event.preventDefault();
props.onCalculate(userInput);
  };

  const ResetHandler = () => {
    setUserInput(initialinput);
  };

  

  const ChangeHandler = (identifier, value) => {
    setUserInput((prevData) => {
      return {
        ...prevData,
        [identifier]:value,
      };
    });
  };

  return (
    <form onSubmit={SubmitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              ChangeHandler("current-savings", event.target.value)
            }
            value={userInput['current-savings']}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              ChangeHandler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              ChangeHandler("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => ChangeHandler("duration", event.target.value)}
            value={userInput['duration']}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={ResetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
