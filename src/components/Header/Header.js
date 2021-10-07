import React from "react";
import { Link } from 'gatsby';
import Navigation from "../Navigation/Navigation";
import Logo from '../../images/HavenCryo Logo Mark RGB.svg';
import { Wrapper, Content } from "./Header.styles";
import { useMenuQuery } from "../../hooks/useMenuQuery";

const Header = () => {
  const { site, wpMenu } = useMenuQuery();
  console.log(wpMenu);

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <img src={Logo} />
        </Link>
        <Navigation menu={wpMenu.menuItems.nodes} />
      </Content>
    </Wrapper>
  )
}

export default Header;