import React from "react";
import { Box } from "@chakra-ui/react";
import navcss from "./navbar.module.css";
import "./navbargloble.css";
import { useState } from "react";
import Category from "./Category";
import KimayeLogo from "./KimayeLogo";
import { FaBars, FaTimes } from "react-icons/fa";
import './navbargloble.css'
import RightNav from "./RightNav";

const Navbar = () => {
  const [fix, setFix] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  let menu = <FaBars size="2rem" />;
  let cross = <FaTimes size="2rem" />;

  function setFixed() {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  return (
    <div className="big_box">
      <Box className={navcss.box} w="100%" p={2} color="white">
        Delivery in Mumbai, Delhi and Gurgaon | Same day delivery!
      </Box>

      <div className={fix ? "inner_box fixed-top" : "inner_box"}>
        <Box
          w="100%"
          p={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="80px"
        >
          <Box w="30%" p={4} color="red">
            <Category />
          </Box>


          <Box w="20%" p={4} display="flex" justifyContent="center">
            <KimayeLogo />
          </Box>

          <div className="menu" onClick={handleClick}>
            {click ? cross : menu}
          </div>

          <Box w="50%" p={4} display="flex" justifyContent="center">
            <RightNav />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Navbar;