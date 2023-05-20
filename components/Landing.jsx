import Image from "next/image";
import React from "react";

const Landing = () => {
  return (
    <section className="w-full bg-gray-100 min-h-[90vh]">
      <div className="container mx-auto px-4 pt-40 pb-28">
        <div className="flex flex-col md:flex-row gap-10 mb-6 items-center justify-between">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-snug font-semibold text-gray-800">
              Finding Serenity: CalmCare Mental Health Clinic
            </h1>
          </div>
          <div className="hidden xl:flex flex-col gap-6">
            <div className="w-full">
              <h1 className="text-xl lg:text-3xl mb-4 font-semibold text-gray-800">
                Call Us
              </h1>
              <p className="text-gray-600 text-xl lg:text-3xl font-medium">
                +016-555-555-555
              </p>
            </div>
            <div className="w-full">
              <h1 className="text-xl lg:text-3xl mb-4 font-semibold text-gray-800">
                Find Us
              </h1>
              <p className="text-gray-600 text-xl lg:text-3xl font-medium">
                Kathmandu, Nepal
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <div className="w-full lg:w-1/2">
            <p className="text-xl lg:text-2xl mb-10 text-gray-700">
              Discover serenity at Serenity Mental Health Clinic. Our dedicated
              team provides compassionate care and support for your mental
              well-being. Find peace, balance, and healing on your journey
              towards a healthier mind.
            </p>
            <div className="flex mb-24 items-center gap-4">
              <button className="btn-primary">Contact Us</button>
              <button className="btn-secondary">Get Help</button>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex-1 min-w-[200px]">
                <h1 className="text-5xl lg:text-7xl mb-2 font-semibold text-gray-800">
                  15<sup>+</sup>
                </h1>
                <p className="text-3xl font-medium text-gray-600">
                  Year Experience
                </p>
              </div>
              <div className="flex-1 min-w-[200px]">
                <h1 className="text-5xl lg:text-7xl mb-2 font-semibold text-gray-800">
                  500<sup>+</sup>
                </h1>
                <p className="text-3xl font-medium text-gray-600">
                  Happy Clients
                </p>
              </div>
              <div className="flex-1 min-w-[200px]">
                <h1 className="text-5xl lg:text-7xl mb-2 font-semibold text-gray-800">
                  1M<sup>+</sup>
                </h1>
                <p className="text-3xl font-medium text-gray-600">In Revenue</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Image
              alt=""
              src={"/landing-image.jpg"}
              width={1200}
              height={900}
              className="w-full object-cover rounded-3xl"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
