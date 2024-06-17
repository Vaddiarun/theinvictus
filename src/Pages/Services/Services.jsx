import React, { useState } from "react";
import Testimonials from "../../Components/Testimonials/Testimonials.jsx";
import TestimonialCard from "../../Components/TestimonialCard/TestimonialCard.jsx";
import "./Services.css";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";
import Footer from "../../Components/Footer/Footer.jsx";

const testimonialsArray = [
  {
    name: "Ruchitha Yathirajulu",
    imageUrl:
      "http://theinvictus.co.in/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-15-at-9.20.08-PM.jpeg",
    content:
      "The experience was too good. The trainers and mentors are very good at explaning each and every details required and guidance is awesome. They are also good in training students for english language test such as IELTS, GRE etc. I am very happy to have pursued my study abroad education through them. Suggest to go for it without any doubt",
    university: "Ottawa University,Canada",
  },
  {
    name: "Archit Mishra",
    imageUrl:
      "https://theinvictus.co.in/wp-content/uploads/2023/04/Archit-Mishra.webp",
    content:
      "I contacted Invictus Consulting for help with my training, application, and visa process. They offer some of the best GMAT and IELTS preparation. Mr. Abhinav and Ms. Ritu, the quant and verbal trainers, did an excellent job. The application and visa process went well. They assisted me with the  visa process, including document preparation. ",
    university: "University of Waterloo Canada",
  },

  {
    name: "Hussain Lokhandwala",
    imageUrl:
      "http://theinvictus.co.in/wp-content/uploads/2023/04/Hussain.webp",
    content:
      "At Invictus consulting services, they adhere to a systematic approach. They handled every aspect of the procedure for me, from shortlisting universities to assisting me with obtaining a visa. Mrs. Vibhashree Ravindra and her crew were really helpful throughout the process and never ever hesitated to answer even the tiniest of my doubts cleared. ",
    university: "Ontaria University-Canada",
  },

  {
    name: "Sushma HR",
    imageUrl:
      "http://theinvictus.co.in/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-15-at-9.20.08-PM.jpeg",
    content:
      "I joined the Invictus with a friend’s suggestion a year ago and it was the best choice. I had joined for both ielts coaching and consultation service. coaching was very helpful and was flexible. The service was very good and mentors took at most care at each step. I specially want to thank and Chandu sir for the support throughout the journey. ",
    university: "Ontaria University Canada",
  },

  {
    name: "Akshay Kapoor",
    imageUrl:
      "https://theinvictus.co.in/wp-content/uploads/2023/04/Akshay-Kapoor.webp",
    content:
      "I’d always been intrigued by the idea of pursuing a master’s degree in architecture, but I was unsure which consultant to contact. When I met Mrs. Vibhashree Ravindra, I felt relieved. She not only has a wealth of information, but she also has a great deal of experience in this area. Her advice assisted me in my profile and obtaining admission",
    university: "Politecnicio di Milano-Italy",
  },
  {
    name: "Sachin Bhat",
    imageUrl:
      "https://theinvictus.co.in/wp-content/uploads/2023/04/Sachin-Bhat.webp",
    content:
      "If you want a stress-free study abroad experience, Invictus Consulting Services is the go-to place. They have outstanding, well-trained trainers who are alumni of IITs and NITs, as well as a well-trained counseling and application team with a wealth of expertise. The finest thing is that they direct you to institutions where you belong.",
    university: "University of New South Wales-Australia",
  },
  {
    name: "Mayank Kumar",
    imageUrl: "http://theinvictus.co.in/wp-content/uploads/2023/04/mayank.webp",
    content:
      "I would strongly advise anyone interested in pursuing further education abroad to contact Invictus Consulting Services. They not only assisted me in obtaining a spot at Arizona State University, but also in preparing for the GRE/IELTS, building my resume through internships, and assisting me with the full application and visa process",
    university: "Ariona State University",
  },
  {
    name: "Tanushree Chandrappa",
    imageUrl:
      "http://theinvictus.co.in/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-10-at-12.38.32-AM.jpeg",
    content:
      "I am delighted to write a review about Invictus Consulting Services, an exceptional education abroad consultancy that helped me secure a seat in the University of East London (UK) and with my application and visa process. I couldn’t have done it without their guidance.From the moment I approached Invictus, they were professional and approachable.",
    university: "University of East London,UK",
  },
];

