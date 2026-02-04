import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRBlock = ({ value }) => {
  return (
    <div className="qr-container">
      <div className="qr-border">
        <QRCodeCanvas 
          value={value} 
          size={50} 
          level="L"
          includeMargin={false}
        />
      </div>
    </div>
  );
};

export default QRBlock;
