"use client";

import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const MainContainer = styled.main`
  padding: 1rem;
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <MainContainer>{children}</MainContainer>
    </>
  );
};

export default Layout;
