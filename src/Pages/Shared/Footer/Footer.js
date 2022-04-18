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
      <footer className="bg-dark text-center text-white bottom-fixed">
        <div className="p-4 pb-0">
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example2"
                      className="form-control"
                    />
                    <label className="form-label" for="form5Example2">
                      Email address
                    </label>
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
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
