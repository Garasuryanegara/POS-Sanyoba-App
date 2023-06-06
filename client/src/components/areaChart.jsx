import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import { Box, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const data1 = [
  {
    day: 1,
    sales: 100000,
  },
  {
    day: 2,
    sales: 230000,
  },
  {
    day: 3,
    sales: 400000,
  },
  {
    day: 4,
    sales: 280000,
  },
];
const data2 = [
  {
    day: 1,
    trans: 10,
  },
  {
    day: 2,
    trans: 9,
  },
  {
    day: 3,
    trans: 18,
  },
  {
    day: 4,
    trans: 12,
  },
];

export default function AreaChart() {
  const [chartData1, SetChartData1] = useState({
    labels: data1.map((val) => val.day),
    datasets: [
      {
        label: "Sales",
        data: data1.map((val) => val.sales),
        backgroundColor: "#6AF681",
        fill: true,
        // fill: 1,
      },
    ],
  });
  const [chartData2, setChartData2] = useState({
    labels: data2.map((val) => val.day),
    datasets: [
      {
        label: "Trans",
        data: data2.map((val) => val.trans),
        backgroundColor: "#6AF681",
        // backgroundColor: "#104034",
        fill: true,
      },
    ],
  });

  return (
    <Flex flexDir={"column"} alignItems={"center"} gap={"16px"}>
      <Box
        width={"1168px"}
        // maxW={"1168px"}
        height={"458px"}
        bgColor={"#ffff"}
        borderRadius={"8px"}
      >
        <Line id="chart1" data={chartData1} />
      </Box>
      <Box
        // width={"1168px"}
        width={"1168px"}
        height={"458px"}
        bgColor={"#ffff"}
        borderRadius={"8px"}
      >
        <Line id="chart2" data={chartData2} />
      </Box>
    </Flex>
  );
}
