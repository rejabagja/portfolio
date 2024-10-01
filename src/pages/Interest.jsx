import { useEffect, useState } from "react";

const Interest = () => {
  const [transisi, setTransisi] = useState("opacity-0 scale-0 translate-x-full");

  useEffect(() => {
    setTransisi("opacity-100 scale-100 translate-x-0")
  },[])

  return (
    <div className={`px-5 ${transisi} transition-all duration-300 ease-int max-w-2xl`}>
      <h1 className="text-4xl font-bold text-center">Interest</h1>
      <p className="mt-4">I enjoy learning new technologies and keeping up with the latest web development trends.</p>
    </div>
  );
}

export default Interest;
