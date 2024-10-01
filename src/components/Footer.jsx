import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-y-2 my-4">
      <p className="font-medium">Connect with me:</p>
      <div className="flex justify-center items-center gap-x-4">
        <Link><img src="/images/github.svg" alt="github" className="w-8" /></Link>
        <Link><img src="/images/linkedin.svg" alt="github" className="w-8" /></Link>
      </div>
    </footer>
  )
}

export default Footer;