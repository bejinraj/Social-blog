import React from "react";

const Footer = () => {
  return (
    <div className=" w-full py-4 bg-indigo-600 text-sm text-white font-semibold fixed bottom-0 text-center">
      <footer className="footer">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Social Media. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
