import React from "react";

const stories = [
  {
    title: "Community Garden",
    description:
      "Thanks to our volunteers, we now have a flourishing community garden.",
    image: "path/to/image1.jpg",
  },
  {
    title: "Park Renovation",
    description:
      "Our local park has been renovated with new benches and playground equipment.",
    image: "path/to/image2.jpg",
  },
  {
    title: "Street Cleanup",
    description:
      "Our volunteers successfully cleaned up the main street, making it safer and cleaner.",
    image: "path/to/image3.jpg",
  },
];

const SuccessStoriesSection = () => {
  return (
    <section className="p-10">
      <h2 className="text-2xl font-bold mb-6">Recent Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <div key={index} className="p-4 bg-white shadow rounded">
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-32 object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{story.title}</h3>
            <p>{story.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
