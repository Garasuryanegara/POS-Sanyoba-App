import { Flex, Box, Center } from "@chakra-ui/react";
import TableAdmin from "./TableAdmin";
import MenuDash from "./MenuDash";
import ProfileAdmin from "./ProfileAdmin";
import AreaChart from "./areaChart";

export default function MainAdmin() {
  return (
    <Box width={"100%"}>
      <Box left={"224px"} top={"0px"} background={"#FFFFFF"}>
        <ProfileAdmin></ProfileAdmin>
      </Box>

      <Box
        top={"154px"}
        left={"224px"}
        width={"100%"}
        // height={"388px"}
      >
        <MenuDash></MenuDash>
      </Box>
      <Flex
        flexDir={"column"}
        gap={"16px"}
        justifyContent={"center"}
        alignItems={"center"}
        // padding={"50px"}
      >
        <AreaChart></AreaChart>
        {/* <TableAdmin></TableAdmin> */}
      </Flex>
    </Box>
  );
}
