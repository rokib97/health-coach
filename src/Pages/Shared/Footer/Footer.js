import React from "react";
import "./Footer.css";
const Footer = () => {
  const getYear = () => {
    const date = new Date();
    const fullYear = date.getFullYear();
    return fullYear;
  };
  return (
    <div className="mt-5">
      <footer className="bg-light text-center text-white bottom-fixed">
        <div className="text-center p-3 copyright">
          <p className="text-center footer my-2">
            Copyright &copy; {getYear()}
            <span>
              <br /> Made with ❤️ by Rokib 🔥
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
