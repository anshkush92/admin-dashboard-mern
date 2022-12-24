import React from "react";

import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

import { useGetPerformanceQuery } from "../services/api/api";
import performanceColumns from "../data/performanceColumns";
import Header from "../components/Common/Header";
import DataGridCustomColumnMenu from "../components/Common/DataGridCustomColumnMenu";

const Performance = () => {
  const { userId } = useSelector((state) => state.toggleMode);
  // Getting the combined data of affiliate stats and transaction stats from it by using MONGODB Aggregation
  const { data, isLoading } = useGetPerformanceQuery(userId);
  const theme = useTheme();

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="Performance"
        subtitle="Track your affiliate sales performance .."
      />
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
        {(data || !isLoading) && (
          <DataGrid
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={(data && data.sales) || []}
            columns={performanceColumns}
            components={{
              ColumnMenu: DataGridCustomColumnMenu,
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default Performance;
