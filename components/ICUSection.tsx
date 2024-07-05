import React from 'react';
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
          <ICUParagraph>10 beds available</ICUParagraph>
        </ICUSection>
        <ICUSection>
          <ICUTitle>ICU Team</ICUTitle>
          <ICUParagraph>
            Dr. Sanjay Sharma, ICU Head
            <br />
            Dr. ......
            <br />
            ... (list of ICU team members)
          </ICUParagraph>
        </ICUSection>
        <ICUSection>
          <ICUTitle>ICU Services</ICUTitle>
          <ICUParagraph>
            Ventilator support
            <br />
            Dialysis
            <br />
            Cardiac monitoring
            <br />
            ... (list of ICU services)
          </ICUParagraph>
        </ICUSection>
        <ICUSection>
          <ICUTitle>Visiting Hours and Guidelines</ICUTitle>
          <ICUParagraph>
            Visiting hours: 10am - 8pm
            <br />
            Only 2 visitors allowed at a time
            <br />
            ... (list of visiting hours and guidelines)
          </ICUParagraph>
        </ICUSection>
        <ICUSection>
          <ICUTitle>ICU FAQs</ICUTitle>
          <ICUParagraph>
            Q: What is the ICU?
            <br />
            A: The ICU is a specialized unit for critically ill patients.
            <br />
            ... (list of FAQs)
          </ICUParagraph>
        </ICUSection>
      </ICUContent>
    </SectionWrapper>
  );
};

export default ICUSectionComponent;