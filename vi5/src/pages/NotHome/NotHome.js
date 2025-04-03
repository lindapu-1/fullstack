import { useState, useEffect } from 'react';

const NotHome = () => {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Reset counter if negative
    if (count < 0) {
      setCount(0);
    }
    
    // Toggle 5+ message
    setShowMessage(count > 5);
  }, [count]);

  return (
    <div className="page-container">
      <h1 align="center">Not Home Page</h1>
      <div className="counter-wrapper" align="center">
        <h2 className="count-display">Counter: {count}</h2>
        {showMessage && (
          <h3 className="message">You passed 5!</h3>
        )}
        <button onClick={() => setCount(c => c - 1)}>Decrease</button>
        
        <button onClick={() => setCount(c => c + 1)}>Increase</button>
        

      </div>
    </div>
  );
};

export default NotHome;
