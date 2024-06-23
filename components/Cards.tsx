"use client";

import React from "react";
import styled from "styled-components";

interface CardProps {
  title: string;
  content: string;
  imageUrl?: string;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: row; /* Set flex direction to row */
  border: 1px solid #ddd; /* Add border */
  border-radius: 30px; /* Add rounded corners */
  padding: 1rem; /* Add padding */
  margin: 10px;
`;

const StyledImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;
const CardContent = styled.div`
  flex-grow: 1; 
  margin-left: 15px;
  margin-top: -20px;
`;
const CardContentParagraph = styled.p`
`;
const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
  margin-left: 0.5px
  margin-top: 0px;
`;
const Cards: React.FC<CardProps> = ({ title, content, imageUrl }) => {
  return (
    <CardContainer>
      {imageUrl && <StyledImage src={imageUrl} alt={title} />}
      <CardContent>
      <CardTitle>{title}</CardTitle>
          <CardContentParagraph>{content}</CardContentParagraph>
      </CardContent>
    </CardContainer>
  );
};

export default Cards;