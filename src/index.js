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
      <h1>Stripe Playground</h1>

      <fieldset>
        <label>
          Player Name:
          <input
            type="text"
            value={name}
            token={12345}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Players Team:
          <input type="text" />
        </label>

        <br />
        <label>
          Amount to Payment
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </label>

        <br />
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
