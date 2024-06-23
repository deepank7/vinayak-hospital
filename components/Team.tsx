import React from 'react';
import styled, { css } from 'styled-components';

interface Doctor {
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
  width: 300px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const DoctorImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const DoctorName = styled.h2`
  font-size: 1.5em;
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
      name: 'Dr. Karan Singh Yadav',
      speciality: 'ENT Surgeon',
      qualifications: ['MBBS', 'DLO', 'DNB'],
      image: '/path/to/chandan-das.jpg', // Replace with actual image path
    },
    {
      name: 'Dr. Pravin Kumari Yadav',
      speciality: 'Obstetrics and Gynaecology',
      qualifications: ['MBBS', 'MS', 'Medicine'],
      image: '/path/to/rahul-trehan.jpg', // Replace with actual image path
    },
    {
        name: 'Dr. Hemant Chaturvedi',
        speciality: 'Orthopedic',
        qualifications: ['MBBS', 'MS'],
        image: '/path/to/rahul-trehan.jpg', // Replace with actual image path
      },
    {
      name: 'Dr. Mayank Singhal',
      speciality: 'General and Laparoscopic Surgery',
      qualifications: ['MBBS', 'MS'],
      image: '/path/to/anshul-mittal.jpg', // Replace with actual image path
    },
    {
      name: 'Dr. Suresh K. Gupta',
      speciality: 'Eye Surgeon',
      qualifications: ['MBBS', 'MS'],
      image: '/path/to/rk-mehra.jpg', // Replace with actual image path
    },
    {
      name: 'Dr. Mudit Mittal',
      speciality: 'Pediatrics',
      qualifications: ['MBBS, MD'],
      image: '/path/to/amodita-ahuja.jpg', // Replace with actual image path
    },
    {
      name: 'Dr. Gopesh Bansal',
      speciality: 'Pediatrics',
      qualifications: ['MBBS, MD'],
      image: '/path/to/sonal-gupta.jpg', // Replace with actual image path
    },
    {
        name: 'Dr. B.K. Garg',
        speciality: 'Physician',
        qualifications: ['MBBS, MD'],
        image: '/path/to/sonal-gupta.jpg', // Replace with actual image path
      },
      {
        name: 'Dr.Yogesh Taneja',
        speciality: 'Urologist',
        qualifications: ['MBBS, MS, MCH'],
        image: '/path/to/sonal-gupta.jpg', // Replace with actual image path
      },
      {
        name: 'Dr.Harshita',
        speciality: 'Physiotherapist',
        qualifications: ['B.P.T'],
        image: '/path/to/sonal-gupta.jpg', // Replace with actual image path
      },
      {
        name: 'Dr.Rajendra Tanwar',
        speciality: 'Optho',
        qualifications: ['MBBS, MS'],
        image: '/path/to/sonal-gupta.jpg', // Replace with actual image path
      },
      {
        name: 'Dr.Dhirendra',
        speciality: 'Dental surgeon',
        qualifications: ['BDS'],
        image: '/path/to/sonal-gupta.jpg', // Replace with actual image path
      },
  ];

  return (
    <Container>
      <Title>Our Team Of Well-trained Experienced Doctors</Title>
      <DoctorsContainer>
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.name}>
            {/* <DoctorImage src={doctor.image} alt={doctor.name} /> */}
            <DoctorName>{doctor.name}</DoctorName>
            <DoctorSpeciality>{doctor.speciality}</DoctorSpeciality>
            <Qualifications>
              {doctor.qualifications.map((qualification) => (
                <Qualification key={qualification}>{qualification}</Qualification>
              ))}
            </Qualifications>
            <ViewProfileButton>View Profile</ViewProfileButton>
          </DoctorCard>
        ))}
      </DoctorsContainer>
      {/* <ViewAllButton>VIEW ALL DOCTORS</ViewAllButton> */}
    </Container>
  );
};

export default Team;