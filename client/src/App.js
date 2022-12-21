import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import themeSettings from "./theme";
import Layout from "./components/Layout/Layout";

import Dashboard from "./pages/Dashboard";

function App() {
  // Gets the current mode state from the redux store
  const { mode } = useSelector((state) => state.toggleMode);
  // // console.log("🚀 ~ file: App.js:8 ~ App ~ mode", mode);

  const theme = createTheme(themeSettings(mode));

  // Learn why do we use <CssBaseline />  https://mui.com/material-ui/react-css-baseline/#approach
  // <Layout /> will be in every route nested inside it

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
