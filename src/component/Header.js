import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillCaretDown, AiFillPropertySafety } from "react-icons/ai";
import { FaBuilding, FaHamburger, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "./Container";
import { IoMdLogOut } from "react-icons/io";
import { CiLogin, CiSaveDown2 } from "react-icons/ci";
import { IoBuild, IoCreateOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Toaster, toast } from "sonner";
import { signOutUserSuccess } from "../redux/userSlice";
import { MdApartment, MdGrass, MdHouseSiding, MdVilla } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { GiVikingLonghouse } from "react-icons/gi";
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
const variants2 = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
const glowVariants = {
  glow: {
    boxShadow: `0 0 0 10px rgba(255, 255, 255, 0.3)`, // Inner white glow
    transition: {
      duration: 1, // Animation duration in seconds
      ease: "easeInOut", // Animation timing function
      repeat: Infinity, // Repeat the animation infinitely
      repeatType: "reverse", // Reverse the animation for smooth looping
    },
  },
};

const pendulumVariants = {
  rest: {
    rotate: 0,
  },
  swing: {
    rotate: [-10, 10], // Swing between -10 and 10 degrees
    transition: {
      duration: 2, // Animation duration in seconds
      ease: "easeInOut", // Animation timing function
      repeat: Infinity, // Repeat the animation infinitely
    },
  },
};

function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [citieOpen, setOpenCities] = useState(false);
  const [propOpen, setOpenProp] = useState(false);
  const [citieOpenMobile, setOpenCitiesMobile] = useState(false);
  const [propOpenMobile, setOpenPropMoble] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [profile, setProfile] = useState(false);

  const cityDropdownRef = useRef(null);
  const propDropdownRef = useRef(null);
  const navigate = useNavigate();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const handleCityClick = (cityName) => {
    setOpenCities(false);
    setOpenProp(false);
    navigate(`/Cities/${cityName}`);
  };

  const handleCategoryClick = (PropertyName) => {
    setOpenCities(false);
    setOpenProp(false);
    navigate(`/Property/${PropertyName}`);
  };

  const handleOutsideClick = (event) => {
    if (
      cityDropdownRef.current &&
      !cityDropdownRef.current.contains(event.target) &&
      propDropdownRef.current &&
      !propDropdownRef.current.contains(event.target)
    ) {
      setOpenCities(false);
      setOpenProp(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Logout
  const handleLogout = () => {
    dispatch(signOutUserSuccess());
    navigate("/");
    toast.success("Logot Successful");
  };

  return (
    <>
      <Toaster richColors />
      <header
        className={`${
          active
            ? "bg-[#F7F7F8] text-slate-900 font-medium "
            : "bg-slate-900 text-[#F5E994]"
        } fixed top-0 left-0 right-0  transition-all  duration-1000 ease-in-out px-4 md:px-0 `}
        style={{ zIndex: 100 }}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto p-3 md:px-6">
          <Link to="/">
            <img
              src={
                active
                  ? "/logo2.jpg"
                  : "https://assetmakers.com/wp-content/uploads/2019/07/Asset-Makers-Logo-Brightest.png"
              }
              className="h-12 object-contain"
            />
          </Link>
          <ul className="flex items-center gap-4">
            <Link to={"/"} className="hidden sm:inline  hover:underline">
              HOME
            </Link>
            <button
              className="relative md:block hidden"
              onClick={() => setOpenCities(!citieOpen)}
            >
              <li className="hidden md:flex items-center gap-2  hover:underline">
                <span> CITIES</span> <AiFillCaretDown />
              </li>
              <div
                className={`${
                  citieOpen ? "block" : "hidden"
                } transition-all duration-1000 absolute top-8 right-0 shadow-md bg-white p-10 space-y-5  rounded-md `}
                ref={cityDropdownRef}
              >
                <p
                  className="hover:text-[#F5E994]"
                  onClick={() => handleCityClick("Bangalore")}
                >
                  Bangalore
                </p>
                <p
                  className="hover:text-[#F5E994]"
                  onClick={() => handleCityClick("Hyderabad")}
                >
                  Hyderabad
                </p>
                <p
                  className="hover:text-[#F5E994]"
                  onClick={() => handleCityClick("Tirupati")}
                >
                  Tirupati
                </p>
              </div>
            </button>
            <Link
              to="/"
              className="relative"
              onClick={() => setOpenProp(!propOpen)}
              ref={propDropdownRef}
            >
              <li className="hidden  hover:underline sm:flex items-center gap-2 relative">
                <span> PROPERTIES </span> <AiFillCaretDown />
                <div
                  className={`${
                    propOpen ? "block" : "hidden"
                  } transition-all duration-1000 absolute top-8 right-0 shadow-md bg-white p-10 space-y-5  rounded-md `}
                >
                  <p
                    className="hover:text-[#F5E994] text-black"
                    onClick={() => handleCategoryClick("Apartments")}
                  >
                    Apartments
                  </p>
                  <p
                    className="hover:text-[#F5E994] text-black"
                    onClick={() => handleCategoryClick("Villas")}
                  >
                    Villas
                  </p>
                  <p
                    className="hover:text-[#F5E994] text-black"
                    onClick={() => handleCategoryClick("Plots")}
                  >
                    Plots
                  </p>
                  <p
                    className="hover:text-[#F5E994] text-black"
                    onClick={() => handleCategoryClick("Row")}
                  >
                    Row Houses
                  </p>
                  <p
                    className="hover:text-[#F5E994] text-black"
                    onClick={() => handleCategoryClick("Villaments")}
                  >
                    Villaments
                  </p>
                  <p
                    className="hover:text-[#F5E994] text-black"
                    onClick={() => handleCategoryClick("Commercial")}
                  >
                    Commercial Properties
                  </p>
                  <p className="hover:text-[#F5E994] text-black">Pent Houses</p>
                </div>
              </li>
            </Link>
            <Link
              to={"/about-us"}
              className="hidden sm:inline   hover:underline"
            >
              ABOUT US
            </Link>
            <Link
              to={"/contact-us"}
              className="hidden sm:inline   hover:underline"
            >
              CONTACT US
            </Link>

            {/* bigscreen end */}

            {/* mobile menu */}
            <div className="block sm:hidden">
              <FaHamburger
                size={32}
                className={`${
                  active ? "text-slate-900" : "text-[#F7F7F8]"
                }text-slate-900  sm:inline hover:brightness-100 relative`}
                onClick={() => setMenuOpen(!menuOpen)}
              />
              <motion.div
                animate={menuOpen ? "open" : "closed"}
                variants={variants}
                className="list bg-white p-4 py-10 text-black shadow-xl flex flex-col gap-5 absolute top-16 w-[90%] right-8 rounded-md h-[90vh] "
              >
                {/* Cities */}

                <Link
                  to="/"
                  className="relative text-slate-900"
                  // onClick={() => setOpenCities(!citieOpen)}
                >
                  <li className="  hover:underline flex items-center gap-2 relative text-slate-900">
                    <button
                      onClick={() => setOpenCitiesMobile(!citieOpenMobile)}
                      className="flex gap-2 items-center"
                    >
                      <li className=""> CITIES </li> <AiFillCaretDown />
                    </button>
                    <div
                      className={`${
                        citieOpenMobile
                          ? "bg-opacity-100 block"
                          : "opacity-0 hidden"
                      } transition-all duration-1000 absolute top-8 left-5 shadow-md text-slate-900 bg-white p-10 space-y-5  rounded-md  flex flex-col gap-5`}
                    >
                      <Link
                        className="hover:text-[#F5E994]"
                        to={"/Cities/Bangalore"}
                        onClick={() => setMenuOpen(false)}
                      >
                        Bangalore
                      </Link>
                      <Link
                        className="hover:text-[#F5E994]"
                        to={"/Cities/Hyderabad"}
                        onClick={() => setMenuOpen(false)}
                      >
                        Hyderabad
                      </Link>
                      <Link
                        className="hover:text-[#F5E994]"
                        to={"/Cities/Tirupati"}
                        onClick={() => setMenuOpen(false)}
                      >
                        Tirupati
                      </Link>
                    </div>
                  </li>
                </Link>

                {/* Properties */}

                <div
                  onClick={() => {
                    setOpenPropMoble(!propOpenMobile);
                    console.log(propOpenMobile);
                  }}
                  className="flex gap-2 items-center relative"
                >
                  <Link className=""> PROPERTIES </Link> <AiFillCaretDown />
                  <div
                    style={{ zIndex: 50 }}
                    className={`${
                      propOpenMobile == true
                        ? "bg-opacity-100 block"
                        : "opacity-0 hidden"
                    } transition-all duration-1000 absolute top-8 right-0 shadow-md bg-white p-10 space-y-5  rounded-md text-slate-900 flex flex-col gap-5 `}
                  >
                    <Link
                      className="hover:text-[#F5E994]  "
                      to={"/Property/Apartments"}
                      onClick={() => setMenuOpen(false)}
                    >
                      Apartments
                    </Link>
                    <Link
                      className="hover:text-[#F5E994] "
                      to={"/Property/Villas"}
                      onClick={() => setMenuOpen(false)}
                    >
                      Villas
                    </Link>
                    <Link
                      className="hover:text-[#F5E994]"
                      to={"/Property/Plots"}
                      onClick={() => setMenuOpen(false)}
                    >
                      Plots
                    </Link>
                    <Link
                      className="hover:text-[#F5E994]"
                      to={"/Property/Row"}
                      onClick={() => setMenuOpen(false)}
                    >
                      Row Houses
                    </Link>
                    <Link
                      className="hover:text-[#F5E994] "
                      to={"/Property/Villaments"}
                      onClick={() => setMenuOpen(false)}
                    >
                      Villaments
                    </Link>
                    <Link
                      className="hover:text-[#F5E994] "
                      to={"/Property/Commercial"}
                      onClick={() => setMenuOpen(false)}
                    >
                      Commercial Properties
                    </Link>
                    <Link
                      className="hover:text-[#F5E994] "
                      to={"/Property/Pent"}
                      onClick={() => setMenuOpen(false)}
                    >
                      Pent Houses
                    </Link>
                  </div>
                </div>

                <Link
                  className="hover:underline"
                  to={"/about-us"}
                  onClick={() => setMenuOpen(false)}
                >
                  ABOUT US
                </Link>
                <li className=" hover:underline">CONTACT US</li>
                <Link to="/sign-in" className=" hover:underline ">
                  SIGN IN
                </Link>
              </motion.div>
            </div>
          </ul>

          {/* Login */}
          {currentUser ? (
            <button
              onClick={() => setProfile(!profile)}
              className="hover:underline hidden sm:inline relative"
            >
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 bg-red-700 text-white  rounded-lg px-3 py-2">
                  <span> Sell Property </span>
                  <motion.div animate="swing" variants={pendulumVariants}>
                    <FaHome size={26} />
                  </motion.div>
                </button>
                <img
                  src={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  alt="profie"
                  className="h-[35px] w-[35px] rounded-full"
                />
              </div>
              {profile && (
                <motion.div className="absolute shadow-md rounded-lg p-5  space-y-3 bg-white right-0 ">
                  {currentUser.admin == 1 && (
                    <Link
                      className="flex items-center text-slate-900 gap-2 whitespace-nowrap"
                      to={"/admin"}
                    >
                      {" "}
                      <MdOutlineAdminPanelSettings size={32} />
                      Admin Panel
                    </Link>
                  )}
                  <Link
                    className="flex items-center text-slate-900 gap-2 whitespace-nowrap"
                    to={"/saved-list"}
                  >
                    <CiSaveDown2 size={32} /> Saved List
                  </Link>
                  <Link
                    className="flex items-center text-slate-900 gap-2 whitespace-nowrap"
                    to={"/my-list"}
                  >
                    <IoCreateOutline size={32} /> My List
                  </Link>

                  <button
                    className="flex items-center text-slate-900 gap-2 whitespace-nowrap"
                    onClick={handleLogout}
                  >
                    {" "}
                    <IoMdLogOut size={32} />
                    Logout{" "}
                  </button>
                </motion.div>
              )}
            </button>
          ) : (
            <div className="rigister flex items-center gap-5 ">
              <Link to={"/sign-in"} className="flex items-center gap-1">
                <CiLogin size={22} />
                Login/Register
              </Link>
              <button className="flex items-center gap-2 bg-red-700 text-white  rounded-lg px-3 py-2">
                <span> Sell Property </span>
                <motion.div animate="swing" variants={pendulumVariants}>
                  <FaHome size={26} />
                </motion.div>
              </button>
            </div>
          )}
        </div>
        {active && (
          <motion.div
            className=" shadow-md font-light bg-[#F7F7F8] hidden md:block"
            animate={active ? "open" : "closed"}
            variants={variants2}
          >
            {/* hr */}
            <hr className=" w-full bg-slate-900" />
            <Container className={"flex items-center justify-between"}>
              <Link
                to={"/Property/Apartments"}
                className="flex items-center gap-1"
              >
                <MdApartment size={25} />
                Apartments
              </Link>
              <Link to={"/Property/Villas"} className="flex items-center gap-1">
                <MdVilla size={25} />
                Villas
              </Link>
              <Link to={"/Property/Plots"} className="flex items-center gap-1">
                <MdGrass size={25} /> Plots
              </Link>
              <Link to={"/Property/Row"} className="flex items-center gap-1">
                <MdHouseSiding size={25} />
                Row Houses
              </Link>
              <Link
                to={"/Property/Villaments"}
                className="flex items-center gap-1"
              >
                <FaBuilding size={22} />
                Villaments
              </Link>
              <Link
                to={"/Property/Commercial"}
                className="flex items-center gap-1"
              >
                <AiFillPropertySafety size={25} />
                Commercial Properties
              </Link>
              <Link to={"/Property/Pent"} className="flex items-center gap-1">
                <GiVikingLonghouse size={25} /> Pent Houses
              </Link>
            </Container>
            {/* hr */}
            <hr className=" w-full bg-slate-900" />
          </motion.div>
        )}
      </header>
    </>
  );
}

export default Header;
