import React, {useState} from 'react';
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

    Object.keys(notes).reverse().forEach(note => {
      let noteNumber = Number(note);
      if ((tempExchangeAmount >= noteNumber) && Math.floor(tempExchangeAmount/noteNumber)>0) {
        tempNotes[noteNumber] = Math.floor(tempExchangeAmount/noteNumber);
        tempExchangeAmount = tempExchangeAmount - Math.floor(tempExchangeAmount/noteNumber)*noteNumber;
      } 
    })
    setNotes(tempNotes);
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
