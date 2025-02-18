import { FaSun, FaMoon } from "react-icons/fa";
import "./App.css"; // Make sure you have this CSS file

export default function LightDarkSwitch(props: any) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={!props.lightMode}
        onChange={() => props.setLightMode(!props.lightMode)}
      />
      <span className="slider round">
        <FaSun className="icon sun" />
        <FaMoon className="icon moon" />
      </span>
    </label>
  );
}
