import axios from "axios";
import React, { useState } from "react";
import Quote from "./Quote";

const GetQuote = () => {
  const [quotes, setQuotes] = useState([]);

  // fetch data from api and add to the state

  async function getQuote() {
    try {
      const { data } = await axios.get(
        "https://www.breakingbadapi.com/api/quote/random"
      );
      const newquote = data[0];

      setQuotes((item) => [
        ...item,
        { ...newquote, isFavorite: false, isArchive: false },
      ]);
    } catch (error) {
      console.log("error", { error });
    }
  }

  // find the quote with the id and toggle the isFavorite property and update the state

  function addQuoteTofavorites(id) {
    const updateQuote = quotes.map((quote) =>
      quote.quote_id === id
        ? { ...quote, isFavorite: !quote.isFavorite }
        : quote
    );

    setQuotes(updateQuote);
  }

  // find the quote with the id and toggle the isArchive property and update the state

  function addQuoteToArchive(id) {
    const updateQuote = quotes.map((quote) =>
      quote.quote_id === id ? { ...quote, isArchive: !quote.isArchive } : quote
    );

    setQuotes(updateQuote);
  }

  return (
    <div>
      <h2>quote generator</h2>
      <button onClick={getQuote}>Get quote</button>
      <div>
        {quotes
          .filter(
            (item) => item.isFavorite === false && item.isArchive === false
          )
          .map((item, index) => (
            <Quote
              key={index}
              data={item}
              toggleFavorites={addQuoteTofavorites}
              toggleArchives={addQuoteToArchive}
            />
          ))}
      </div>
      <hr />
      {quotes
        .filter((item) => item.isFavorite === true)
        .map((item, index) => (
          <Quote
            key={index}
            data={item}
            toggleFavorites={addQuoteTofavorites}
            toggleArchives={addQuoteToArchive}
          />
        ))}
      <hr />
      {quotes
        .filter((item) => item.isArchive === true)
        .map((item, index) => (
          <Quote
            key={index}
            data={item}
            toggleFavorites={addQuoteTofavorites}
            toggleArchives={addQuoteToArchive}
          />
        ))}
    </div>
  );
};

export default GetQuote;
