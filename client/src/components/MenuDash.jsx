import { Box, Flex, Input, Select, Icon, Text } from "@chakra-ui/react";
import { GoArrowUp } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function MenuDash() {
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
            defaultValue={"2022-02-02"}
          ></Input>
        </Flex>
      </Flex>
      <Flex
        padding={"20px"}
        justifyContent={"flex-start"}
        flexWrap={"wrap"}
        gap={"16px"}
      >
        <Flex
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
        </Flex>
        <Flex
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
            Total Sales <Icon as={MdKeyboardArrowRight} />
          </Flex>
          <Box height={"30%"} fontWeight={"600"} fontSize={"16px"}>
            Rp 3.730.000
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
        </Flex>
        <Flex
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
            Total Transaction <Icon as={MdKeyboardArrowRight} />
          </Flex>
          <Box height={"30%"} fontWeight={"600"} fontSize={"16px"}>
            40
          </Box>
          <Flex
            height={"30%"}
            gap={"6px"}
            fontSize={"10px"}
            fontWeight={"500"}
            alignItems={"center"}
          >
            <Flex color={"#56D77A"} alignItems={"center"}>
              <Icon height={"18px"} as={GoArrowUp}></Icon>50.00%
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
            Total Product <Icon as={MdKeyboardArrowRight} />
          </Flex>
          <Box height={"30%"} fontWeight={"600"} fontSize={"16px"}>
            139
          </Box>
          <Flex
            height={"30%"}
            gap={"6px"}
            fontSize={"10px"}
            fontWeight={"500"}
            alignItems={"center"}
          >
            <Flex color={"#56D77A"} alignItems={"center"}>
              <Icon height={"18px"} as={GoArrowUp}></Icon>143.86%
            </Flex>
            Compare to yesterday
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
