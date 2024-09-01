import React, { useEffect } from "react";

import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import { motion } from "framer-motion";

import List from "./pages/List/List";
import SinglePage from "./pages/singlepage/SinglePage";
import AdminHeader from "./admin/Component/AdminHeader";
import AdminHome from "./admin/Pages/AdminHome";

import City from "./admin/Pages/City/City";
import MyList from "./pages/MyList";
import SavedList from "./pages/SavedList";
import SideBar from "./admin/Component/Sidebar/SideBar";
import SingleCity from "./admin/Pages/City/SingleCity";
import { GiVillage } from "react-icons/gi";

import CitiesBangalore from "./pages/Cities/CitiesBangalore";
import CitiesHyderabad from "./pages/Cities/CitiesHyderabad";
import CitiesTirupati from "./pages/Cities/CitiesTirupati";
import PropertyAparment from "./pages/Property/PropertyAparment";
import PropertyCommercial from "./pages/Property/PropertyCommercial";
import PropertyPent from "./pages/Property/PropertyPent";
import PropertyPlot from "./pages/Property/PropertyPlot";
import PropertyRow from "./pages/Property/PropertyRow";
import PropertyVilla from "./pages/Property/PropertyVilla";
import PropertyVillament from "./pages/Property/PropertyVillament";
import NewPostPage from "./component/newPost";

import { useSelector, UseSelector } from "react-redux";

import AdminUsers from "./admin/Pages/users/AdminUsers";
import AdminMessages from "./admin/Pages/Message/AdminMessages";
import SingleUserMessages from "./admin/Pages/Message/SingleUserMessages";

import SingleProperty from "./admin/Pages/Property/SingleProperty/SingleProperty";
import PropertyList from "./admin/Pages/Listing/Listing";

const Layout = () => {
  return (
    <>
      <Header />

      <div className="mt-16">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

const AdminLayout = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) return navigate("/");
  }, [currentUser]);
  return (
    currentUser && (
      <>
        {/* <AdminHeader /> */}

        <SideBar>
          <Outlet />
        </SideBar>
      </>
    )
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/my-list",
        element: <MyList />,
      },
      {
        path: "/saved-list",
        element: <SavedList />,
      },
      {
        path: "/list",
        element: <List />,
      },
      {
        path: "/list/:filters?",
        element: <List />,
      },
      {
        path: "/:id",
        element: <SinglePage />,
      },
      {
        path: "/Cities/Bangalore",
        element: <CitiesBangalore />,
      },
      {
        path: "/Cities/Hyderabad",
        element: <CitiesHyderabad />,
      },
      {
        path: "/Cities/Tirupati",
        element: <CitiesTirupati />,
      },
      {
        path: "/Property/Apartments",
        element: <PropertyAparment />,
      },
      {
        path: "/Property/Commercial",
        element: <PropertyCommercial />,
      },
      {
        path: "/Property/Pent",
        element: <PropertyPent />,
      },
      {
        path: "/Property/Plots",
        element: <PropertyPlot />,
      },
      {
        path: "/Property/Row",
        element: <PropertyRow />,
      },
      {
        path: "/Property/Villas",
        element: <PropertyVilla />,
      },
      {
        path: "/Property/Villaments",
        element: <PropertyVillament />,
      },
      {
        path: "/newPost",
        element: <NewPostPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminHome />,
      },

      {
        path: "/admin/list/:id",
        element: <SingleProperty />,
      },

      {
        path: "/admin/city",
        element: <City />,
      },
      {
        path: "/admin/city/:id",
        element: <SingleCity />,
      },
      {
        path: "/admin/users",
        element: <AdminUsers />,
      },
      {
        path: "/admin/messages",
        element: <AdminMessages />,
      },
      {
        path: "/admin/messages/:id",
        element: <SingleUserMessages />,
      },
      {
        path: "/admin/listing/new",
        element: <PropertyList />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
