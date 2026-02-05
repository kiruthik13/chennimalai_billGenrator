import React from 'react';

const ControlPanel = ({ data, setData, onPrint }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const generateRandom = () => {
        const randomReceipt = 'R' + Math.floor(100000 + Math.random() * 900000) + ' ' + Math.floor(1000 + Math.random() * 9000) + ' ' + Math.floor(100000 + Math.random() * 900000);

        const today = new Date();
        const yy = String(today.getFullYear()).slice(-2);
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const datePart = `${yy}${mm}${dd}`;
        const randomDigit = Math.floor(Math.random() * 10);
        const randomSerial = `${datePart}-${randomDigit}`;

        setData(prev => ({
            ...prev,
            receiptNo: randomReceipt,
            serialNo: randomSerial
        }));
    };

    return (
        <div className="control-panel">
            <h2>Control Panel</h2>
            <div className="input-group">
                <label>Date (DD/MM/YY)</label>
                <input type="text" name="date" value={data.date} onChange={handleChange} />
            </div>
            <div className="input-group">
                <label>Time (HH:MM AM/PM)</label>
                <input type="text" name="time" value={data.time} onChange={handleChange} />
            </div>
            <div className="input-group">
                <label>Amount (₹)</label>
                <input type="number" name="amount" value={data.amount} onChange={handleChange} />
            </div>
            <div className="input-group">
                <label>Receipt Number</label>
                <input type="text" name="receiptNo" value={data.receiptNo} onChange={handleChange} />
            </div>
            <div className="input-group">
                <label>Serial Number</label>
                <input type="text" name="serialNo" value={data.serialNo} onChange={handleChange} />
            </div>

            <div className="button-group">
                <button onClick={generateRandom} className="btn-generate">Generate Random Details</button>
                <button onClick={onPrint} className="btn-print">Print Receipt</button>
            </div>
        </div>
    );
};

export default ControlPanel;
