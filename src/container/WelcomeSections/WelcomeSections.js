import React from "react";

const WelcomeSection = () => {
  return (
    <section className="text-center p-10 bg-gray-100">
      <img src="/img/logo.jpg" alt="Welcome" className="mx-auto mb-6" />
      <h1 className="text-3xl font-bold">Welcome to CitizenConnect</h1>
      <p className="my-4">
        Join us in making our community a better place. Browse challenges,
        participate in discussions, and share your success stories.
      </p>
      <button className="bg-orange-500 text-white py-2 px-4 rounded">
        Get Started
      </button>
    </section>
  );
};

export default WelcomeSection;
