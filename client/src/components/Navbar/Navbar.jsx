import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  useTheme,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Button,
  Avatar,
  Typography,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";

import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
  ArrowDropUpOutlined,
  Logout,
} from "@mui/icons-material";

import { toggleMode } from "../../features/Toggle/ToggleMode.slice";
import { toggleSidebar } from "../../features/Toggle/ToggleSidebar.slice";
import FlexBetween from "../Common/FlexBetween";

const Navbar = ({ user }) => {
  // State for managing the anchor element for the dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);
  const isDropdownOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Avatar alt={user.name} />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>

                <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              {isDropdownOpen ? (
                <ArrowDropDownOutlined
                  sx={{
                    color: theme.palette.secondary[300],
                    fontSize: "35px",
                  }}
                />
              ) : (
                <ArrowDropUpOutlined
                  sx={{
                    color: theme.palette.secondary[300],
                    fontSize: "35px",
                  }}
                />
              )}
            </Button>
            <Menu
              anchorEl={anchorEl}
              disableScrollLock={true}
              open={isDropdownOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
