import React, {useState, useRef} from 'react';
import './App.css';

function App() {

  const [billAmount, setBillAmount] = useState('');
  const [cashGiven, setCashGiven] = useState('');
  const [exchangeAmount, setExchangeAmount] = useState('');
  const [notes, setNotes] = useState({
    "2000": 0,
    "500": 0,
    "100": 0,
    "20": 0,
    "10": 0,
    "5": 0,
    "1": 0
  })

  const exchangeHandler = () => {
    let a = billAmount;
    let b = cashGiven;
    let diff; 
    if ((b-a) > 0) {
      diff= b - a;
      setExchangeAmount(diff);
    } else {
      setExchangeAmount("Do you wanna wash plates?");
    }

    let tempExchangeAmount = diff;
    let tempNotes = notes;
    console.log(exchangeAmount);

    if ((tempExchangeAmount >= 2000) && Math.floor(tempExchangeAmount/2000)>0) {
      tempNotes["2000"] = Math.floor(tempExchangeAmount/2000);
      console.log(tempExchangeAmount);
      tempExchangeAmount = tempExchangeAmount - Math.floor(tempExchangeAmount/2000)*2000;
    } 

    if ((tempExchangeAmount >= 500) && Math.floor(tempExchangeAmount)/500){
      tempNotes["500"] = Math.floor(tempExchangeAmount/500);
      tempExchangeAmount = tempExchangeAmount - Math.floor(tempExchangeAmount/500)*500;
    }

    if ((tempExchangeAmount >= 100) && Math.floor(tempExchangeAmount)/100){
      tempNotes["100"] = Math.floor(tempExchangeAmount/100);
      tempExchangeAmount = tempExchangeAmount - Math.floor(tempExchangeAmount/100)*100;
    }

    if ((tempExchangeAmount >= 20) && Math.floor(tempExchangeAmount)/20){
      tempNotes["20"] = Math.floor(tempExchangeAmount/20);
      tempExchangeAmount = tempExchangeAmount - Math.floor(tempExchangeAmount/20)*20;
    }

    if ((tempExchangeAmount >= 10) && Math.floor(tempExchangeAmount)/10){
      tempNotes["10"] = Math.floor(tempExchangeAmount/10);
      tempExchangeAmount = tempExchangeAmount - Math.floor(tempExchangeAmount/10)*10;
    }

    if ((tempExchangeAmount >= 5) && Math.floor(tempExchangeAmount)/5){
      tempNotes["5"] = Math.floor(tempExchangeAmount/5);
      tempExchangeAmount = tempExchangeAmount - Math.floor(tempExchangeAmount/5)*5;
    }

    if ((tempExchangeAmount >= 1) && Math.floor(tempExchangeAmount)/1){
      tempNotes["1"] = Math.floor(tempExchangeAmount/1);
      tempExchangeAmount = tempExchangeAmount - Math.floor(tempExchangeAmount/1)*1;
    }

    setNotes(tempNotes => tempNotes);
  }

  const resetHandler = () => {
    setBillAmount("");
    setCashGiven("");
    setExchangeAmount("");
    setNotes({
      "2000": 0,
      "500": 0,
      "100": 0,
      "20": 0,
      "10": 0,
      "5": 0,
      "1": 0
    });
  }

  return (
    <div className="App">
      <h1>Cash Register Manager</h1>
      <p>Enter the bill amount and cash given by the customer and know minimum number of notes to return.</p>
      <div className="calculation-section">
        <div className="bill-amount">
          <label htmlFor="billAmount">Bill Amount:</label>
          <br />
          <input 
            type="number" 
            id="billAmount" 
            className="input-box"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
          />
        </div>
        <div className="cash-given">
          <label htmlFor="cashGiven">Cash Given:</label>
          <br />
          <input 
            type="number" 
            id="cashGiven" 
            className="input-box"
            value={cashGiven}
            onChange={(e) => setCashGiven(e.target.value)}
          />
        </div>
        <div>
          <button className="btn-check" onClick={exchangeHandler}>Check</button>
          <button className="btn-check" onClick={resetHandler}>Clear</button>
        </div>
        <h3></h3>
        <h3>Exchange Amount: {exchangeAmount}</h3>
        <h2>Return Exchange</h2>
        <div className="exchange-table">
          <table>
            <tr>
              <th>No of notes</th>
              {
                Object.values(notes).reverse().map((note, i) => {
                  return <td key={i}>{note}</td>
                })
              }
            </tr>
            <tr>
              <th>Note</th>
              {
                Object.keys(notes).sort((a,b) => b-a).map((note, i) => {
                  return <td key={i}>{note}</td>
                })
              }
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
