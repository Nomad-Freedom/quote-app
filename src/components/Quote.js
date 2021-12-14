import React from "react";

const Quote = ({ data, toggleFavorites, toggleArchives }) => {
  const { quote, quote_id, isFavorite, isArchive } = data;
  return (
    <>
      <div>{quote}</div>
      {isFavorite || isArchive || (
        <button onClick={() => toggleFavorites(quote_id)}>favorite</button>
      )}
      {isFavorite && (
        <button onClick={() => toggleFavorites(quote_id)}>unfavorite</button>
      )}
      {isArchive || isFavorite || (
        <button onClick={() => toggleArchives(quote_id)}>archive</button>
      )}
      {isArchive && (
        <button onClick={() => toggleArchives(quote_id)}>unarchive</button>
      )}
    </>
  );
};

export default Quote;
