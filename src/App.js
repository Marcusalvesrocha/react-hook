import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const evenFn = () => {
  console.log('h2 clicado');
};

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

  // componentDidUpdate - executa toda vez que o component atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // componentDidMount - executa 1x
  useEffect(() => {
    //console.log('componentDidMount');
    document.querySelector('h2')?.addEventListener('click', evenFn);

    //componetWillUmount - Limpeza
    return () => {
      console.log('componetWillMount');
      document.querySelector('h2')?.removeEventListener('click', evenFn);
    };
  }, []);

  // com dependencia
  useEffect(() => {
    console.log('contador mudou para ', counter);
  }, [counter]);

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
