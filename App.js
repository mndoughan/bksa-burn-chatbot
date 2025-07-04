import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const res = await fetch(process.env.REACT_APP_SHEET_API_URL + '?q=' + encodeURIComponent(input));
    const data = await res.text();
    setResponse(data);
  };

  return (
    <div style={{ padding: 24, fontFamily: 'Arial' }}>
      <h1>🍔 BKSA Burn Assistant</h1>
      <input
        style={{ width: '80%', padding: 10, fontSize: 16 }}
        type="text"
        placeholder="I had a Whopper and fries"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit} style={{ marginLeft: 10, padding: '10px 20px', fontSize: 16 }}>
        Submit
      </button>
      <p style={{ marginTop: 20 }}>{response}</p>
    </div>
  );
}

export default App;
