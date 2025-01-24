import React, { useState } from 'react';
import "../index.css";

const ToggleSwitchButton = () => {
    const [value, setValue] = useState("ON");

    const handleClick = () => {
        value == "ON" ? setValue("OFF") : setValue("ON");
    }

  return (
    <div>
        <button className={`toggle-${value}`} onClick={handleClick}><span>{value}</span></button>
    </div>
  )
}

export default ToggleSwitchButton