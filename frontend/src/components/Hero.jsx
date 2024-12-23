import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          "Welcome to our Hospital Management System – 
          A cutting-edge solution designed to transform healthcare management. 
          By integrating advanced technology with user-friendly interfaces, 
          our platform ensures seamless coordination across departments, streamlined patient care, 
          and enhanced operational efficiency. Whether it's managing patient records, scheduling appointments, 
          or generating reports, our system empowers healthcare professionals to focus on what matters 
          most – delivering exceptional care. Join us in shaping the future of healthcare with innovation, 
          reliability, and precision."
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;