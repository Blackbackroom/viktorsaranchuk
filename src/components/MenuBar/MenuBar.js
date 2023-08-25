import "./MenuBar.css";
import { MenuItem } from "@components";

export default function MenuBar({ items }) {
  const renderedItems = items.map(({ label }) => {
    return <MenuItem label={label} />;
  });
  return <div className="MenuBar">{renderedItems}</div>;
}
