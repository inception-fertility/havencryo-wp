import React from "react";
import { HamburgerButton } from "./Hamburger.styles";
import HamburgerIcon from '../../images/menu.png'

const Hamburger = ({ handleOverlayMenu }) => (
  <HamburgerButton onClick={handleOverlayMenu}>
    <img src={HamburgerIcon} alt="menu-hamburger" />
  </HamburgerButton>
)

export default Hamburger