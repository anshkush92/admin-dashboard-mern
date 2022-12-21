import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

import Navbar from "../Navbar/Navbar";

const Layout = () => {
  // Learn use case of <Outlet /> (Very Good) https://www.youtube.com/watch?v=dkKlhaeGO7E
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default Layout;
