import "./Header.css";
import PhotoFrame from "@components/PhotoFrame/PhotoFrame";
import { isMobile } from "react-device-detect";

export default function Header() {
  const name = "SARARNCHUK VIKTOR";
  const title = "SALESFORCE DEVELOPER";
  return (
    <div className={`Header ${isMobile ? "HeaderMobile" : ""}`}>
      <div className={`NameSection ${isMobile ? "NameSectionMobile" : ""}`}>
        <div className="Name">{name}</div>
        <div className="Title">{title}</div>
      </div>

      <PhotoFrame />
    </div>
  );
}
