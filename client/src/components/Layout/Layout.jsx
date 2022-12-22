import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

import { useGetUsersQuery } from "../../services/api/api";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  // Learn use case of <Outlet /> (Very Good) https://www.youtube.com/watch?v=dkKlhaeGO7E

  // Gives true if the screen is greater than 600px otherwise false
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const { userId } = useSelector((state) => state.toggleMode);
  // Trying how to request the data from the database using the RTK Query
  const { data } = useGetUsersQuery(userId);
  console.log("🚀 ~ file: Layout.jsx:19 ~ Layout ~ data", data);

  return (
    <Box
      sx={{
        display: `${isNonMobile ? "flex" : "block"}`,
        width: "100%",
        height: "100%",
      }}
    >
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth={`${isNonMobile ? "275px" : "250px"}`}
        user={data || {}}
      />

      <Box width="100%" flexGrow={1}>
        <Navbar user={data || {}} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
