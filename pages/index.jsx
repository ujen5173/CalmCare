import Head from "next/head";
import React from "react";
import {
  Achievement,
  Footer,
  Header,
  Landing,
  Newsletter,
  Services,
  Testimonials,
} from "../components";

const Home = () => {
  return (
    <>
      <Head>
        <title>CalmCare Mental Health Clinic</title>
      </Head>
      <Header />
      <Landing />
      <Services />
      <Achievement />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
