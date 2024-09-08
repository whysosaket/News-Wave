import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import { IoNewspaperOutline, IoPerson } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
  {/* component */}
  {/* follow me on twitter @asad_codes */}
    <section className="relative mx-auto">
      {/* navbar */}
      <motion.nav
      initial={{y: -100, x: 200, opacity: 0}}
      animate={{y: 0, x: 0, opacity: 1}}
      transition={{delay: 0, duration: 0.5}}
      className="flex justify-between bg-black text-white w-full">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <Link to="/" className="text-3xl font-semibold font-heading flex">
            <img className="h-10 cursor-pointer invert mr-0" src="logo.png" alt="logo" />
            Wave
          </Link>
          {/* Nav Links */}
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li>
              <Link className="hover:text-gray-200" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-gray-200">
                News
              </Link>
            </li>
            <li>
              <a className="hover:text-gray-200" href="#">
                Collections
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          {/* Header Icons */}
          <div className="hidden xl:flex items-center space-x-5">
            <a className=" hover:text-red-500" href="#">
              <FaRegHeart size={23} />
            </a>
            {/* Sign In / Register      */}
            <Link className="flex items-center hover:text-gray-200" to="/login">
              <CgProfile size={25} />
            </Link>
          </div>
        </div>
        {/* Responsive navbar */}
        <Link className="xl:hidden flex mr-6 items-center" to="/news">
          <IoNewspaperOutline size={22} />
          <span className="flex absolute -mt-5 ml-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
          </span>
        </Link>
        <Link to="/login" className="navbar-burger self-center mr-4 xl:hidden">
          <IoPerson size={22} />
        </Link>
      </motion.nav>
    </section>

</>

  )
}

export default Navbar