import React, { useEffect, useState } from 'react';
import Data from './data/data'

const backChange= () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
for (let i=0; i<6;i++) {
  color += letters[Math.floor(Math.random()* 16)];
}
return color;
};

function App() {
  const [quote, setQuote] = useState({ text: '', author: '' });
  const [bgColor, setBgColor] = useState(backChange());
  const fetchNewQuote = () => {
    const quotes = typeof Data ==='function' ? Data() : Data;
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
    document.body.style.backgroundColor = backChange();
  };

  useEffect(() => {
    fetchNewQuote();
  }, []);

  return (
    <div id="quote-box" className="text-center">
      <div id="text">"{quote.text}"</div>
      <div id="author">- {quote.author}</div>
      <button id="new-quote" className="btn btn-primary" onClick={fetchNewQuote}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        className="btn btn-info"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote.text} - ${quote.author}`)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
    </div>
  );
}

export default App;
