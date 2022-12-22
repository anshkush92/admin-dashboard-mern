import { Box, CircularProgress, Grid } from "@mui/material";

import Header from "../components/Common/Header";
import { useGetProductsQuery } from "../services/api/api";
import ProductCard from "../components/Common/ProductCard";

const Products = () => {
  // For getting the products from the Database, using RTK Query
  const { data, isLoading } = useGetProductsQuery();
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See your list of products .." />
      {data || isLoading ? (
        <Grid
          container
          rowSpacing="20px"
          mt="8px"
          pb="4rem"
          columnSpacing="1.33%"
        >
          {data?.productWithStats?.map(
            ({
              _id,
              name,
              description,
              price,
              rating,
              category,
              supply,
              yearlyTotalSoldUnits,
              yearlySalesTotal,
            }) => (
              <Grid key={_id} item xs={12} md={6} lg={3}>
                <ProductCard
                  key={_id}
                  _id={_id}
                  name={name}
                  description={description}
                  price={price}
                  rating={rating}
                  category={category}
                  supply={supply}
                  yearlySalesTotal={yearlySalesTotal}
                  yearlyTotalSoldUnits={yearlyTotalSoldUnits}
                />
              </Grid>
            )
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default Products;
