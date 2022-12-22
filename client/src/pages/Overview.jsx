import { useState } from "react";

import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material";

import Header from "../components/Common/Header";
import OverviewChart from "../components/Common/OverviewChart";

const Overview = () => {
  // Toggle between the 2 views
  const [view, setView] = useState("units");

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="OVERVIEW"
        subtitle="Overview of general revenue and product ..."
      />
      <Box mt="10px" mb="40px">
        <Box height="75vh" width="100%">
          <FormControl sx={{ mt: "1rem" }}>
            <InputLabel id="view">View</InputLabel>
            <Select
              label="View"
              value={view}
              labelId="view"
              onChange={(e) => setView(e.target.value)}
            >
              <MenuItem value="units">Units</MenuItem>
              <MenuItem value="sales">Sales</MenuItem>
            </Select>
          </FormControl>
          <OverviewChart view={view} />
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
