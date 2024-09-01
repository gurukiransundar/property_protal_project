import React from "react";
import ExampleWithLocalizationProvider from "../Component/DataTable/Provider";
import Container from "../../component/Container";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "axios";
import { useSelector } from "react-redux";
function AdminHome() {
  const { currentUser } = useSelector((state) => state.user);

  const getProperty = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}/list`);
      return res.data;
    } catch (error) {
      console.log(error);
      toast.error("Internal Error");
    }
  };
  const getSingleProperty = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_URL}/list/${currentUser.id}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
      toast.error("Internal Error");
    }
  };

  const { isLoading, data, isError } = useQuery({
    queryKey: currentUser.admin ? ["propertylist"] : ["propertylistSingle"],
    queryFn: currentUser.admin ? getProperty : getSingleProperty,
  });

  if (isLoading) return "Loading...";

  return (
    <div>
      <Container className={"space-y-5"}>
        <div>
          <h2>Admin DashBoard</h2>
          <p>manage your data here</p>
          <hr className="bg-[#FECE51] w-32 h-1" />
        </div>

        <ExampleWithLocalizationProvider data={isError ? [] : data} />
      </Container>
    </div>
  );
}

export default AdminHome;
