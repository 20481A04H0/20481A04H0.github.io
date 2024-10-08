import React from "react";
import { QRCodeCanvas } from "qrcode.react"; // Import QRCodeCanvas

import "../styles/QRCodeGenerator.css";

const QRCodeGenerator = ({ url }) => {
  return (
    <div className="qr-code-container">
      <h3>Scan the QR code to join the game on mobile</h3>
      <QRCodeCanvas value={url} size={150} /> {/* Generate QR code */}
    </div>
  );
};

export default QRCodeGenerator;
