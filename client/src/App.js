import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import themeSettings from "./theme";
import Layout from "./components/Layout/Layout";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Transactions from "./pages/Transactions";
import Geography from "./pages/Geography";
import Overview from "./pages/Overview";
import Daily from "./pages/Daily";
import Monthly from "./pages/Monthly";
import Breakdown from "./pages/Breakdown";

function App() {
  // Gets the current mode state from the redux store
  const { mode } = useSelector((state) => state.toggleMode);
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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/monthly" element={<Monthly />} />
            <Route path="/breakdown" element={<Breakdown />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
