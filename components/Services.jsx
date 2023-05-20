import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Depression",
    description:
      "Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. Also called major depressive disorder or clinical depression, it affects how you feel, think and behave and can lead to a variety of emotional and physical problems. You may have trouble doing normal day-to-day activities, and depression may make you feel as if life isn't worth living.",
    image: "/depressions.jpg",
  },
  {
    id: 2,
    title: "Anxiety",
    description:
      "Anxiety is your body's natural response to stress. It's a feeling of fear or apprehension about what's to come. The first day of school, going to a job interview, or giving a speech may cause most people to feel fearful and nervous.",
    image: "/anxiety.jpg",
  },
  {
    id: 3,
    title: "Stress",
    description:
      "Stress is a feeling of emotional or physical tension. It can come from any event or thought that makes you feel frustrated, angry, or nervous. Stress is your body's reaction to a challenge or demand. In short bursts, stress can be positive, such as when it helps you avoid danger or meet a deadline.",
    image: "/stress.webp",
  },
];

const Services = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 py-28">
        <h1 className="mb-10 text-gray-900 text-4xl lg:text-5xl w-11/12 md:w-9/12 lg:w-7/12 mx-auto text-center font-semibold">
          Various Mental Health problems are cured by us.
        </h1>

        <div className="flex justify-between flex-wrap gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-4 rounded-xl w-full md:w-[calc(100%/2-0.5rem)] lg:w-[calc(100%/3-1rem)] shadow-lg border border-gray-200"
            >
              <Image
                src={service.image}
                alt=""
                width={500}
                height={500}
                className="w-full object-cover rounded-xl mb-5"
              />
              <h1 className="text-2xl font-semibold text-gray-700 mb-4">
                {service.title}
              </h1>
              <p className="text-gray-600 mb-4 text-limit">
                {service.description}
              </p>
              <button className="btn-primary">Learn more</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
