function QuoteBox() {
    return (
      <div id="quote-box">
        <div id="text">{quote.text}</div>
        <div id="author">{quote.author}</div>
        <button id="new-quote" onClick={fetchNewQuote}>New Quote</button>
        <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`} target="_blank">
            Tweet Quote
            </a>

      </div>
    );
  }
  