import React, { useState } from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import logo from "./icon.jpeg";

import "./styles.css";

function App() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <div className="App">
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
          />
        </div>

        <div className="form__control">
          <label>Player Team</label>
          <input type="text" placeholder="Enter Players Team" />
        </div>

        <div className="form__control">
          <label>Payment Amount</label>
          <input
            type="number"
            value={amount}
            pl
            onChange={e => setAmount(e.target.value)}
          />
        </div>

        <StripeCheckout
          name={`Membership Payment for ${name}`}
          image={logo}
          currency="EUR"
          amount={amount * 100}
        />
      </fieldset>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
