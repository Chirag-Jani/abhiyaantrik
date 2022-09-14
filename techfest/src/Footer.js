import React from "react";

function Footer() {
  return (
    <div>
      <footer
        className="bg-dark text-center text-white p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <div className="text-center">
          <h3>Engineer's Day - 2022</h3>
          <div className="">
            <p>Created by:</p>
            <div>
              <p>
                Chirag Jani <br />
                +91 8980149230
                <br /> chiragjani5901@gmail.com{" "}
              </p>
            </div>
          </div>
          <div className="">
            <div>
              <p>
                Harmish Babariya <br />
                +91 9924945103 <br />
                harmishbabariya@gmail.com{" "}
              </p>
            </div>
          </div>
          <div className="">
            <div>
              <p>
                Darshan Malaviya <br />
                +91 9662735687 <br />
                darshanmalaviya163@gmail.com{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
