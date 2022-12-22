import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
  CircularProgress,
  Grid,
} from "@mui/material";

import Header from "../components/Common/Header";
import { useGetProductsQuery } from "../services/api/api";

const Products = () => {
  // For getting the products from the Database, using RTK Query
  const { data, isLoading } = useGetProductsQuery();
  console.log("🚀 ~ file: Products.jsx:23 ~ Products ~ data", data);
  const theme = useTheme();

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See your list of products .." />
      {data || isLoading ? (
        <Grid container rowSpacing="20px" columnSpacing="1.33%">
          {data?.productWithStats?.map((product, index) => (
            <Grid key={index} item xs={12} md={6} lg={3}>
              Hello
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default Products;
