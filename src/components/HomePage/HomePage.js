import "./HomePage.css";
import "@components/Header/Header.css";
import { Header, VerticalStripe } from "@components";

export default function HomPage({ version }) {
  console.log(`The version is: ${version}`);

  if (version === "0.0.1") {
    return (
      <div className="HomePage">
        <Header />
        <VerticalStripe />
      </div>
    );
  } else {
    throw new Error("Not implemented");
  }
}
