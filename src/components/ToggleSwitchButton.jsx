import { useState } from 'react';
import { IoIosSwitch } from "react-icons/io";
import "../index.css";

const ToggleSwitchButton = () => {
    const [value, setValue] = useState("ON");

    const handleClick = () => {
        value == "ON" ? setValue("OFF") : setValue("ON");
    }

  return (
    <div className='container'>
      <div className="title">Toggle Switch Button <IoIosSwitch className="IOS-icon"/></div>
        <button className={`toggle-${value}`} onClick={handleClick}>
          <div>
            <span>
              {value}
            </span>
          </div>
        </button>
    </div>
  )
}

export default ToggleSwitchButton