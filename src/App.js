import P from 'prop-types';
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useCallback, useMemo } from 'react';

// eslint-disable-next-line react/prop-types
const Button = ({ incrementButton }) => {
  console.log('filho redenrizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
};

Button.propsTypes = {
  incrementButton: P.func,
};

const evenFn = () => {
  console.log('h2 clicado');
};

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : 'App-logo';

  const incrementCounter = useCallback((num) => {
    setCounter((counter) => counter + num);
  }, []);

  const handleClick = () => {
    setReverse((reverse) => !reverse);
  };

  const handleSetCounter = () => {
    setCounter((counter) => counter + 1);
  };

  // componentDidUpdate - executa toda vez que o component atualiza
  useEffect(() => {});

  // componentDidMount - executa 1x
  useEffect(() => {
    document.querySelector('h2')?.addEventListener('click', evenFn);

    //componetWillUmount - Limpeza
    return () => {
      document.querySelector('h2')?.removeEventListener('click', evenFn);
    };
  }, []);
  console.log('Pai redenrizou');

  // com dependencia
  useEffect(() => {
    console.log('contador mudou para ', counter);
  }, [counter]);

  const btn = useMemo(() => {
    return <Button incrementButton={incrementCounter} />;
  }, [incrementCounter]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={reverseClass} alt="logo" />
        <h2 onClick={handleSetCounter}>Contador: {counter}</h2>

        <button onClick={handleClick}>Change Rotation</button>
        {btn}
      </header>
    </div>
  );
}

export default App;
