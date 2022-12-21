import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  // Learn use case of <Outlet /> (Very Good) https://www.youtube.com/watch?v=dkKlhaeGO7E

  // Gives true if the screen is greater than 600px otherwise false
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  return (
    <Box
      sx={{
        display: `${isNonMobile ? "flex" : "block"}`,
        width: "100%",
        height: "100%",
      }}
    >
      <Sidebar isNonMobile={isNonMobile} drawerWidth="250px" />

      <Box>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
