import {
  Box,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Table,
  Td,
  Th,
  Tr,
} from "@chakra-ui/react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { LuDelete } from "react-icons/lu";
import {
  BiCreditCardAlt,
  BiCreditCard,
  BiMoney,
  BiWalletAlt,
} from "react-icons/bi";
import { MdOutlinePersonOutline } from "react-icons/md";
import "./TrxDetCSS.css";
import Kalkulator from "./Kalkulator";

export default function ContentFlexansactionDetail() {
  return (
    <Box
      maxW={"1194px"}
      w={"100%"}
      h={"834px"}
      bgColor={"#F1F1F1"}
      paddingTop={"112px"}
    >
      <Flex
        w={"100%"}
        h={"35px"}
        padding={"0px 24px"}
        bg={"#FFFFFF"}
        fontFamily={"roboto"}
        fontWeight={"600"}
        fontSize={"16px"}
        alignItems={"center"}
      >
        <Flex w={"100%"} justifyContent={"space-between"}>
          <Flex w={"20px"} alignItems={"center"}>
            <HiOutlineArrowLeft fontSize={"24px"} />
          </Flex>
          Transaction Details
          <Box w={"20px"}></Box>
        </Flex>
      </Flex>
      <Flex h={"687px"} padding={"24px"} gap={"24px"}>
        <Box w={"252px"} bg={"#FFFFFF"} borderRadius={"8px"}>
          <Center
            w={"155px"}
            h={"55px"}
            fontFamily={"roboto"}
            fontWeight={"600"}
            fontSize={"16px"}
            paddingBottom={"16px"}
          >
            Payment Method
          </Center>
          <Flex
            h={"64px"}
            paddingLeft={"24px"}
            alignItems={"center"}
            fontFamily={"roboto"}
            fontWeight={"400"}
            fontSize={"16px"}
            gap={"8px"}
          >
            <Center w={"32px"} h={"32px"} borderRadius={"8px"} bg={"#F3FFFC"}>
              <BiMoney fontSize={"24px"} color="#267B59" />
            </Center>
            Cash
          </Flex>
          <Flex
            h={"64px"}
            paddingLeft={"24px"}
            alignItems={"center"}
            fontFamily={"roboto"}
            fontWeight={"400"}
            fontSize={"16px"}
            gap={"8px"}
          >
            <Center w={"32px"} h={"32px"} borderRadius={"8px"} bg={"#F3FFFC"}>
              <BiCreditCard fontSize={"24px"} color="#267B59" />
            </Center>
            Local Card
          </Flex>
          <Flex
            h={"64px"}
            paddingLeft={"24px"}
            alignItems={"center"}
            fontFamily={"roboto"}
            fontWeight={"400"}
            fontSize={"16px"}
            gap={"8px"}
          >
            <Center w={"32px"} h={"32px"} borderRadius={"8px"} bg={"#F3FFFC"}>
              <BiCreditCardAlt fontSize={"24px"} color="#267B59" />
            </Center>
            International Card
          </Flex>
          <Flex
            h={"64px"}
            paddingLeft={"24px"}
            alignItems={"center"}
            fontFamily={"roboto"}
            fontWeight={"400"}
            fontSize={"16px"}
            gap={"8px"}
          >
            <Center w={"32px"} h={"32px"} borderRadius={"8px"} bg={"#F3FFFC"}>
              <BiWalletAlt fontSize={"24px"} color="#267B59" />
            </Center>
            E-Wallet
          </Flex>
        </Box>
        <Box
          w={"397px"}
          bg={"#FFFFFF"}
          borderRadius={"8px"}
          display={"grid"}
          justifyItems={"center"}
        >
          <Flex
            w={"365px"}
            h={"399px"}
            flexDir={"column"}
            gap={"16px"}
            padding={"16px"}
          >
            <Box fontFamily={"roboto"} fontWeight={"600"} fontSize={"16px"}>
              Cash
            </Box>
            {/* start kalkulator */}
            <Kalkulator />
            {/* end kalkulator */}
          </Flex>
          <Flex
            w={"100%"}
            h={"169px"}
            marginTop={"70px"}
            borderBottomRadius={"8px"}
            flexDir={"column"}
          >
            <Center
              h={"51px"}
              fontFamily={"roboto"}
              fontWeight={"600"}
              fontSize={"16px"}
              color={"#353535"}
              borderTop={"1px solid lightgrey"}
            >
              Cash Drawer
            </Center>
            <Flex
              h={"51"}
              fontFamily={"roboto"}
              fontWeight={"600"}
              fontSize={"16px"}
              color={"#353535"}
              borderTop={"1px solid lightgrey"}
            >
              <Center w={"50%"} borderRight={"1px solid lightgrey"}>
                Split
              </Center>
              <Center w={"50%"}>Note</Center>
            </Flex>
            <Center
              h={"67px"}
              borderBottomRadius={"8px"}
              fontFamily={"roboto"}
              fontWeight={"600"}
              fontSize={"16px"}
              color={"white"}
              bg={"#369A64"}
            >
              Charge
            </Center>
          </Flex>
        </Box>
        <Box
          w={"449px"}
          bg={"#FFFFFF"}
          borderRadius={"8px"}
          padding={" 16px 0px"}
        >
          <Flex
            h={"51px"}
            justifyContent={"space-between"}
            padding={"0px 16px 16px 16px"}
          >
            <Flex w={"168px"} h={"24px"} justifyContent={"space-between"}>
              <Flex w={"110px"} gap={"8px"} borderRight={"2px solid black"}>
                <Center>
                  <MdOutlinePersonOutline fontSize={"16px"} />
                </Center>
                <Center
                  fontFamily={"roboto"}
                  fontWeight={"500"}
                  fontSize={"16px"}
                >
                  Customer
                </Center>
              </Flex>
              <Center
                fontFamily={"roboto"}
                fontWeight={"500"}
                fontSize={"16px"}
              >
                Dine In
              </Center>
            </Flex>
            <Center
              w={"68px"}
              h={"35px"}
              bg={"#ECECEC"}
              borderRadius={"8px"}
              fontFamily={"roboto"}
              fontWeight={"400"}
              fontSize={"16px"}
            >
              0001
            </Center>
          </Flex>
          <Box h={"429px"}>
            <Flex
              h={"35px"}
              w={"100%"}
              bg={"#615E5B"}
              fontFamily={"Roboto"}
              fontStyle={"normal"}
              fontWeight={"600"}
              fontSize={"16px"}
              color={"white"}
              padding={"0px 8px"}
            >
              <Flex
                w={"208px"}
                paddingLeft={"8px"}
                alignItems={"center"}
                borderRight={"1px"}
                borderColor={"black"}
              >
                Item
              </Flex>
              <Flex
                w={"119px"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRight={"1px"}
                borderColor={"black"}
              >
                Qty
              </Flex>
              <Flex w={"119px"} justifyContent={"center"} alignItems={"center"}>
                Price
              </Flex>
            </Flex>
            <Flex
              h={"43px"}
              w={"100%"}
              bg={"white"}
              fontFamily={"Roboto"}
              fontStyle={"normal"}
              fontWeight={"600"}
              fontSize={"16px"}
              color={"#615E5B"}
              padding={"0px 8px"}
            >
              <Flex w={"208px"} paddingLeft={"8px"} alignItems={"center"}>
                {/* {val.name} */}
                test
              </Flex>
              <Flex w={"119px"} justifyContent={"center"} alignItems={"center"}>
                {/* {val.qty + " Pcs"} */}
                test
              </Flex>
              <Flex w={"119px"} justifyContent={"center"} alignItems={"center"}>
                {/* Rp. {val.price} */}
                test
              </Flex>
            </Flex>
          </Box>
          <Flex
            h={"127px"}
            padding={"0px 16px"}
            rowGap={"8px"}
            flexDir={"column"}
          >
            <Flex h={"19px"} justifyContent={"space-between"}>
              <Flex fontFamily={"Roboto"} fontWeight={"600"} fontSize={"16px"}>
                Sub Total
              </Flex>
              <Flex fontFamily={"Roboto"} fontWeight={"600"} fontSize={"16px"}>
                Rp. 148.000
              </Flex>
            </Flex>
            <Flex h={"19px"} justifyContent={"space-between"}>
              <Flex fontFamily={"Roboto"} fontWeight={"600"} fontSize={"16px"}>
                Tax (10%)
              </Flex>
              <Flex fontFamily={"Roboto"} fontWeight={"600"} fontSize={"16px"}>
                Rp. 14.800
              </Flex>
            </Flex>
            <Flex h={"19px"} justifyContent={"space-between"}>
              <Flex fontFamily={"Roboto"} fontWeight={"700"} fontSize={"16px"}>
                Total Amount
              </Flex>
              <Flex fontFamily={"Roboto"} fontWeight={"700"} fontSize={"16px"}>
                Rp. 162.800
              </Flex>
            </Flex>
            <Flex h={"19px"} justifyContent={"space-between"}>
              <Flex fontFamily={"Roboto"} fontWeight={"600"} fontSize={"16px"}>
                Cash
              </Flex>
              <Flex fontFamily={"Roboto"} fontWeight={"600"} fontSize={"16px"}>
                Rp. 200.000
              </Flex>
            </Flex>
            <Flex h={"19px"} justifyContent={"space-between"}>
              <Flex fontFamily={"Roboto"} fontWeight={"600"} fontSize={"16px"}>
                Change
              </Flex>
              <Flex
                fontFamily={"Roboto"}
                fontWeight={"600"}
                fontSize={"16px"}
                color={"red"}
              >
                Rp. 37.200
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
