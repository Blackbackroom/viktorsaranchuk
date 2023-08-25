import "./HomePage.css";
import { Header, MenuBar } from "@components";

export default function HomPage({ version }) {
  console.log(`The version is: ${version}`);

  if (version === "0.0.1") {
    const items = [{ label: "Item" }];
    return (
      <div className="HomePage">
        <Header />
        <MenuBar items={items} />
      </div>
    );
  } else {
    throw new Error("Not implemented");
  }
}
