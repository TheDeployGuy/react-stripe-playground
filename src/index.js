import React, { useState } from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import logo from "./icon.jpeg";

import "./styles.css";

function App() {
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [amount, setAmount] = useState(10);

  function resetFields() {
    setAmount(50);
    setTeam("");
    setName("");
  }

  function onToken() {
    console.log("Tokennnnnn");
  }
  return (
    <form className="App">
      <h1>Player Registration Form</h1>

      <fieldset>
        <div className="form__control">
          <label>Player Name</label>
          <input
            type="text"
            placeholder="Enter Player Name"
            value={name}
            token={12345}
            onChange={e => setName(e.target.value)}
            //required
          />
        </div>

        <div className="form__control">
          <label>Player Team</label>
          <input
            type="text"
            placeholder="Enter Players Team"
            value={team}
            onChange={e => setTeam(e.target.value)}
            //required
          />
        </div>

        <div className="form__control">
          <label>Payment Amount</label>
          <input
            type="number"
            value={amount}
            min={10}
            onChange={e => setAmount(e.target.value)}
          />
        </div>

        <button type="button" onClick={resetFields}>
          Reset
        </button>

        <StripeCheckout
          type="submit"
          name={`Lions Membership Payment`}
          description="Blah"
          image={logo}
          currency="EUR"
          amount={amount * 100}
          stripeKey="pk_test_Tz2Nlwolw05Hy5PGsB34asWx"
          token={res => onToken()}
        />
      </fieldset>
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
