import { useState } from "react";
import BurguerButton from "../burguer-button";
import NavMenu from "../nav-menu";
import { CustomHeader } from "./styles";

export default function Header() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <CustomHeader>
      <BurguerButton clicked={clicked} handleClick={handleClick} />
      <NavMenu clicked={clicked} handleClick={handleClick} />
      <p>Nazareno Gonzalez</p>
    </CustomHeader>
  );
}
