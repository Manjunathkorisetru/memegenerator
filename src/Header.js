import React from "react";
import Trollface from "./Images/Trollface.png";

function Header() {
  return (
    <div>
      <header>
        <img src={Trollface} alt="Problem?" />

        <p>Meme Generator</p>
      </header>
    </div>
  );
}

export default Header;
