import React from 'react';
import QRBlock from './QRBlock';
import muruganImg from '../assets/murugan.jpg';

const PDFReceipt = ({ data }) => {
    const { amount, receiptNo, date, time, serialNo } = data;
    const qrData = `${receiptNo}|${date}|${time}|${amount}|Chennimalai`;

    const formatLine = (label, value) => {
        const padding = 22 - label.length;
        const spaces = " ".repeat(padding > 0 ? padding : 1);
        return `${label}${spaces}:  ${value}`;
    };

    return (
        <div id="pdf-page-content" className="pdf-page">
            <div className="pdf-receipt">
                {/* Top Row: Logo and QR Code */}
                <div className="pdf-top-row">
                    <div className="pdf-logo">
                        <img src={muruganImg} alt="Murugan" />
                    </div>
                    <div className="pdf-qr">
                        <QRBlock value={qrData} />
                    </div>
                </div>

                <div className="pdf-header">
                    <h2 className="temple-name">Arulmigu Subramaniyaswamy Temple,</h2>
                    <h2 className="temple-name">Malaikoil.</h2>
                    <p className="location-line">Chennimalai [TM010228]</p>
                </div>

                <div className="pdf-service-line">
                    <p>special entrance Rs. {Math.floor(amount)}</p>
                </div>

                <div className="pdf-details">
                    <p>{formatLine("Receipt No.", receiptNo)}</p>
                    <p>{formatLine("Receipt Date", `${date} ${time}`)}</p>
                    <p className="serial-row">
                        <span className="label">Serial No.</span>
                        <span className="colon">: </span>
                        <span className="serial-value">{serialNo}</span>
                    </p>
                </div>

                <div className="pdf-amount-section">
                    <h1 className="large-amount">Rs. {parseFloat(amount).toFixed(2)}</h1>
                </div>

                <div className="pdf-footer">
                    <p className="username-line">User Name (ID): MURUGA MURUGA [unit]</p>
                    <p className="tamil-text">செ.அ.நிலை - I</p>
                    <p className="tollfree">Tollfree No. 1800 425 1757</p>
                </div>
            </div>
        </div>
    );
};

export default PDFReceipt;
