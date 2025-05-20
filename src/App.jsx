import useSwitch from "./components/useSwitch";
import useDate from "./components/useDate";
import useCustomPointer from "./components/useCustomPointer";

import sharingan from './assets/cursorSharingan.png';

// import image from "assets/cursorSharingan.png";

export default function App() {
  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();
  const customPointer = useCustomPointer(<img src={sharingan} style={{width: "32px" ,height: "auto" }}/>);

  return (
    <>
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>
      <div>
        <h1>Data e ora attuali:</h1>
        <p>{currentDate.toLocaleString()}</p>
      </div>

      <div>
        <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
        {customPointer}
      </div>
    </>
  );
}
