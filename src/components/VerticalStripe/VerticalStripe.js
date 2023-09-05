import "@components/Header/Header.css";
import "./VerticalStripe.css";
import { isMobile } from "react-device-detect";
import { useState } from "react";

export default function VerticalStripe() {
  const [isActive, setActive] = useState(true);

  function ontouchstart() {
    setActive(!isActive);
  }

  const className = `VerticalStripe ${isMobile ? "VerticalStripeMobile" : ""} ${
    isActive ? "" : "collapsed"
  }`;

  return (
    <div className={className}>
      <div className="VerticalStripeLocker" onTouchStart={ontouchstart}></div>
    </div>
  );
}
