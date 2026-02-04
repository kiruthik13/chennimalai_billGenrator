import React, { useEffect } from 'react';
import QRBlock from './QRBlock';
import muruganImg from '../assets/murugan.jpg';

const Receipt = ({ data }) => {
    const { date, time, amount, receiptNo, serialNo } = data;

    useEffect(() => {
        const receipt = document.getElementById('printable-receipt');
        if (receipt) {
            receipt.style.setProperty('--jitter', (Math.random() * 2 - 1).toFixed(2));
        }
    }, [data]);

    const qrData = `${receiptNo}|${date}|${time}|${amount}|Chennimalai`;

    const formatLine = (label, value) => {
        const padding = 18 - label.length;
        const spaces = " ".repeat(padding > 0 ? padding : 1);
        return `${label}${spaces}: ${value}`;
    };

    return (
        <div className="receipt-container" id="printable-receipt">
            <div className="god-image-container">
                <img src={muruganImg} alt="Murugan" className="god-image" />
            </div>

            <div className="header-qr">
                <QRBlock value={qrData} />
            </div>

            <div className="receipt-content">
                <div className="receipt-header">
                    <div className="header-text">
                        <p>Arulmigu Subramaniyaswamy Temple, Malaikoil.</p>
                        <p>Chennimalai [TM010228]</p>
                    </div>
                </div>

                <div className="service-line">
                    <p>special entrance Rs. {amount}</p>
                </div>

                <div className="details-section">
                    <p>{formatLine("Receipt No.", receiptNo)}</p>
                    <p>&nbsp;</p>
                    <p>{formatLine("Receipt Date", `${date} ${time}`)}</p>
                    <p>&nbsp;</p>
                    <p>
                        {"Serial No."}
                        {" ".repeat(18 - "Serial No.".length)}
                        {": "}
                        <span className="bold-value">{serialNo}</span>
                    </p>
                </div>

                <div className="amount-section">
                    <p className="amount-text">Rs. {parseFloat(amount).toFixed(2)}</p>
                </div>

                <div className="footer-section">
                    <p className="username-line">User Name (ID): MURUGA MURUGA [unit]</p>
                    <p className="tamil-text">செ.அ.நிலை-I</p>
                    <p className="tollfree">Tollfree No. 1800 425 1757</p>
                </div>
            </div>
        </div>
    );
};

export default Receipt;
