import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5001'}/api/quote`);
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote('Failed to fetch quote. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quote of the Day</h1>
        <div className="quote-container">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <p className="quote-text">{quote}</p>
              <button className="new-quote-btn" onClick={fetchQuote}>
                Get New Quote
              </button>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
