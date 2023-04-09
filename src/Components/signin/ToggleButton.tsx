import { useState } from "react";
import { IoIosRadioButtonOn } from "react-icons/io";
import { IoIosRadioButtonOff } from "react-icons/io";

interface props {
  onClick: () => void;
}

function ToggleButton({ onClick }: props) {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    status === true ? setStatus(false) : setStatus(true);
    onClick();
  };
  if (status)
    return (
      <div>
        <IoIosRadioButtonOn color="#0d6efd" size={50} onClick={toggle} />
      </div>
    );
  return (
    <div>
      <IoIosRadioButtonOff size={50} onClick={toggle} />
    </div>
  );
}

export default ToggleButton;