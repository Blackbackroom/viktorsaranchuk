import "./PhotoFrame.css";
import { isMobile } from "react-device-detect";

export default function PhotoFrame() {
  return (
    <div className={`PhotoFrame ${isMobile ? "PhotoFrameMobile" : ""}`}></div>
  );
}
