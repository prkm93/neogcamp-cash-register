import React, {useState, useRef} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Cash Register</h1>
      <p>Enter the bill amount and cash given by the customer and know minimum number of notes to return.</p>
      <div className="calculation-section">
        <div className="bill-amount">
          <label htmlFor="billAmount">Bill Amount:</label>
          <br />
          <input type="number" id="billAmount"/>
        </div>
        <div className="cash-given">
          <label htmlFor="cashGiven">Cash Given:</label>
          <br />
          <input type="number" id="cashGiven"/>
        </div>
        <div>
          <button>Check</button>
        </div>
        <h3></h3>
        <h2>Exchange Amount: </h2>
        <h1>Return Exchange</h1>
        <div className="return-exchange-table">
          <table>
            <tr>
              <th>No of notes</th>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
            </tr>
            <tr>
              <th>Note</th>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
              <td>123</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
