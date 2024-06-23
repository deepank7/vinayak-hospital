import styled from "styled-components";
import Cards from "./Cards";

const ServicesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 0; /* Adjust margins as needed */
`;

const ServicesHeader = styled.h3`
  font-size: 1.5rem; /* Adjust font size as needed */
  margin-bottom: 1rem; /* Adjust margin as needed */
  display: flex;
  justify-content: center;
  width: 100%; /* Optional: Set width to fill the viewport */
`;

const ServicesText = styled.p`
  font-size: 1.2rem; /* Adjust font size as needed */
  line-height: 1.5; /* Adjust line height as needed */
  text-align: center; /* Adjust text alignment as needed */
  padding: 10px;
`;

const cards = [
  {
    title: "Obstetrics and gynaecology",
    content:
      "Obstetrics and gynaecology is the medical specialty that encompasses the two subspecialties of obstetrics and gynaecology. It also specializes in other women's health issues, such as menopause, hormone problems, contraception (birth control), and infertility.",
    imageUrl:
      "https://aakashhospital.com/wp-content/uploads/2023/04/Gynaecology-Obstetrics.png",
  },
  {
    title: "General surgery",
    content:
      "General surgery is a surgical specialty that focuses on alimentary canal and abdominal contents including the esophagus, stomach, small intestine, large intestine, liver, pancreas, gallbladder, appendix and bile ducts, and often the thyroid gland",
    imageUrl:
      "https://aakashhospital.com/wp-content/uploads/2023/04/General-Surgery-1.jpg.webp",
  },
  {
    title: "ENT",
    content:
      "Otolaryngology or ENT is a medical specialty that aims at treating ears, nose and throat. It is also referred to as otolaryngology-head and neck surgery because the specialists are also trained in surgery and medical.",
    imageUrl:
      "https://aakashhospital.com/wp-content/uploads/2023/04/ENT-1.png.webp",
  },
  {
    title: "Orthopedics",
    content:
      "They deal with Knee replacement surgeries, Traumatic Orthopedic surgeries, Hip replacement, Elbow replacement, and Shoulder replacement, along with arthroscopic surgeries or many other joint surgeries daily.",
    imageUrl:
      "https://aakashhospital.com/wp-content/uploads/2023/04/Orthopedics-Surgery.png",
  },
  {
    title: "Urology",
    content:
      "Urology is a medical specialty that focuses on the diagnosis and treatment of diseases and disorders of the male and female urinary system, along with medical conditions of the male reproductive system. Some common urological disorders are urinary tract infections (UTIs), urinary incontinence, etc.",
    imageUrl:
      "https://aakashhospital.com/wp-content/uploads/2023/04/Urology.png",
  },
  {
    title: "Caridology",
    content:
      " Cardiology is the study of the heart. Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease, etc.",
    imageUrl:
      "https://aakashhospital.com/wp-content/uploads/2023/04/Cardiology.png",
  },
];
const Services = () => {
  return (
    <>
      <ServicesHeader>Our Healthcare Services</ServicesHeader>
      <ServicesText>
        We offer a wide range of medical services to meet your needs. From
        routine checkups to specialized treatments, our team of experienced
        professionals is dedicated to providing you with the highest quality
        care. Exceptional healthcare services delivered by renowned experts
        using advanced technology.
      </ServicesText>
      <div className="card-container">
        {cards.map((card) => (
          <Cards
            key={card.title}
            title={card.title}
            content={card.content}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </>
  );
};

export default Services;
