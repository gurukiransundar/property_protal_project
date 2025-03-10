//Date Picker Imports - these should just be in your Context Provider
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Table from "./Table";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast, Toaster } from "sonner";
import axios from "axios";
import { queryClient } from "../../../index";
const ExampleWithLocalizationProvider = ({ data }) => {
  const [open, setOpen] = useState(false);

  //App.tsx or AppProviders file
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (params) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_URL}/list/${params.id}`
      );

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const mutation = useMutation({
    mutationFn: handleDelete,
    onSuccess: async (data) => {
      toast.success(data.message);
      handleClose();

      return queryClient.invalidateQueries({ queryKey: ["propertylist"] });
    },
    onError: (data) => {
      toast.error(data);
      console.log(data);
    },
  });
  console.log(
    "queryclient",
    queryClient.getQueryCache().find(["propertylist"])
  );
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Table
          data={data}
          handleClose={handleClose}
          open={open}
          setOpen={setOpen}
          mutation={mutation}
        />
      </LocalizationProvider>
      <Toaster richColors />
    </div>
  );
};

export default ExampleWithLocalizationProvider;
