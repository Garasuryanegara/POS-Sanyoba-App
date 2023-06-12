import { Box, Flex, Input, Select, Icon, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GoArrowUp } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import moment from "moment";
import axios from "axios";

export default function MenuDash() {
  const [data, setData] = useState();
  const [sumOrder, setSumOrder] = useState();
  const [countOrder, setCountOrder] = useState();
  const [countDetails, setCountDetails] = useState();
  const [date, setDate] = useState();

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  async function fetch1() {
    const data1 = await axios.get("http://localhost:2000/orders", {
      params: {
        time1: date,
        time2: date,
      },
    });
    const data2 = await axios.get("http://localhost:2000/orderDetails", {
      params: {
        time1: date,
        time2: date,
      },
    });
    setData(data1.data);
    setCountDetails(data2.data);
    // console.log(data);
    setSumOrder(data1.data.sum);
    setCountOrder(data1.data.count);
  }

  useEffect(() => {
    fetch1();
  }, [date]);

  return (
    <>
      <Flex
        padding={"20px"}
        justifyContent={"start"}
        gap={"16px"}
        flexWrap={"wrap"}
      >
        <Flex flexDir={"column"} fontSize={"12px"}>
          <Text color={"rgba(53, 53, 53, 0.6);"}>Outlet</Text>
          <Select
            width={"340px"}
            height={"40px"}
            bgColor={"#ffff"}
            type="select"
          >
            <option value="cabang1">Canbang 1</option>
            <option value="cabang2">Canbang 2</option>
          </Select>
        </Flex>
        <Flex flexDir={"column"} fontSize={"12px"}>
          <Text color={"rgba(53, 53, 53, 0.6);"}>Date</Text>
          <Input
            width={"340px"}
            height={"40px"}
            bgColor={"#ffff"}
            type="date"
            defaultValue={moment().format("YYYY-MM-DD")}
            onChange={handleChange}
          ></Input>
        </Flex>
      </Flex>
      <Flex
        padding={"20px"}
        justifyContent={"flex-start"}
        flexWrap={"wrap"}
        gap={"16px"}
      >
        {/* <Flex
          width={"274px"}
          height={"103px"}
          background={"#ffff"}
          borderRadius={"8px"}
          boxShadow={"0px 1px 3px rgba(0, 0, 0, 0.1)"}
          flexDir={"column"}
          // justifyContent={"space-evenly"}
          padding={"8px 16px"}
        >
          <Flex
            height={"40%"}
            alignItems={"center"}
            justifyContent={"space-between"}
            fontWeight={"500"}
            fontSize={"14px"}
          >
            Total Net Profit <Icon as={MdKeyboardArrowRight} />
          </Flex>
          <Box height={"30%"} fontWeight={"600"} fontSize={"16px"}>
            Rp 2.430.000
          </Box>
          <Flex
            height={"30%"}
            gap={"6px"}
            fontSize={"10px"}
            fontWeight={"500"}
            alignItems={"center"}
          >
            <Flex color={"#56D77A"} alignItems={"center"}>
              <Icon height={"18px"} as={GoArrowUp}></Icon>140.53%
            </Flex>
            Compare to yesterday
          </Flex>
        </Flex> */}
        <Flex
          width={"274px"}
          height={"103px"}
          background={"#ffff"}
          borderRadius={"8px"}
          boxShadow={"0px 1px 3px rgba(0, 0, 0, 0.1)"}
          flexDir={"column"}
          padding={"8px 16px"}
        >
          <Flex
            height={"40%"}
            alignItems={"center"}
            justifyContent={"space-between"}
            fontWeight={"500"}
            fontSize={"14px"}
          >
            Total Sales <Icon as={MdKeyboardArrowRight} />
          </Flex>
          <Box height={"30%"} fontWeight={"600"} fontSize={"16px"}>
            {sumOrder
              ? `Rp  ${(sumOrder * 1000)?.toLocaleString("id-ID")}`
              : "-"}
          </Box>
          <Flex
            height={"30%"}
            gap={"6px"}
            fontSize={"10px"}
            fontWeight={"500"}
            alignItems={"center"}
          >
            <Flex color={"#56D77A"} alignItems={"center"}>
              <Icon height={"18px"} as={GoArrowUp}></Icon>
              {data?.percentSum ? `${data?.percentSum}%` : ""}
              {/* 140.53% */}
            </Flex>
            Compare to yesterday
          </Flex>
        </Flex>
        <Flex
          width={"274px"}
          height={"103px"}
          background={"#ffff"}
          borderRadius={"8px"}
          boxShadow={"0px 1px 3px rgba(0, 0, 0, 0.1)"}
          flexDir={"column"}
          padding={"8px 16px"}
        >
          <Flex
            height={"40%"}
            alignItems={"center"}
            justifyContent={"space-between"}
            fontWeight={"500"}
            fontSize={"14px"}
          >
            Total Transaction <Icon as={MdKeyboardArrowRight} />
          </Flex>
          <Box height={"30%"} fontWeight={"600"} fontSize={"16px"}>
            {countOrder ? `${countOrder}` : "-"}
          </Box>
          <Flex
            height={"30%"}
            gap={"6px"}
            fontSize={"10px"}
            fontWeight={"500"}
            alignItems={"center"}
          >
            <Flex color={"#56D77A"} alignItems={"center"}>
              <Icon height={"18px"} as={GoArrowUp}></Icon>
              {data?.percentCount ? `${data?.percentCount}%` : ""}
              {/* 50.00% */}
            </Flex>
            Compare to yesterday
          </Flex>
        </Flex>
        <Flex
          width={"274px"}
          height={"103px"}
          background={"#ffff"}
          borderRadius={"8px"}
          boxShadow={"0px 1px 3px rgba(0, 0, 0, 0.1)"}
          flexDir={"column"}
          padding={"8px 16px"}
        >
          <Flex
            height={"40%"}
            alignItems={"center"}
            justifyContent={"space-between"}
            fontWeight={"500"}
            fontSize={"14px"}
          >
            Total Product <Icon as={MdKeyboardArrowRight} />
          </Flex>
          <Box height={"30%"} fontWeight={"600"} fontSize={"16px"}>
            {countDetails?.sum ? `${countDetails?.sum}` : "-"}
          </Box>
          <Flex
            height={"30%"}
            gap={"6px"}
            fontSize={"10px"}
            fontWeight={"500"}
            alignItems={"center"}
          >
            <Flex color={"#56D77A"} alignItems={"center"}>
              <Icon height={"18px"} as={GoArrowUp}></Icon>
              {countDetails?.percentSum ? `${countDetails?.percentSum}%` : ""}
            </Flex>
            Compare to yesterday
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
