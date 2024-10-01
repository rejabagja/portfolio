import { useEffect, useState } from "react";

const Awards = () => {
  const [transisi, setTransisi] = useState("opacity-0 scale-0 translate-y-full");

  useEffect(() => {
    setTransisi("opacity-100 scale-100 translate-y-0")
  },[])
  return (
    <div className={`px-5 ${transisi} transition-all duration-300 ease-int max-w-2xl`}>
      <h1 className="text-4xl font-bold">Awards</h1>
      <p className="mt-4 mb-3">I have been recognized for excellence in web development and design.</p>
      <div className="mb-2">
        <h3 className="font-semibold">Award X, 2024</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat minima culpa earum delectus, aut inventore!</p>
      </div>
      <div className="mb-2">
        <h3 className="font-semibold">Award Y, 2023</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat minima culpa earum delectus, aut inventore!</p>
      </div>
    </div>
  );
}

export default Awards;