export default function Services() {
  return (
    <div className="services">
      <img
        src="https://theinvictus.co.in/wp-content/uploads/2023/04/multiethnic-business-team-sitting-table-office-center-speaking-scaled-1-2048x1366.jpg"
        alt=""
        className="service-image-mobile"
      />
      <img
        src="https://theinvictus.co.in/wp-content/uploads/2023/04/multiethnic-business-team-sitting-table-office-center-speaking-scaled-1-1024x683.jpg"
        alt=""
        className="service-image-laptop"
      />
      <div className="services-container">
        <div className="service-container">
          <img
            src="https://theinvictus.co.in/wp-content/uploads/2023/04/concentrated-job-business-people-manager-working-their-new-project-classroom-2-scaled-1-2048x1366.jpg"
            alt="INTERNSHIPS"
            className="service-image"
          />
          <div className="content-container">
            <h1>INTERNSHIPS</h1>
            <br />

            <p className="paragraph-text-services">
              At Invictus Consulting Services, we understand the importance of
              having relevant work experience to gain admission to a top
              university abroad. Our team of experienced consultants works
              closely with students to identify their career goals and interests
              and then matches them with suitable internship opportunities.
              students not only gain valuable work experience but also increase
              their chances of getting into a better university abroad. Contact
              us today to learn more about our internship placement services and
              how we can help you achieve your study abroad goals.
            </p>
          </div>
        </div>
        <div className="service-container">
          <img
            src="https://theinvictus.co.in/wp-content/uploads/2023/04/clever-boy-with-exam-scaled-1-1536x1025.jpg"
            alt="TEST PREPARATION"
            className="service-image"
          />
          <div className="content-container">
            <h1>TEST PREARATION</h1>
            <br />

            <p className="paragraph-text-services">
              At Invictus Consulting Services, we understand that competitive
              exams play a crucial role in the study abroad application process.
              That’s why we offer comprehensive exam preparation services to
              help students achieve their best possible scores. identifying
              their strengths and weaknesses and developing... customized study
              plans tailored to their individual needs. which can significantly
              improve their chances of getting into their dream university.
              Contact us today to learn more about our exam preparation services
              and how we can help you achieve your study abroad goals.
            </p>
          </div>
        </div>
        <div className="service-container">
          <img
            src="https://theinvictus.co.in/wp-content/uploads/2023/04/close-up-hand-signing-document-1024x681-1.jpg"
            alt="UNIVERSITY APPLICATIONS"
            className="service-image"
          />
          <div className="content-container">
            <h1>UNIVERSITY APPLICATIONS</h1>
            <br />
            <p className="paragraph-text-services">
              At Invictus Consulting Services, we understand that the university
              application process can be daunting and overwhelming for students.
              That’s why we offer comprehensive university application services
              to help students navigate the process with ease.... We also
              provide guidance on scholarship and financial aid opportunities By
              availing our university application services, students increase
              their chances of getting into their dream university and achieving
              their study abroad goals. Contact us today to learn more about our
              university application services and how we can help you achieve
              your study abroad goals.
            </p>
          </div>
        </div>
        <div className="service-container">
          <img
            src="https://theinvictus.co.in/wp-content/uploads/2023/04/visa-application-travel-form-concept-1024x857-1.jpg"
            alt="VISA PROCESS"
            className="service-image"
          />
          <div className="content-container">
            <h1>VISAPROCESS</h1>
            <br />

            <p className="paragraph-text-services">
              When applying to study abroad, the visa process can often be one
              of the most complicated and intimidating steps for students. At
              Invictus Consulting Services, we recognize the importance of
              having a smooth visa application experience and offer
              comprehensive visa assistance services to guide students through
              the process.... helping students build confidence and prepare
              effectively for their visa interview. By availing our visa
              assistance services, students can have peace of mind knowing that
              their visa application process is in capable hands. Contact us
              today to learn more about our visa assistance services and how we
              can help you achieve your study abroad goals.
            </p>
          </div>
        </div>
      </div>
      <div className="tests">
        <h1 className="testimonials-title">Testimonials</h1>
        <section className="section12_content">
          <Testimonials
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              500: {
                slidesPerView: 2,
                spaceBetween: 10,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {testimonialsArray.map((item, ind) => (
              <SwiperSlide key={ind}>
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Testimonials>
        </section>
      </div>
      <Footer />
    </div>
  );
}
