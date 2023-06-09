import { Box, Center, Flex, Avatar, Button, Icon } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxDividerVertical } from "react-icons/rx";
import Sidebar from "./sidebar";
import { useState } from "react";

export default function Navbar() {
  const [side, setSide] = useState(false);
  return (
    <Box>
      <Flex
        fontFamily="roboto"
        fontStyle="normal"
        fontWeight="700"
        lineHeight="41px"
        bgColor="#1D5E48"
        h="60px"
        display="flex"
        alignItems="center"
        //   alignItem="flexStart"

        color="#FFFFFF"
        justifyContent={"space-between"}
        width="1194px"
        zIndex={"2"}
      >
        <Box
          width={"300px"}
          height={"30px"}
          display={"flex"}
          alignItems={"center"}
          padding={"28px"}
          gap={"10px"}
        >
          <AiOutlineMenu
            cursor={"pointer"}
            onClick={() => setSide(!side)}
            fontSize={"25px"}
          />
          <Box fontSize="26px">CASHERE</Box>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap="5px">
          <Box>
            <Box>SANYOBA</Box>
          </Box>
          <RxDividerVertical />
          <Box>
            <Box>Bang Messi</Box>
          </Box>
          <Box>
            <Box>(Cashier)</Box>
          </Box>
          <Box padding="15px">
            <Button width="60px" height="25px" color="#45BB71">
              Logout
            </Button>
          </Box>
        </Box>
      </Flex>
      <Box
        position="fixed"
        left={side ? "0" : "-100%"}
        transition="left 1s ease-in-out"
        zIndex={"0"}
      >
        <Sidebar />
      </Box>
    </Box>
  );
}
