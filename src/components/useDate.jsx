import { useState, useEffect } from "react";

export default function useDate() {
  const [currentDate, setCurrentDate] = useState({});
  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
  }, [currentDate]);

  return currentDate;
}
