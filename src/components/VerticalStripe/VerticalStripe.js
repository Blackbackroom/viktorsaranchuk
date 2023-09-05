import "@components/Header/Header.css";
import "./VerticalStripe.css";
import { isMobile } from "react-device-detect";
import { useState } from "react";

export default function VerticalStripe() {
  const [isActive, setActive] = useState(true);

  function ontouchstart() {
    setActive(!isActive);
  }

  return (
    <div
      className={`VerticalStripe ${isMobile ? "VerticalStripeMobile" : ""} ${
        isActive ? "" : "collapsed"
      }`}
    >
      <div className="VerticalStripeLocker" onTouchStart={ontouchstart}></div>
    </div>
  );
}
