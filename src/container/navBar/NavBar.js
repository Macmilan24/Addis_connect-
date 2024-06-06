import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";

export default function NavBar() {
  const [phover, setPHover] = useState(false);
  const [chover, setCHover] = useState(false);

  return (
    <div className=" h-24 flex items-center justify-evenly">
      <div className=" h-full w-1/4 flex justify-center">
        <img
          src="/img/logo.jpg"
          alt="logo"
          className=" h-20 w-40 object-cover"
        />
      </div>
      <div className="nav-link  h-5/6 w-2/5">
        <ul className="flex justify-between items-center h-full font-medium">
          <li className=" hover:text-orange-400 transition">
            Product <FontAwesomeIcon className=" pl-2" icon={faCaretDown} />
          </li>
          <li className=" hover:text-orange-400 transition">
            Use Case <FontAwesomeIcon icon={faCaretDown} />
          </li>
          <li className=" hover:text-orange-400 transition">About Us</li>
          <li className=" hover:text-orange-400 transition">Plans</li>
          <li className=" hover:text-orange-400 transition">Resource</li>
        </ul>
      </div>
      <div className=" h-5/6 w-2/6 flex items-center justify-center">
        <Button>Schedule a Demo</Button>
      </div>
    </div>
  );
}
