export default function LightDarkSwitch(props) {
    return (<label className="switch">
      <input type="checkbox" onClick={() => props.setLightMode(!props.lightMode)} />
      <span className="slider round"></span>
    </label>);
  }