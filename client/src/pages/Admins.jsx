import React from "react";

import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { useGetAdminsQuery } from "../services/api/api";
import adminsColumns from "../data/adminsColumns";
import Header from "../components/Common/Header";
import DataGridCustomColumnMenu from "../components/Common/DataGridCustomColumnMenu";

const Admins = () => {
  const { data, isLoading } = useGetAdminsQuery();

  const theme = useTheme();
  const admins = data?.admins;

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="ADMINS" subtitle="Manging Admins and List of admins .." />
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
        {(admins || !isLoading) && (
          <DataGrid
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={admins || []}
            columns={adminsColumns}
            components={{
              ColumnMenu: DataGridCustomColumnMenu,
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default Admins;
