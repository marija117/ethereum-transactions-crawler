import React from 'react';
import { StyledNav, StyledUl, StyledLi, StyledLink } from "./Navbar.styles";

const Navbar: React.FC = () => {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/" className="nav-link">Transactions</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/token-amounts" className="nav-link">Token amounts</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="https://www.linkedin.com/in/marija-kuveljic-4a7553129/">Linkedn</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="https://github.com/marija117">Github</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

export default Navbar;
