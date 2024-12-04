"use client";

import React from "react";
import Layout from "../../../components/Layout";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const DoctorCardContent = styled.div`
  margin-left: 15px;
`;

const DoctorSpeciality = styled.p``;

const DoctorCard = styled.div`
  width: 400px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
`;

const DoctorImage = styled.img`
  width: 25%;
  border-radius: 5px;
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

const DoctorBio = styled.div`
  font-family: monospace;
`;

const DoctorIndividualProfile = ({ params }: { params: { slug: string } }) => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Karan Singh Yadav",
      speciality: "ENT Surgeon",
      qualifications: ["MBBS", "DLO", "DNB"],
      image: "/Dr-Karan-Yadav.jpeg",
      bio: `MBBS from JSS MEDICAL COLLEGE, MYSORE POST GRADUATE DIPLOMA IN ENT FROM KIMS HUBLI KARNATAKA, FELLOWSHIP IN LARYNGOLOGY FROM DEENANATH MANGESHKAR HOSPITAL, PUNE DNB IN ENT AND HEAD & NECK SURGERY FROM BOMBAY HOSPITAL, MUMBAI RESIDENCY FROM ENT HOSPITAL FORT MUMBAI INTO PRIVATE PRACTICE SINCE 2012`,
    },
    {
      id: 2,
      name: "Dr. Pravin Kumari Yadav",
      speciality: "Obstetrics and Gynaecology",
      qualifications: ["MBBS", "MS", "Medicine"],
      image: "/Dr-Pravin-Kumari.jpeg",
      bio: `MBBS , MS (obs & gynaecologist)`,
    },
    {
      id: 3,
      name: "Dr. Hemant Chaturvedi",
      speciality: "Orthopedic",
      qualifications: ["MBBS", "MS"],
      image: "/Dr-Hemant.jpeg",
      bio: `MBBS SMS medical college Jaipur, DNB Orthopedics NIMS Jaipur, Formerly at Medanta Hospital Gurgaon`,
    },
    {
      id: 4,
      name: "Dr. Mayank Singhal",
      speciality: "General and Laparoscopic Surgery",
      qualifications: ["MBBS", "MS"],
      image: "/Dr-Mayank-Singhal.jpeg",
      bio: 'Mbbs Ms Fmas Fiages Fiscp, Laser and Laproscopic surgeon, Rmc 31523'
    },
    {
      id: 5,
      name: "Dr. Suresh K. Gupta",
      speciality: "Eye Surgeon",
      qualifications: ["MBBS", "MS"],
      image: "/Dr-Suresh-Gupta.jpeg",
      bio: 'PHACO SURGEON ,RMC 020079 ,LIFE MEMBER OF IMA ROS DOS AIOS ,MBBS PASSED FROM SMS MEDICAL COLLEGE JAIPUR BATCH 94, MS PASSED FROM JLN MEDICAL COLLEGE AJMER , PHACO TRAINING FROM SSG EYE INSTITUTE RAJKOT',
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
      bio: 'Echo training from Apollo Hospital Hyderabad ,Ultrasound training from IOUT  New Delhi 2002 , Life Member of API RSSDI USFMB AUSFMB IMA Rotary Club, Vice president of Rotary club of greater Bhiwadi for 3 yrs.'
    },
    {
      id: 9,
      name: "Dr. Yogesh Taneja",
      speciality: "Urologist",
      qualifications: ["MBBS", "MS", "MCH", "DNB (urology)"],
      image: "/Dr-Yogesh.jpeg",
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
      qualifications: ["MBBS", "MS"],
      image: "/path/to/sonal-gupta.jpg",
    },
    {
      id: 12,
      name: "Dr. Dhirendra",
      speciality: "Dental surgeon",
      qualifications: ["BDS"],
      image: "/path/to/sonal-gupta.jpg",
    },
    {
      id: 13,
      name: "Dr. DP Singh Tomar",
      speciality: "Surgery",
      qualifications: ["MBBS", "MD"],
      image: "/Dr-DP-Singh.jpeg", 
      bio: 'MBBS from Maulana Azad Medical College New Delhi 2000 , MS Surgery from UCMS Delhi , 6 years experience in Delhi ,ESI hospital Gurgaon 13 years'
    },
    {
      id: 14,
      name: "Dr praveen yadav ",
      speciality: "Urology",
      qualifications: ["MBBS", "MS", "MCH"],
      image: "/Dr-Praveen-Yadav.jpeg", 
    },
    {
      id: 15,
      name: "Dr. Sanjay Sharma",
      speciality: "Consultant Anaesthesia and Intensive care unit",
      qualifications: ["MBBS", "MD"],
      image: "/Dr-Sanjay-Sharma.jpeg",
      bio: 'MBBS from SMS medical college Jaipur , MD from JLN medical college Ajmer ,Senior Residency from Apollo hospital New Delhi ,Specialist in anaesthesia intensive care & pain management ,Experience of more than 25 years'
    },
  ];
  const filteredDoctor = doctors.find(
    (doctor) => doctor.id === parseInt(params.slug)
  );
  return (
    <Layout>
      <Container>
        <DoctorImage src={filteredDoctor?.image} alt={filteredDoctor?.name} />
        <DoctorCardContent>
          <DoctorCard key={filteredDoctor?.name}>
            {filteredDoctor?.name}
          </DoctorCard>
          <DoctorSpeciality>
            Specialty: {filteredDoctor?.speciality}
          </DoctorSpeciality>
          <Qualifications>
            {filteredDoctor?.qualifications.map((qualification) => (
              <Qualification key={qualification}>{qualification}</Qualification>
            ))}
          </Qualifications>
          <DoctorBio>
            {filteredDoctor?.bio?.split(",").map((line, index) => (
              <p key={index}>{line.trim()}</p>
            ))}
          </DoctorBio>
        </DoctorCardContent>
      </Container>
    </Layout>
  );
};

export default DoctorIndividualProfile;
