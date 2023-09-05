import "./Header.css";
import PhotoFrame from "@components/PhotoFrame/PhotoFrame";
import { isMobile } from "react-device-detect";

export default function Header() {
  return (
    <div className={`Header ${isMobile ? "HeaderMobile" : ""}`}>
      <div className="NameWrapper"></div>
      <PhotoFrame />
    </div>
  );
}
