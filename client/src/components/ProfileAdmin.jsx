import {
  Box,
  Flex,
  Button,
  Divider,
  Icon,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
} from "@chakra-ui/react";
import { AiOutlineBell } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function ProfileAdmin() {
  const user = useSelector((state) => state.auth);
  const nav = useNavigate();
  return (
    <Flex
      flexDir={"column"}
      w={"1168px"}
      // width={"auto"}
      height={"154px"}
      marginLeft={"24px"}
    >
      <Box
        bgColor={"white"}
        height={"40%"}
        display={"flex"}
        justifyContent={"end"}
        alignItems={"center"}
        gap={"12px"}
        padding={"0 16px"}
        fontWeight={"bold"}
      >
        <Icon as={AiOutlineBell} />
        <Flex gap={"4px"}>
          <Box fontWeight={"normal"} _hover={{ cursor: "pointer" }}>
            ID
          </Box>
          <Box>|</Box>
          <Box _hover={{ cursor: "pointer" }}>EN</Box>
        </Flex>
        <Menu>
          <MenuButton>
            <Flex
              alignItems={"center"}
              gap={"6px"}
              _hover={{ cursor: "pointer" }}
            >
              <Icon as={MdPersonOutline} />
              <Box fontWeight={"bold"}>{user.name}</Box>
              <Icon as={FiChevronDown} />
            </Flex>
          </MenuButton>

          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem
              color={"red"}
              onClick={() => {
                localStorage.removeItem("auth");
                nav("/login");
              }}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Divider />
      <Box
        height={"40%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"0 16px"}
        bgColor={"white"}
      >
        <Flex alignItems={"center"} fontSize={"18px"}>
          <Icon fontSize={"28px"} as={MdOutlineSpaceDashboard} />
          Dashboard
        </Flex>
        <Button
          height={"30px"}
          width={"120px"}
          colorScheme="green"
          onClick={() => nav("/addProduct")}
        >
          Add Product
        </Button>
      </Box>
      <Divider />
      <Flex
        height={"20%"}
        padding={"0 16px"}
        fontSize={"12px"}
        alignItems={"center"}
      >
        /admin
      </Flex>
    </Flex>
  );
}
