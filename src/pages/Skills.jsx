import { useEffect, useState } from "react";

const Skills = () => {
  const [transisi, setTransisi] = useState("opacity-0 scale-0 -translate-x-full");

  useEffect(() => {
    setTransisi("opacity-100 scale-100 translate-x-0")
  },[])
  return (
    <div className={`px-5 ${transisi} transition-all duration-300 ease-in-out max-w-2xl`}>
      <h1 className="text-4xl font-bold">Skills</h1>
      <p className="mt-4">I specialize in <span className="underline">React</span>, <span className="underline">JavaScript</span>, and CSS frameworks like <span className="underline">Tailwind CSS</span>.</p>
    </div>
  );
}

export default Skills;
