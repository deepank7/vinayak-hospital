import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  padding: 20px;
  margin-bottom: 20px;
`;

const ICUContent = styled.div`
  padding: 20px;
`;

const ICUSection = styled.section`
  margin-bottom: 20px;
`;

const ICUTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ICUParagraph = styled.p`
  font-size: 16px;
  color: #666;
`;

const ICUSectionComponent = () => {
  return (
    <SectionWrapper>
      <h2>Intensive Care Unit (ICU)</h2>
      <ICUContent>
        <ICUSection>
          <ICUTitle>Bed Availability</ICUTitle>
          <ICUParagraph>6 beds available</ICUParagraph>
        </ICUSection>
        <ICUSection>
          <ICUTitle>ICU Team</ICUTitle>
          <ICUParagraph>
            Dr. Sanjay Sharma
            <br />
            Dr Rajendra Tanwar
            <br />
            Dr Satyam gupta
            <br />
            Dr BK Garg
            <br />
            Dr Dharmender Pal Singh
          </ICUParagraph>
        </ICUSection>
        <ICUSection>
          <ICUTitle>ICU Services</ICUTitle>
          <ICUParagraph>
            Ventilator support
            <br />
            BIPAP support
            <br />
            Cardiac monitoring
            <br />
            Invasive and non invasive monitoring
            <br />
            Neonatal care
          </ICUParagraph>
        </ICUSection>
      </ICUContent>
    </SectionWrapper>
  );
};

export default ICUSectionComponent;
