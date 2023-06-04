import { Flex, Box, Center } from "@chakra-ui/react";
import TableAdmin from "./TableAdmin";
import MenuDash from "./MenuDash";
import ProfileAdmin from "./ProfileAdmin";
import AreaChart from "./areaChart";

export default function MainAdmin() {
  return (
    <Box>
      <Box
        left={"224px"}
        top={"0px"}
        background={"#FFFFFF"}
        // flexWrap={"wrap"}
        boxSizing="border-box"
      >
        <ProfileAdmin></ProfileAdmin>
      </Box>

      <Box
        top={"154px"}
        left={"224px"}
        // width={"1216px"}
      >
        <MenuDash></MenuDash>
        <Flex flexDir={"column"} gap={"16px"}>
          {/* <AreaChart></AreaChart> */}
          {/* <TableAdmin></TableAdmin> */}
        </Flex>
      </Box>
    </Box>
  );
}
