import React from "react";
import photo from "../../Images/person-1.png";
const About = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center my-5 title">Rokibul Hasan Rokib</h1>
        <div className="col-lg-6">
          <article>
            <h3 className="mb-4 title">My Goal</h3>
            <p>
              Hello! I'm Rokibul Hasan.In last couple of months, I'm learning
              web development. My main focus is now to learn frontend
              technologies to build perfect fast and scalable web application.
              Currently I'm exploring react library, my future target will be a
              Full Stack developer.I love to build things thats why i'm
              passionate about web development.
            </p>
          </article>
          <hr style={{ border: "1px solid green" }} className="mb-4" />
          <article>
            <h3 className="mb-4 title">
              How I am working hard to achieve my goal
            </h3>
            <p>
              I'm currently learning web development from a course called
              Complete Web Development. I'm spending my 40 hours/week to write
              code or doing some project based on frontend technologies.In this
              journey In particular topics or module my learning techniques are
              watch videos , write code , and taking notes. After finishing the
              module practice again the topics by myself without any help.Thats
              how i m effectively learning the technologies. From past few
              months, my routine is eat,code,sleep,repeat.
            </p>
          </article>
          <hr style={{ border: "1px solid green" }} className="mb-4" />
        </div>
        <div className="col-lg-6">
          <img
            className="w-75 mx-auto d-flex justify-content-center align-items-center"
            src={photo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
