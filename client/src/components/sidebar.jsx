import { Box, Center, Flex, Avatar, Button } from "@chakra-ui/react";
import { TbSelect } from "react-icons/tb";
import { useSelector } from "react-redux";
export default function Sidebar() {
  const userSelector = useSelector((state) => state.auth);
  return (
    <Flex
      width="272px"
      height="100vh"
      flexDir="column"
      h="100vh"
      background="#f9f5f6"
    >
      <Center
        fontFamily="Nunito Sans"
        fontStyle="normal"
        fontWeight="700"
        lineHeight="41px"
        bgColor="#1D5E48"
        h="65px"
        flexDir="column"
        w="100%"
        color="#FFFFFF"
      >
        <Box>
          <Box fontSize="14px">SANYOBA</Box>
        </Box>
      </Center>

      <Center flexDir="column" justifyContent="start" padding="10px">
        <Avatar src={userSelector.img_url}></Avatar>
        <Box padding="10px">{userSelector.name}</Box>

        <Box paddingBottom="20px">(Cashier)</Box>

        <Button width="222px" color="#45BB71" border="2px">
          Change Operator
        </Button>
        <Box padding="5px">Outlet</Box>
        <Button width="222px" border="2px" gap="15px">
          Grand Batam Mall
          <TbSelect />
        </Button>
      </Center>
      <Flex flexDir="column" bgColor="#F9F5F6" padding="10px">
        <Box padding="7px">Transaction</Box>
        <Box padding="7px">Activity</Box>
        <Box padding="7px">Report</Box>
        <Box padding="7px 10px 30px">Setting</Box>
        <Box padding="7px">Open Shift</Box>
        <Box padding="7px">Close Shift</Box>
      </Flex>
    </Flex>
  );
}
