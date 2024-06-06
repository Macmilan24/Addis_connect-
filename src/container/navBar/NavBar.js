import React from "react";

export default function NavBar() {
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
        <ul className="flex justify-between items-center">
          <li>Product</li>
          <li>Use Case</li>
          <li>About Us</li>
          <li>Plans</li>
          <li>Resource</li>
        </ul>
      </div>
      <div className=" h-5/6 w-2/6"></div>
    </div>
  );
}
