import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : 'App-logo';

  const handleClick = () => {
    setReverse((reverse) => !reverse);
  };

  const handleSetCounter = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={reverseClass} alt="logo" />
        <h2 onClick={handleSetCounter}>Contador: {counter}</h2>

        <button onClick={handleClick}>Change Rotation</button>
      </header>
    </div>
  );
}

export default App;
