import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";

interface Doctor {
  id: number,
  name: string;
  speciality: string;
  qualifications: string[];
  image: string;
}

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

const DoctorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const DoctorCard = styled.div`
  width: 400px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
`;

const DoctorCardContent = styled.div`
  margin-left: 15px;
`;
const DoctorImage = styled.img`
  width: 50%;
  height: 220px;
  border-radius: 5px;
`;

const DoctorName = styled.h3`
  font-size: 1.2em;
  margin-bottom: 5px;
  font-weight: bold;
`;

const DoctorSpeciality = styled.p`
  margin-bottom: 10px;
`;

const Qualifications = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
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

const ViewAllButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;

const Team: React.FC = () => {
  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Karan Singh Yadav",
      speciality: "ENT Surgeon",
      qualifications: ["MBBS", "DLO", "DNB"],
      image: "/Dr-Karan-Yadav.jpeg", 
    },
    {
      id: 2,
      name: "Dr. Pravin Kumari Yadav",
      speciality: "Obstetrics and Gynaecology",
      qualifications: ["MBBS", "MS", "Medicine"],
      image: "/path/to/rahul-trehan.jpg", 
    },
    {
      id: 3,
      name: "Dr. Hemant Chaturvedi",
      speciality: "Orthopedic",
      qualifications: ["MBBS", "MS"],
      image: "/path/to/rahul-trehan.jpg", 
    },
    {
      id: 4,
      name: "Dr. Mayank Singhal",
      speciality: "General and Laparoscopic Surgery",
      qualifications: ["MBBS", "MS"],
      image: "/Dr-Mayank-Singhal.jpeg", 
    },
    {
      id: 5,
      name: "Dr. Suresh K. Gupta",
      speciality: "Eye Surgeon",
      qualifications: ["MBBS", "MS"],
      image: "/Dr-Suresh-Gupta.jpeg", 
    },
    {
      id: 6,
      name: "Dr. Mudit Mittal",
      speciality: "Pediatrics",
      qualifications: ["MBBS", "MD"],
      image: "/path/to/amodita-ahuja.jpg", 
    },
    {
      id: 7,
      name: "Dr. Gopesh Bansal",
      speciality: "Pediatrics",
      qualifications: ["MBBS", "MD"],
      image: "/path/to/sonal-gupta.jpg", 
    },
    {
      id: 8,
      name: "Dr. B.K. Garg",
      speciality: "Physician",
      qualifications: ["MBBS", "MD"],
      image: "/Dr-BK-Garg.jpeg", 
    },
    {
      id: 9,
      name: "Dr. Yogesh Taneja",
      speciality: "Urologist",
      qualifications: ["MBBS", "MS", "MCH"],
      image: "/path/to/sonal-gupta.jpg", 
    },
    {
      id: 10,
      name: "Dr. Harshita",
      speciality: "Physiotherapist",
      qualifications: ["B.P.T"],
      image: "/path/to/sonal-gupta.jpg", 
    },
    {
      id: 11,
      name: "Dr. Rajendra Tanwar",
      speciality: "Optho",
      qualifications: ["MBBS", "Family physician"],
      image: "/path/to/sonal-gupta.jpg", 
    },
    {
      id: 12,
      name: "Dr. Dhirendra",
      speciality: "Dental surgeon",
      qualifications: ["BDS"],
      image: "/path/to/sonal-gupta.jpg", 
    },
  ];

  return (
    <Container>
      <Title>Our Team Of Well-trained Experienced Doctors</Title>
      <DoctorsContainer>
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.name}>
            <DoctorImage src={doctor.image} alt={doctor.name} />
            <DoctorCardContent>
              <DoctorName>{doctor.name}</DoctorName>
              <DoctorSpeciality>{doctor.speciality}</DoctorSpeciality>
              <Qualifications>
                {doctor.qualifications.map((qualification) => (
                  <Qualification key={qualification}>
                    {qualification}
                  </Qualification>
                ))}
              </Qualifications>
              <Link href={`/profile/${doctor.id}`}>
              <ViewProfileButton>View Profile</ViewProfileButton>
              </Link>
            </DoctorCardContent>
          </DoctorCard>
        ))}
      </DoctorsContainer>
      {/* <ViewAllButton>VIEW ALL DOCTORS</ViewAllButton> */}
    </Container>
  );
};

export default Team;
