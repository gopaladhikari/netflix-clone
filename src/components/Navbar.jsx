import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 100) setHandleShow(true);
      else setHandleShow(false);
    };
  }, [handleShow]);

  return (
    <header className={`navbar ${handleShow && " nav_black"} `}>
      <nav>
        <img src="/logo.png" className="logo" alt="logo" />
      </nav>
    </header>
  );
}

export default Navbar;
