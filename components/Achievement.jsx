import Image from "next/image";
import React from "react";

const Achievement = () => {
  return (
    <section className="w-full bg-gray-100">
      <div className="flex lg:flex-row flex-col items-center gap-6 container mx-auto py-16 px-4">
        <div className="w-full lg:w-6/12">
          <h1 className="text-4xl md:text-5xl mb-5 leading-snug font-semibold text-gray-800">
            Whenever and wherever you need it, we provide mental health
            services.
          </h1>
          <p className="text-lg md:text-xl mb-16 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            assumenda iusto consectetur eius, molestias, totam voluptas
            accusamus perspiciatis earum itaque dolore expedita id sequi ex!
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex-1 min-w-[150px]">
              <h1 className="text-5xl mb-2 font-bold text-blue-600">60+</h1>
              <p className="text-xl font-medium text-gray-700">
                States we serve
              </p>
            </div>
            <div className="flex-1 min-w-[150px]">
              <h1 className="text-5xl mb-2 font-bold text-blue-600">500+</h1>
              <p className="text-xl font-medium text-gray-700">
                Approx centers
              </p>
            </div>
            <div className="flex-1 min-w-[150px]">
              <h1 className="text-5xl mb-2 font-bold text-blue-600">1k+</h1>
              <p className="text-xl font-medium text-gray-700">Happy clients</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={"/services-image.jpg"}
            alt=""
            width={500}
            height={500}
            className="w-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievement;
