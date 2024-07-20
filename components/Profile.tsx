import Link from "next/link";
import * as React from "react";
import styled, { css } from "styled-components";

interface ProfileProps {
  // Add any props you want to pass to the Profile component
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;
const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Image = styled.img`
  width: 500px;
  height: 350px;
  border-radius: 20px;
  @media (max-width: 768px) {
    width: 380px;
    height: 260px;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 0px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Qualifications = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
`;
const SubTitle = styled.div`
  margin: 10px;
`;
const Qualification = styled.span`
  background-color: #eee;
  padding: 5px 10px;
  border-radius: 5px;
`;
const ViewProfileButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const degress = ["MBBS", "MD"];
const Profile: React.FC<ProfileProps> = () => {
  return (
    <Container>
      <Image src="/hospital2.jpeg" alt="Profile Picture" />
      <ProfileContent>
        <Title>Dr. Sanjay Sharma</Title>
        <SubTitle>Consultant Anaesthesia and Intensive care unit</SubTitle>
        <Qualifications>
          {degress.map((qualification) => (
            <Qualification key={qualification}>{qualification}</Qualification>
          ))}
        </Qualifications>
        <Text>
          We aim to deliver Good Quality care to every patient at an affordable
          cost through Comprehensive Integrated clinical practices, medical
          Innovation, and lifelong learning. We are dedicated to meet the needs
          of our patient, staff, and nation.
        </Text>
        <Text>
          Join us in our Journey as we shape Healthcare for a better tomorrow.
        </Text>
        <Link href={`/profile/15`}>
        <ViewProfileButton>View Profile</ViewProfileButton>
        </Link>
      </ProfileContent>
    </Container>
  );
};

export default Profile;
