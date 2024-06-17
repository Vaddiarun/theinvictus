import React from "react";
import "./AboutUs.css";
import Contact from "../Contact/Contact.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
export default function AboutUs() {
  return (
    <>
      <div className="aboutus-image-page">
        <h1 className="about-text">About Invictus</h1>
        <p className="about-text-for-pragraph">
          If you have a dream of studying abroad, we have the way. Study
          internationally with IDP.
        </p>
      </div>
      <div className="total-cont">
        <div className="dream-big-card">
          <h1 className="text-heading">DREAM BIG, FLY HIGH WITH INVICTUS!</h1>
          <h1 className="line-footer"></h1>
          <p className="paragraph-text">
            At Invictus, we believe in the power of pursuing a global education
            and opening numerous doors for students. With diverse course
            options, the world becomes an oyster for students who want to expand
            their horizons. As young Indians today continue to emerge as leaders
            in different arenas, we take pride in guiding future leaders to
            choose and pursue their higher education at some of the best
            universities in the world
          </p>
        </div>
        <div className="vision-card">
          <h1 className="text-heading1">Vision</h1>
          <h1 className="line-footer"></h1>
          <p className="paragraph-text">
            At Invicitus, our vision is to empower students to become global
            citizens by providing them with the tools, resources, and support
            they need to succeed in the competitive world of higher education.
            We are dedicated to fostering an inclusive and dynamic learning
            environment that cultivates curiosity, critical thinking, and a
            passion for lifelong learning. We believe that education is the key
            to unlocking a world of opportunities and that every student,
            regardless of their background, potential.
          </p>
        </div>
        <div className="mission-card">
          <h1 className="text-heading1">Mission</h1>
          <h1 className="line-footer"></h1>
          <p className="paragraph-text">
            At Invictus, our mission is to provide personalized guidance and
            support to students at every stage of their study abroad journey. We
            are dedicated to helping students achieve their academic and career
            goals by offering high-quality services at an affordable price. Our
            commitment is to ensure that each student receives the
            individualized attention and resources they need to succeed in their
            international education endeavors. We believe that studying abroad
            is a transformative experience that broadens horizons and fosters
            personal growth.
          </p>
        </div>
        <div className="motto-card">
          <h1 className="text-heading1">Motto</h1>
          <h1 className="line-footer"></h1>
          <p className="paragraph-text">
            Our motto, “Dream Big, Fly High,” encapsulates our belief that every
            student has the potential to achieve great things. We are here to
            help students realize their dreams and reach for the stars. At
            Invictus, we believe that with hard work, dedication, and the right
            guidance, anything is possible. We are committed to fostering a
            supportive and empowering environment where students feel confident
            to pursue their ambitions. Our expert team provides tailored advice
            and resources, helping students navigate the challenges of studying
            abroad with ease. By encouraging students to think boldly and aim
            high, we inspire them to push beyond their limits and explore new
          </p>
        </div>

        <div className="founders-card">
          <h1 className="founder-heading">FOUNDER'S</h1>
          <p className="fonder-line-coloring"></p>
          <div className="founders-card-flex">
            <img
              className="founder-image-sizing"
              src="https://theinvictus.co.in/wp-content/uploads/2023/04/fotor_2023-3-9_11_31_35.png"
              alt="Invictus-founder-image"
            />
            <div>
              <h1 className="founder-name">PHIRCHAND BK: (OUR FOUNDER)</h1>
              <p className="paragraph-content-size ">
                Mr. Phirchand BK, our Founder, has over 12 years of experience
                in educational counselling, applications, and visa processes.
                Noticing a gap between students and consultancies,. An expert in
                visa procedures for over 15 countries, he has successfully
                placed over 6,000 students worldwide.
              </p>
            </div>
          </div>
          <div className="founders-card-flex">
            <img
              className="founder-image-sizing"
              src="https://theinvictus.co.in/wp-content/uploads/2023/04/fotor_2023-3-9_8_40_29.png"
              alt="Invictus-founder-image"
            />
            <div>
              <h1 className="founder-name">
                VIBHASHREE RAVINDRA: (OUR CO- FOUNDER)
              </h1>
              <p className="paragraph-content-size">
                Mrs. Vibhashree Ravindra, Co-Founder of Invictus, has over 9
                years of experience in educational counselling and training.
                Formerly a business professor, she excels in IELTS training,
                visa applications, and interview coaching. She has enhanced the
                profiles of over 4,000 students.
              </p>
            </div>
          </div>
        </div>
        <div className="increment-page">
          {/* contactus page will appear here */}
          <Contact />
        </div>
      </div>
    </>
  );
}
