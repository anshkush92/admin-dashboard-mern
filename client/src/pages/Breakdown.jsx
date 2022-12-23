import { Box } from "@mui/material";

import Header from "../components/Common/Header";
import BreakdownChart from "../components/Common/BreakdownChart";

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales by Category ..." />
      <Box mt="40px" pb="4rem">
        <Box height="75vh">
          <BreakdownChart />
        </Box>
      </Box>
    </Box>
  );
};

export default Breakdown;
