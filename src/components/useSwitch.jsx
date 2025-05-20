import { useState, useEffect } from "react";

export default function useSwitch() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    if (isOn === false) {
      setIsOn(true);
    } else if (isOn === true) {
      setIsOn(false);
    }
  };

  return [isOn, toggle];
}
