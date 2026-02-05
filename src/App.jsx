import React, { useState } from 'react';
import ControlPanel from './components/ControlPanel';
import Receipt from './components/Receipt';
import './App.css';

function App() {
  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getFullYear()).slice(-2)}`;
  const formattedTime = today.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

  const [data, setData] = useState({
    date: formattedDate,
    time: formattedTime,
    amount: '25.00',
    receiptNo: `R102282 ${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(100000 + Math.random() * 900000)}`,
    serialNo: `${formattedDate.split('/').reverse().join('').slice(-6)}-1`
  });



  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app-container">
      <header className="app-header no-print">
        <h1>Temple Receipt Generator</h1>
      </header>

      <main className="main-content">
        <div className="left-pane no-print">
          <ControlPanel
            data={data}
            setData={setData}
            onPrint={handlePrint}
          />
        </div>

        <div className="right-pane">
          <Receipt data={data} />
        </div>
      </main>

      <footer className="app-footer no-print">
        <p>Built for Arulmigu Subramaniyaswamy Temple, Chennimalai</p>
      </footer>
    </div>
  );
}

export default App;
