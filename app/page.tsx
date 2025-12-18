'use client';

import { useEffect, useState } from 'react';

import ButtonNumber from "./components/ButtonNumber";
import ButtonFuncMath from "./components/ButtonFuncMath";
import ButtonFuncEqual from "./components/ButtonFuncEqual";



export default function App() {

  const [history, setHistory] = useState('');
  const [result, setResult] = useState('');
  const [conTime, setConTime] = useState('');

  function acClick() {
     setResult('');
     setHistory('');
  }

  useEffect(() => {
    fetch('https://aisenseapi.com/services/v1/datetime', {method : 'GET'})
      .then(res => res.json())
      .then(data => {
        setConTime(data.datetime);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <main className="app">
      <section className="calculator" aria-label="connect time">
        &nbsp;&nbsp;&nbsp;&nbsp;fetch api call, connect time : 
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;{conTime}
      </section>
      <br/>
      <section className="calculator" aria-label="계산기">
        <header className="calc-header">
          <div className="brand">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="title">Practice Calculator</span>
          </div>

          <div className="display" role="status" aria-live="polite">
            <div className="display__expression">{history}</div>
            <div className="display__value">{result}</div>
          </div>
        </header>

        <section className="keypad" aria-label="키패드">
          
          <button className="key key--util" type="button" onClick={acClick}>AC</button>
          <button className="key key--util" type="button">±</button>
          <button className="key key--util" type="button">%</button>
          <ButtonFuncMath mathType={"÷"} result={result} history={history} setHistory={setHistory} setResult={setResult}/>

          
          <ButtonNumber number={7} result={result} history={history} setHistory={setHistory} setResult={setResult}/>
          <ButtonNumber number={8} result={result} history={history} setHistory={setHistory} setResult={setResult}/>
          <ButtonNumber number={9} result={result} history={history} setHistory={setHistory} setResult={setResult}/>
          <ButtonFuncMath mathType={"x"} result={result} history={history} setHistory={setHistory} setResult={setResult}/>

          
          <ButtonNumber number={4} result={result} history={history} setHistory={setHistory} setResult={setResult}/>
          <ButtonNumber number={5} result={result} history={history} setHistory={setHistory} setResult={setResult}/>
          <ButtonNumber number={6} result={result} history={history} setHistory={setHistory} setResult={setResult}/>
          <ButtonFuncMath mathType={"-"} result={result} history={history} setHistory={setHistory} setResult={setResult}/>


          <ButtonNumber number={1} result={result} history={history} setHistory={setHistory} setResult={setResult}/>
          <ButtonNumber number={2} result={result} history={history} setHistory={setHistory} setResult={setResult}/>
          <ButtonNumber number={3} result={result} history={history} setHistory={setHistory} setResult={setResult}/>
          <ButtonFuncMath mathType={"+"} result={result} history={history} setHistory={setHistory} setResult={setResult}/>

          <ButtonNumber number={0} result={result} history={history} setHistory={setHistory} setResult={setResult}/>
          <button className="key" type="button">.</button>
          <ButtonFuncEqual result={result} history={history} setHistory={setHistory} setResult={setResult}/>
        </section>

      </section>
    </main>
  );
}
