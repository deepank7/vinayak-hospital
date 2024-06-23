"use client";

import React from "react";
import Layout from "../components/Layout";
import ImageCarousel from "../components/Carousel";
import Services from "@/components/Services";
import Profile from "@/components/Profile";
import styled from "styled-components";
import Team from "@/components/Team";

const CallUsButton = styled.button`
  border-radius: 25px;
  padding: 10px 10px;
  font-size: 12px;
  margin: 20px;
  cursor: pointer;
  font-family: "Poppins";
  text-transform: uppercase;
  font-weight: 700;
  background: transparent;
  border: 1px solid black;
  transition: all 300ms ease;
  @media (max-width: 768px) {
    margin-left: 25%;
    margin-bottom: 5px;
    width: 50%;
  }
`;
const CallUsButtonLink = styled.a`
  text-decoration: none;
  color: black;
`;

const TitleContainer = styled.div`
  display: flex;
  max-width: 650px;
  margin: 20px auto;
  text-align: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomePage: React.FC = () => {
  return (
    <Layout>
      <TitleContainer>
        <TextWrapper>
          <span className="header-title">Your trusted Hospital</span>
          <span className="header-subtitle">Where healing meets humanity.</span>
        </TextWrapper>
        <CallUsButton>
          <CallUsButtonLink href="tel:+919352156228" className="call-us">
            CALL US 9352156228
          </CallUsButtonLink>
        </CallUsButton>
        <CallUsButton>
          <CallUsButtonLink href="tel:+919352156226" className="call-us">
            CALL US 9352156226
          </CallUsButtonLink>
        </CallUsButton>
      </TitleContainer>
      <ImageCarousel />
      <Services />
      <Profile />
      <Team />
    </Layout>
  );
};

export default HomePage;
