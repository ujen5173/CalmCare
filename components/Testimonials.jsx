import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Thompson",
    occupation: "Teacher",
    content:
      "I am grateful to have found Serenity Mental Health Clinic. The support and guidance I received from their team helped me navigate through a difficult period in my life. Their compassionate approach and effective therapy techniques have truly made a positive impact on my overall well-being.",
    img: "/profil0.jpg",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    occupation: "Software Engineer",
    content:
      "Serenity Mental Health Clinic has been a game-changer for me. The therapists there truly understood the challenges I faced and provided personalized strategies to manage my stress and anxiety. Thanks to their expertise and unwavering support, I feel more in control and better equipped to handle life's ups and downs.",
    img: "/profil2.jpg",
  },
  {
    id: 3,
    name: "Emily Johnson",
    occupation: "Marketing Executive",
    content:
      "The care and understanding I received at Serenity Mental Health Clinic have been exceptional. The therapists not only helped me address my mental health concerns but also empowered me with practical tools to improve my emotional well-being. I highly recommend their services to anyone seeking a nurturing and supportive environment for their mental health needs.",
    img: "/profil3.jpg",
  },
  {
    id: 4,
    name: "David Anderson",
    occupation: "Student",
    content:
      "Serenity Mental Health Clinic has made a tremendous difference in my life. Their dedicated team of professionals created a safe space where I could openly express my feelings and receive guidance without judgment. Thanks to their expertise and encouragement, I now have the confidence and resilience to face challenges and pursue my goals with a positive mindset.",
    img: "/profil4.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-center text-4xl font-semibold mb-5">
          Testimonials
        </h1>
        <p className="text-gray-600 text-center font-medium text-xl mb-16">
          What entrepreneurs say about using Mental
        </p>

        <div className="flex items-center justify-between gap-4 flex-wrap">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-white p-4 w-full md:w-[calc(100%/2-0.5rem)] border border-gray-200 rouded-lg"
            >
              <div className="flex flex-col items-start lg:flex-row gap-4 mb-4">
                <Image
                  src={item.img}
                  alt="Profile Picture"
                  width={100}
                  height={100}
                  className="rounded-xl object-cover "
                />
                <p className="w-full text-lg">{item.content}</p>
              </div>
              <div>
                <h1 className="text-xl font-semibold">{item.name}</h1>
                <p className="text-lg font-semibold">- {item.occupation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
