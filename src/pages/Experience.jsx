import { useEffect, useState } from "react";
import ExperienceItem from "../components/ExperienceItem";

const Experience = () => {
  const [transisi, setTransisi] = useState("opacity-0 scale-0 -translate-x-full");

  useEffect(() => {
    setTransisi("opacity-100 scale-100 translate-x-0")
  },[])

  return (
    <div className={`px-5 ${transisi} transition-all duration-300 ease-in max-w-2xl`}>
      <h1 className="text-4xl font-bold text-center">Experience</h1>
      <p className="mt-4 mb-3">Here is a list of my professional experiences.</p>
      <ExperienceItem
        title="Project A"
        year="2024"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iusto vel est doloremque quaerat labore amet error minus, rerum ut consequuntur reprehenderit. Rem, aperiam labore.
      </ExperienceItem>
      <ExperienceItem
        title="Project B"
        year="2023"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias minima corrupti earum nesciunt incidunt laboriosam distinctio aliquid iusto numquam amet, porro, officia excepturi optio modi perspiciatis sequi, eius ex velit.
      </ExperienceItem>
      <ExperienceItem
        title="Project C"
        year="2022"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iusto esse dignissimos reiciendis perferendis nihil deleniti animi officiis debitis placeat!
      </ExperienceItem>
    </div>
  );
}

export default Experience;
