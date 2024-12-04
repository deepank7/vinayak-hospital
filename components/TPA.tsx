import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  font-weight: bold;
`;

const TPAListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const TPAItem = styled.div`
  background-color: #f9f9f9;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1em;
  text-align: center;
  font-weight: 500;
  min-width: 150px;
`;

const TPA: React.FC = () => {
  const tpaProviders = [
    "Aditya Birla Health Insurance",
    "Alankit Health Care Ltd",
    "Bajaj Allianz General Insurance Co. Ltd",
    "Care Health Insurance Company Ltd",
    "Cholamandalam Insurance",
    "Dedicated Healthcare services TPA (INDIA) LTD",
    "East West India TPA Pvt Ltd",
    "E-Meditek Solutions Ltd",
    "Ericson Health TPA Pvt. Ltd",
    "FHPL Insurance",
    "Future Generali India Insurance Company Ltd",
    "Genins India TPA Ltd",
    "Go Digit 1(In Progress)",
    "HDFC ERGO General Insurance Company",
    "Health India TPA Services Pvt. Ltd",
    "Heritage Health Care TPA Pvt. Ltd",
    "Heritage Health TPA Ltd",
    "ICICI Lombard",
    "IFFCO Tokio General Insurance Ltd. (In Progress)",
    "L&T General Insurance Company Ltd",
    "MD India (In Progress)",
    "Mediassit (In Progress)",
    "Medsave Health Care TPA(Pvt) Ltd",
    "Niva Bupa Health Insurance Company Limited",
    "Paramount Health Services Pvt. Ltd",
    "Park Mediclaim Consultants Pvt. Ltd",
    "Raksha TPA Pvt. Ltd",
    "Safeway",
    "SBI General Insurance Company Ltd",
    "Star Health And Allied Insurance Co. Ltd",
    "Tata AIG General Insurance Co. Ltd",
    "United India Insurance",
    "Universal Sompo General Insurance Co. Ltd"
  ];

  return (
    <Container>
      <Title>Our List of TPA Providers</Title>
      <TPAListContainer>
        {tpaProviders.map((provider, index) => (
          <TPAItem key={index}>{provider}</TPAItem>
        ))}
      </TPAListContainer>
    </Container>
  );
};

export default TPA;
