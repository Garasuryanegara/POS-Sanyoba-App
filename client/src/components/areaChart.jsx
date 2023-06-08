import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import { Box, Flex, Select, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

export default function AreaChart() {
  ///
  const [chart, setChart] = useState();
  const [date1, setDate1] = useState();
  const [date2, setDate2] = useState(moment().format("YYYY-MM-DD"));

  async function fetch() {
    const data = await axios.get("http://localhost:2000/orders", {
      params: {
        time1: date1,
        time2: date2,
      },
    });
    setChart(data.data.rows.sort().reverse());
    // console.log(data.data.rows.reverse());
  }

  useEffect(() => {
    fetch();
  }, []);

  ////

  const [select, setSelect] = useState("week");
  const handleChange = (event) => {
    setSelect(event.target.value);

    // console.log(event.target.value);
  };
  useEffect(() => {
    console.log(select);
    if (select === "week") {
      setDate1(moment().add(-6, "day").format("YYYY-MM-DD"));
    } else if (select === "month") {
      setDate1(moment().add(-1, "month").format("YYYY-MM-DD"));
    } else if (select === "year") {
      setDate1(moment().add(-1, "year").format("YYYY-MM-DD"));
    }
  }, [select]);
  useEffect(() => {
    if (date1) {
      console.log(date1);
      fetch();
    }
  }, [date1]);

  ////
  const [chartData1, SetChartData1] = useState({
    labels: [],
    datasets: [
      {
        label: "Total Sales",
        data: [],
        backgroundColor: "#1d5e48",
        fill: true,
      },
    ],
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  const [chartData2, SetChartData2] = useState({
    labels: [],
    datasets: [
      {
        label: "Total Transaction",
        data: [],
        backgroundColor: "#1d5e48",
        fill: true,
      },
    ],
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  ///
  //data1
  let data = async () =>
    await chart?.reduce((prev, curr) => {
      if (prev[curr.createdAt?.split("T")[0]]) {
        if (select == "week" || select == "month") {
          prev[curr.createdAt?.split("T")[0]] += Number(curr.total);
        } else if (select == "year") {
          prev[curr.createdAt?.split("T")[0].slice(0, 6)] += Number(curr.total);
        }
      } else {
        if (select == "week" || select == "month") {
          prev[curr.createdAt?.split("T")[0]] = Number(curr.total);
        } else if (select == "year") {
          prev[curr.createdAt?.split("T")[0].slice(0, 7)] = Number(curr.total);
        }
      }
      return prev;
    }, {});
  //data2
  let data2 = async () =>
    await chart?.reduce((prev, curr) => {
      if (prev[curr.createdAt?.split("T")[0]]) {
        if (select == "week" || select == "month") {
          prev[curr.createdAt?.split("T")[0]] += 1; // Increment the count by 1
        } else if (select == "year") {
          prev[curr.createdAt?.split("T")[0].slice(0, 6)] += 1; // Increment the count by 1
        }
      } else {
        if (select == "week" || select == "month") {
          prev[curr.createdAt?.split("T")[0]] = 1; // Initialize the count as 1
        } else if (select == "year") {
          prev[curr.createdAt?.split("T")[0].slice(0, 7)] = 1; // Initialize the count as 1
        }
      }
      return prev;
    }, {});

  //fetch
  useEffect(() => {
    if (chart) {
      const fetchData = async () => {
        const chart = await data();
        const labels = chart ? Object.keys(chart) : [];
        const values = chart ? Object.values(chart) : [];

        SetChartData1((prevData) => ({
          ...prevData,
          labels: labels,
          datasets: [
            {
              ...prevData.datasets[0],
              data: values,
            },
          ],
        }));
      };
      // console.log(chartData1);
      fetchData();
    }
    if (chart) {
      const fetchData = async () => {
        const chart = await data2();
        const labels = chart ? Object.keys(chart) : [];
        const values = chart ? Object.values(chart) : [];

        SetChartData2((prevData) => ({
          ...prevData,
          labels: labels,
          datasets: [
            {
              ...prevData.datasets[0],
              data: values,
            },
          ],
        }));
      };
      // console.log(chartData2);
      fetchData();
    }
  }, [chart]);

  return (
    <Flex
      flexDir={"column"}
      alignItems={"center"}
      gap={"16px"}
      width={"100%"}
      padding={"0 16px"}
    >
      <Flex width={"100%"} justifyContent={"left"}>
        <Flex flexDir={"column"} fontSize={"12px"}>
          <Text color={"rgba(53, 53, 53, 0.6);"}>Charts</Text>
          <Select
            width={"340px"}
            height={"40px"}
            bgColor={"#ffff"}
            type="select"
            onChange={handleChange}
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="year">Last Year</option>
          </Select>
        </Flex>
      </Flex>

      <Box
        // width={"100%"}
        width={"100%"}
        height={"320px"}
        bgColor={"#ffff"}
        borderRadius={"8px"}
        padding={"16px"}
        boxShadow={"0px 1px 3px rgba(0, 0, 0, 0.1)"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Line id="chart1" data={chartData1} />
      </Box>
      <Box
        // width={"100%"}
        width={"100%"}
        height={"320px"}
        bgColor={"#ffff"}
        borderRadius={"8px"}
        padding={"16px"}
        boxShadow={"0px 1px 3px rgba(0, 0, 0, 0.1)"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Line id="chart2" data={chartData2} />
      </Box>
    </Flex>
  );
}
