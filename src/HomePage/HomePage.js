import "./HomePage";

export default function HomPage({ version }) {
  console.log(`The version is: ${version}`);

  if (version === "0.0.1") {
    return <div className="HomePage"></div>;
  } else {
    throw new Error("Not implemented");
  }
}
