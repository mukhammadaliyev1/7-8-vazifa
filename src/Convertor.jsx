import React, { useState, useEffect } from "react";

const Convertor = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(0);
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => response.json())
      .then((data) => {
        setCurrencies(data.rates);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then((response) => response.json())
        .then((data) => {
          setExchangeRate(data.rates[toCurrency]);
        });
    }
  }, [fromCurrency, toCurrency]);

  const convertedAmount = (amount * exchangeRate).toFixed(2);

  return (
    <div className="mt-4">
      <div className="flex  justify-between">
        {" "}
        <input
          className="w-80 mt-4 rounded-md border border-blue-700 p-4"
          type="number"
          value={amount}
          placeholder="$"
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="w-80 p-4 border border-blue-700 rounded-md"
        >
          {Object.keys(currencies).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="w-80 p-4 border border-blue-700 rounded-md"
        >
          {Object.keys(currencies).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <h2 className=" mt-4 text-2xl text-gray-400">
        {" "}
        Natija: {convertedAmount} {toCurrency}
      </h2>
    </div>
  );
};

export default Convertor;
