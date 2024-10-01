import {useEffect, useState} from 'react'

const Home = () => {
  const [transisi, setTransisi] = useState("opacity-0 scale-0")

  useEffect(() => {
    setTransisi("opacity-100 scale-100")
  },[])

  return (
    <div className={`px-5 ${transisi} transition-all duration-300 ease-in flex flex-col justify-center items-center`}>
      <img src="/images/avatar.svg" alt="avatar" className="w-full max-w-56 mb-4" />
      <h1 className="text-4xl font-bold text-center">Welcome to My Portfolio</h1>
      <p className="my-4 text-center text-lg text-stone-800 font-medium">Explore my projects, skills, and experiences.</p>
    </div>
  );
}

export default Home;
