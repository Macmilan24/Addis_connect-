import React from "react";

const WelcomeSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-center p-10 bg-gray-100 z-0"
      style={{ backgroundImage: `url(/img/logo.jpg)` }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-3xl md:text-5xl font-bold">
          Welcome to CitizenConnect
        </h1>
        <p className="my-4 text-lg md:text-xl">
          Join us in making our community a better place. Browse challenges,
          participate in discussions, and share your success stories.
        </p>
        <button className="bg-orange-500 text-white py-2 px-4 rounded mt-4">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default WelcomeSection;
