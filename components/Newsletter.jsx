import React from "react";

const Newsletter = () => {
  return (
    <section className="w-full bg-violet-600">
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-5xl font-semibold mb-5 text-white">
          Subscribe to our newsletter
        </h1>
        <p className="text-white text-lg mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum quibusdam voluptatibus.
        </p>
        <div className="flex items-center gap-2 w-11/12 md:w-9/12 lg:w-7/12 p-2 mx-auto bg-white rounded-md">
          <input
            type="text"
            placeholder="Enter your email address here"
            className="w-full px-4 bg-transparent outline-none text-base"
          />
          <button className="btn-secondary">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
