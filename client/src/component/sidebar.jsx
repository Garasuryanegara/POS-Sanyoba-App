import { Box, Center, Flex, Avatar, Button } from "@chakra-ui/react";
import { TbSelect } from "react-icons/tb";
export default function Sidebar() {
  return (
    <Flex width="272px" height="130px" flexDir="column" h="100vh">
      <Center
        fontFamily="Nunito Sans"
        fontStyle="normal"
        fontWeight="700"
        lineHeight="41px"
        bgColor="#1D5E48"
        h="130px"
        flexDir="column"
        w="100%"
        color="#FFFFFF"
      >
        <Box fontSize="30px">CASHERE</Box>
        <Box>
          <Box fontSize="14px">SANYOBA</Box>
        </Box>
      </Center>

      <Center
        flexDir="column"
        justifyContent="start"
        padding="10px"
        background="#FFFEF7"
      >
        <Avatar></Avatar>
        <Box padding="10px">Bang Messi</Box>

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
