"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Logo = styled.img`
  @media (max-width: 768px) {
    /* Targets screens smaller than 768px (common mobile breakpoint) */
    width: 180px;
    height: 50px;
  }

  width: 260px;
  height: 55px;
  border-radius: 30px;
  background-color: wheat;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  @media (max-width: 768px) {
    /* Targets screens smaller than 768px (common mobile breakpoint) */
    margin-left: 1.5rem;
  }
`;

const NavbarContainer = styled.nav`
  background: #042e4f;
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.div`
  margin: 2rem 1rem;
  text-decoration: none;
  a:-webkit-any-link {
    text-decoration: none;
  }
`;

const NavLink = styled.a`
  @media (max-width: 768px) {
    padding: 1rem 1rem;
    margin-right: 0.5rem;
  }
  color: black;
  text-decoration: none;
  padding: 1rem 2rem;
  background-color: white;
  border-radius: 40px;
  cursor: pointer;
  &:hover {
    background-color: #444;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Link href="/" passHref>
          <Logo src="/hospitalLogo2.jpeg" alt="Logo" />
        </Link>
      </LogoContainer>
      <NavItem>
        <Link href="/contact" passHref>
          <NavLink>Contact Us</NavLink>
        </Link>
      </NavItem>
    </NavbarContainer>
  );
};

export default Navbar;
