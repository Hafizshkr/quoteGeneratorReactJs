import { useState } from "react";

function Quotes() {
  const url = "https://type.fit/api/quotes";
  const [quote, setQuotes] = useState({
    "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "Thomas Edison, type.fit"
  });

  let quotes = [];

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      quotes = data;
    } catch (err) {
      throw new err();
    }
  };

  fetchData();

  function randomQuote() {
    const selectQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuotes(selectQuote);
  }

  return (
    <>
      <div className="container-text">
        <p>{quote.text}</p>
        <span>{quote.author && quote.author.split(",")[0]}</span>
      </div>
      <button
        className="btnQuote"
        onClick={() => {
          randomQuote();
        }}
      >
        Random Quote
      </button>
    </>
  );
}

export default Quotes;
