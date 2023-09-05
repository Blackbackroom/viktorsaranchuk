import "./Header.css";
import PhotoFrame from "../PhotoFrame/PhotoFrame";
import { isMobile } from "react-device-detect";

export default function Header() {
  return (
    <div className="Header">
      <div
        className={`NameWrapper ${
          isMobile ? "NameWrapperMobile" : "NameWrapperBrowser"
        }`}
      >
        <span className="Name">Saranchuk Viktor</span>
        <br />
        <span class="Title">Salesforce Developer</span>
      </div>
      <PhotoFrame />
    </div>
  );
}
