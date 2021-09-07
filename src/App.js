import React, {useState, useRef} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Cash Register Manager</h1>
      <p>Enter the bill amount and cash given by the customer and know minimum number of notes to return.</p>
      <div className="calculation-section">
        <div className="bill-amount">
          <label htmlFor="billAmount">Bill Amount:</label>
          <br />
          <input type="number" id="billAmount" className="input-box"/>
        </div>
        <div className="cash-given">
          <label htmlFor="cashGiven">Cash Given:</label>
          <br />
          <input type="number" id="cashGiven" className="input-box"/>
        </div>
        <div>
          <button className="btn-check">Check</button>
        </div>
        <h3></h3>
        <h3>Exchange Amount: </h3>
        <h2>Return Exchange</h2>
        <div className="exchange-table">
          <table>
            <tr>
              <th>No of notes</th>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <th>Note</th>
              <td>2000</td>
              <td>500</td>
              <td>100</td>
              <td>20</td>
              <td>10</td>
              <td>5</td>
              <td>1</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
