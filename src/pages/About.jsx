import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const About = () => {
  const [transisi, setTransisi] = useState("opacity-0 scale-0")

  useEffect(() => {
    setTransisi("opacity-100 scale-100")
  },[])
  return (
    <div className={`px-5 ${transisi} duration-300 ease-in-out  max-w-2xl`}>
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="text-slate-900 mt-4 text-justify sm:text-start"><span className="font-semibold">Hello Mates!, my name is Reza.</span> I'm a passionate web developer with a love for building dynamic and responsive websites.I specialize in creating modern, user-friendly interfaces using the latest web technologies. With a strong background in front-end development and experience in React, Tailwind CSS, and other cutting-edge tools, I aim to deliver clean, efficient, and visually appealing projects.</p>
      <Footer />
    </div>
  );
}

export default About;
