import { useState } from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";

const ProductCard = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  yearlyTotalSoldUnits,
  yearlySalesTotal,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();
  return (
    <Card
      sx={{
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14, color: theme.palette.secondary[700] }}
          gutterBottom
        >
          {category.toUpperCase()}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: "1.5rem", color: theme.palette.secondary[400] }}>
          ${Number(price).toFixed(3)}
        </Typography>

        <Rating value={rating} precision={0.5} readOnly />

        <Typography variant="body2">{description}</Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      </CardActions>

      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{ color: theme.palette.neutral[300] }}
      >
        <CardContent>
          <Typography>id: {_id}</Typography>
          <Typography>Supply Left: {supply}</Typography>
          <Typography>Yearly Sales This Year: {yearlySalesTotal}</Typography>
          <Typography>
            Yearly Units Sold This Year: {yearlyTotalSoldUnits}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProductCard;
