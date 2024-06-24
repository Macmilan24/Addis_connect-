import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white p-4 text-center">
      <div>&copy; 2023 CitizenConnect. All rights reserved.</div>
      <nav className="mt-2">
        <a href="#id" className="mx-2">
          Privacy
        </a>
        <a href="#id" className="mx-2">
          Terms of Service
        </a>
        <a href="#id" className="mx-2">
          Contact
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
