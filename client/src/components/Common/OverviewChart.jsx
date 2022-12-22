import { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";

import { useGetSalesQuery } from "../../services/api/api";

const OverviewChart = ({ isDashboard = false, view }) => {
  const { data, isLoading } = useGetSalesQuery();
  console.log("🚀 ~ file: OverviewChart.jsx:9 ~ OverviewChart ~ data", data);

  const theme = useTheme();

  // To make sure that this value doesn't change every time the component re-renders
  const [totalSalesLine, totalUnitsLine] = useMemo(() => {
    if (!data) return [];

    const { overallStat } = data;
    const { dailyData, monthlyData } = overallStat[0];

    const totalSalesLine = {
      id: "totalSales",
      color: theme.palette.primary[600],
      data: [],
    };

    Object.values(monthlyData).reduce(
      (acc, { month, totalSales, totalUnits }) => {
        const curSales = acc.sales + totalSales;
        const curUnits = acc.units + totalUnits;

        totalSalesLine.data = [
          ...totalSalesLine.data,
          { x: month, y: curSales },
        ];
        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          { x: month, y: curUnits },
        ];

        return { sales: curSales, units: curUnits };
      },
      { sales: 0, units: 0 }
    );

    return [[totalSalesLine], [totalUnitsLine]];
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  return <div>OverviewChart</div>;
};

export default OverviewChart;
