import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import {
  ChevronLeft,
  ChevronRightOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

import FlexBetween from "../Common/FlexBetween";
import { toggleSidebar } from "../../features/Toggle/ToggleSidebar.slice";
import navItems from "../../data/navItems";

const Sidebar = ({ drawerWidth, isNonMobile, user }) => {
  console.log("🚀 ~ file: Sidebar.jsx:26 ~ Sidebar ~ user", user);
  const [activePage, setActivePage] = useState("");
  // console.log("🚀 ~ file: Sidebar.jsx:42 ~ Sidebar ~ activePage", activePage);

  const { isSidebarOpen } = useSelector((state) => state.toggleSidebar);
  // console.log("🚀 ~ file: Sidebar.jsx:39 ~ navItems", navItems);

  // Very Good use of useLocation() hook ---> https://www.youtube.com/watch?v=GlP2yASKjLM
  // To get the page on which we are currently
  const { pathname } = useLocation();

  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleListItemClick = (text) => {
    navigate(`/${text}`);
    setActivePage(text);
  };

  useEffect(() => {
    // To set the page on which we are currently
    setActivePage(pathname.substring(1));
  }, [pathname]);

  return (
    isSidebarOpen && (
      <Box component="nav" height="100%">
        <Drawer
          open={isSidebarOpen}
          onClose={() => dispatch(toggleSidebar())}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
              position: "relative",
            },
          }}
        >
          <Box width="100%" marginBottom="7.25rem">
            <Box sx={{ margin: "1.5rem 2rem 2rem 3rem" }}>
              <FlexBetween sx={{ color: theme.palette.secondary.main }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <Typography variant="h4" fontWeight="bold">
                    ECOMVISION
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => dispatch(toggleSidebar())}>
                    <ChevronLeft sx={{ fontSize: "2rem" }} />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }, index) => {
                if (icon === null) {
                  return (
                    <Typography
                      key={text}
                      sx={{ margin: "2.25rem 0 1rem 3rem" }}
                    >
                      {text}
                    </Typography>
                  );
                }

                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => handleListItemClick(lcText)}
                      sx={{
                        backgroundColor:
                          activePage === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          activePage === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                        "&:hover": {
                          backgroundColor:
                            activePage === lcText &&
                            theme.palette.secondary[300],
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            activePage === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {activePage === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Box sx={{ position: "absolute", bottom: "2rem" }}>
            <Divider />
            <FlexBetween
              sx={{
                textTransform: "none",
                gap: "2rem",
                m: "1.5rem 2rem 0 3rem",
              }}
            >
              <Box>
                <Avatar alt={user.name} />
              </Box>
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>

                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <SettingsOutlined sx={{ color: theme.palette.secondary[300] }} />
            </FlexBetween>
          </Box>
        </Drawer>
      </Box>
    )
  );
};

export default Sidebar;
