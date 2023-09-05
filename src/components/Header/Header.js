import "./Header.css";
import PhotoFrame from "@components/PhotoFrame/PhotoFrame";
import { BrowserView, MobileView } from "react-device-detect";

export default function Header() {
  return (
    <div className="Header">
      <BrowserView>
        <div className="NameWrapper NameWrapperBrowser">
          <span className="NameBrowser">Saranchuk Viktor</span>
          <br />
          <span class="TitleBrowser">Salesforce Developer</span>
        </div>
      </BrowserView>
      <MobileView>
        <div className="NameWrapper NameWrapperMobile">
          <span className="NameMobile">Saranchuk Viktor</span>
          <br />
          <span class="TitleMobile">Salesforce Developer</span>
        </div>
      </MobileView>
      <PhotoFrame />
    </div>
  );
}
