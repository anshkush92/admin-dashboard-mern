import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  useTheme,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
} from "@mui/material";

import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";

import { toggleMode } from "../../features/Toggle/ToggleMode.slice";
import { toggleSidebar } from "../../features/Toggle/ToggleSidebar.slice";
import FlexBetween from "../Common/FlexBetween";

const Navbar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  /* The Theme is working because we have wrapped our whole component in the ThemeProvider and given the theme which we wanna use the the mode is dark or light */

  return (
    <AppBar sx={{ position: "static", background: "none", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => dispatch(toggleSidebar())}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            sx={{
              backgroundColor: theme.palette.background.alt,
              borderRadius: "8px",
              padding: "0.1rem 1rem",
              gap: "0.5rem",
            }}
          >
            <InputBase placeholder="Search ..." sx={{ fontSize: "0.9rem" }} />
            <IconButton size="small">
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => dispatch(toggleMode())}>
            {theme.palette.mode === "dark" ? (
              <LightModeOutlined />
            ) : (
              <DarkModeOutlined />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
