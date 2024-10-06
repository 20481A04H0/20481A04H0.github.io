import React from "react";
import { QRCodeCanvas } from "qrcode.react"; // or QRCodeSVG based on your choice

const QRCodeGenerator = ({ url }) => {
  return (
    <div>
      <h2>Scan to Join the Game</h2>
      <QRCodeCanvas value={url} />
    </div>
  );
};

export default QRCodeGenerator;
