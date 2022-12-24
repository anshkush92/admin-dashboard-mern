import { Box, useTheme } from "@mui/material";
import { useGetCustomersQuery } from "../services/api/api";
import { DataGrid } from "@mui/x-data-grid";

import Header from "../components/Common/Header";
import columns from "../data/columns";

const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();
  const customers = data?.customers;

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CUSTOMERS" subtitle="List of customers .." />
      <Box
        mt="40px"
        pb="4rem"
        height="90vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        {(customers || !isLoading) && (
          <DataGrid
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={customers || []}
            columns={columns}
          />
        )}
      </Box>
    </Box>
  );
};

export default Customers;
