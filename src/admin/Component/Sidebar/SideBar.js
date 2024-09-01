import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { FaCity } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { FaFileCirclePlus } from "react-icons/fa6";
import "./sidebar.css";
import { GiVillage } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";

const SideBar = ({ children }) => {
  const { currentUser } = useSelector((state) => state.user);
  const routes = currentUser.admin
    ? [
        {
          path: "/",
          name: "Home",
          icon: <FaHome size={24} />,
        },
        {
          path: "/admin",
          name: "Property",
          icon: <GiVillage size={26} />,
          exact: true,
          subRoutes: [
            {
              path: "/admin",
              name: "Property List",
              icon: <FaListAlt size={24} />,
            },
            {
              path: "/admin/list/new",
              name: "Add New Property",
              icon: <FaFileCirclePlus size={24} />,
            },
          ],
        },
        {
          path: "/admin/listing",
          name: "Listing",
          icon: <GiVillage size={26} />,
          exact: true,
          subRoutes: [
            {
              path: "/admin/listing/new",
              name: "Add Listing",
              icon: <FaFileCirclePlus size={24} />,
            },
          ],
        },
        {
          path: "/admin/city",
          name: "City",
          icon: <FaCity size={24} />,
          exact: true,
          subRoutes: [
            {
              path: "/admin/city",
              name: "City List",
              icon: <FaListAlt size={24} />,
            },
            {
              path: "/admin/city/new",
              name: "Add New City",
              icon: <FaFileCirclePlus size={24} />,
            },
          ],
        },
        {
          path: "/admin/users",
          name: "Users",
          icon: <FaUser size={24} />,
          exact: true,
          subRoutes: [
            {
              path: "/settings/2fa",
              name: "Users",
              icon: <FaUser size={24} />,
            },
            {
              path: "/settings/2fa",
              name: "Add Users",
              icon: <FaLock size={24} />,
            },
          ],
        },
        {
          path: "/admin/messages",
          name: "Messages",
          icon: <MdMessage size={24} />,
        },

        {
          path: "/settings",
          name: "Settings",
          icon: <BiCog size={24} />,
          exact: true,
          subRoutes: [
            {
              path: "/settings/profile",
              name: "Profile ",
              icon: <FaUser size={24} />,
            },
          ],
        },
        {
          path: "/saved/:id",
          name: "Saved",
          icon: <AiFillHeart size={24} />,
        },
      ]
    : [
        {
          path: "/",
          name: "Home",
          icon: <FaHome size={24} />,
        },
        {
          path: "/admin",
          name: "Property",
          icon: <GiVillage size={26} />,
          exact: true,
          subRoutes: [
            {
              path: "/admin",
              name: "Property List",
              icon: <FaListAlt size={24} />,
            },
            {
              path: "/admin/list/new",
              name: "Add New Property",
              icon: <FaFileCirclePlus size={24} />,
            },
          ],
        },
        {
          path: "/admin/city",
          name: "City",
          icon: <FaCity size={24} />,
          exact: true,
          subRoutes: [
            {
              path: "/admin/city",
              name: "City List",
              icon: <FaListAlt size={24} />,
            },
            {
              path: "/admin/city/new",
              name: "Add New City",
              icon: <FaFileCirclePlus size={24} />,
            },
          ],
        },

        {
          path: "/settings",
          name: "Settings",
          icon: <BiCog size={24} />,
          exact: true,
          subRoutes: [
            {
              path: "/settings/profile",
              name: "Profile ",
              icon: <FaUser size={24} />,
            },
          ],
        },
        {
          path: "/saved/:id",
          name: "Saved",
          icon: <AiFillHeart size={24} />,
        },
      ];

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Asset Makers
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars size={24} onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch size={26} />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main style={{ width: isOpen ? "80%" : "100%" }}>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
