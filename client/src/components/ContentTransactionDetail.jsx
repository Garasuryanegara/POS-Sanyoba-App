import {
  Box,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Modal,
  ModalContent,
  ModalOverlay,
  Table,
  Td,
  Th,
  Tr,
  useDisclosure,
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
import { useEffect, useState } from "react";
import { api } from "../api/api";
import { Await, Link } from "react-router-dom";
import ModalTrxDetail from "./ModalTrxDetail";

export default function ContentFlexansactionDetail() {
  const [cashValue, setCashValue] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState("");
  const [orderDetails, setorderDetails] = useState();
  const [isClicked, setIsClicked] = useState();
  const charge = () => {
    console.log(input);
    setCashValue(input);
  };
  useEffect(() => {
    setorderDetails(JSON.parse(localStorage.getItem("order_id")));
  });
  // get order list
  const [orderList, setOrderList] = useState([]);
  const getOrder = async () => {
    const result = await api.get("/orderDetails/trans", {
      params: { order_id: orderDetails },
    });
    console.log(result.data);
    setOrderList(result.data);
  };
  useEffect(() => {
    if (orderDetails) {
      getOrder();
    }
  }, [orderDetails]);
  useEffect(() => {
    if (orderList.length) {
      console.log(orderList);
    }
  }, [orderList]);
  //perhitungan total price
  const totalPrice = orderList.reduce((accumulator, val) => {
    console.log(val.qty);
    return accumulator + Number(val.Menu.price * val.qty);
  }, 0);

  //perhitungan tax 10%
  const tax = totalPrice * (10 / 100);

  //perhitungan total amount
  const totalAmount = totalPrice + tax;

  //berubah warna saat click
  const handleClicked = (e) => {
    setIsClicked(e.target.id);
  };

  return (
    <>
      <Box
        maxW={"1194px"}
        w={"100wv"}
        h={"834px"}
        bgColor={"#F1F1F1"}
        paddingTop={"60px"}
        top={"0px"}
        zIndex={"-1"}
        position={"absolute"}
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
            <Link to={"/cashier"}>
              <Flex w={"20px"} alignItems={"center"}>
                <HiOutlineArrowLeft fontSize={"24px"} />
              </Flex>
            </Link>
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
              bg={isClicked == "cash" ? "#F3FFFC" : "white"}
              id="cash"
              onClick={(e) => {
                handleClicked(e);
              }}
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
              bg={isClicked == "local card" ? "#F3FFFC" : "white"}
              id="local card"
              onClick={(e) => {
                handleClicked(e);
              }}
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
              bg={isClicked == "international card" ? "#F3FFFC" : "white"}
              id="international card"
              gap={"8px"}
              onClick={(e) => {
                handleClicked(e);
              }}
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
              bg={isClicked == "e-wallet" ? "#F3FFFC" : "white"}
              id="e-wallet"
              gap={"8px"}
              onClick={(e) => {
                handleClicked(e);
              }}
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
              <Kalkulator input={input} setInput={setInput} />
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
                <Center w={"50%"} onClick={onOpen}>
                  Note
                </Center>
              </Flex>
              <Center
                h={"67px"}
                borderBottomRadius={"8px"}
                fontFamily={"roboto"}
                fontWeight={"600"}
                fontSize={"16px"}
                color={"white"}
                bg={"#369A64"}
                onClick={charge}
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
                {JSON.parse(localStorage.getItem("order_id"))}
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
                <Flex
                  w={"119px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
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
                padding={"8px 8px"}
                flexDir={"column"}
                rowGap={"10px"}
              >
                {orderList.length
                  ? orderList.map((val) => {
                      return (
                        <>
                          <Flex>
                            <Flex
                              w={"208px"}
                              paddingLeft={"8px"}
                              alignItems={"center"}
                            >
                              {val.Menu.name}
                            </Flex>
                            <Flex
                              w={"119px"}
                              justifyContent={"center"}
                              alignItems={"center"}
                            >
                              {val.qty + " Pcs"}
                            </Flex>
                            <Flex
                              w={"119px"}
                              justifyContent={"center"}
                              alignItems={"center"}
                            >
                              Rp. {val.Menu.price.toLocaleString("id-ID")}
                            </Flex>
                          </Flex>
                        </>
                      );
                    })
                  : null}
              </Flex>
            </Box>
            <Flex
              h={"127px"}
              padding={"0px 16px"}
              rowGap={"8px"}
              flexDir={"column"}
            >
              <Flex h={"19px"} justifyContent={"space-between"}>
                <Flex
                  fontFamily={"Roboto"}
                  fontWeight={"600"}
                  fontSize={"16px"}
                >
                  Sub Total
                </Flex>
                <Flex
                  fontFamily={"Roboto"}
                  fontWeight={"600"}
                  fontSize={"16px"}
                >
                  Rp. {totalPrice.toLocaleString("id-ID")}
                </Flex>
              </Flex>
              <Flex h={"19px"} justifyContent={"space-between"}>
                <Flex
                  fontFamily={"Roboto"}
                  fontWeight={"600"}
                  fontSize={"16px"}
                >
                  Tax (10%)
                </Flex>
                <Flex
                  fontFamily={"Roboto"}
                  fontWeight={"600"}
                  fontSize={"16px"}
                >
                  Rp. {tax.toLocaleString("id-ID")}
                </Flex>
              </Flex>
              <Flex h={"19px"} justifyContent={"space-between"}>
                <Flex
                  fontFamily={"Roboto"}
                  fontWeight={"700"}
                  fontSize={"16px"}
                >
                  Total Amount
                </Flex>
                <Flex
                  fontFamily={"Roboto"}
                  fontWeight={"700"}
                  fontSize={"16px"}
                >
                  Rp. {totalAmount.toLocaleString("id-ID")}
                </Flex>
              </Flex>
              <Flex h={"19px"} justifyContent={"space-between"}>
                <Flex
                  fontFamily={"Roboto"}
                  fontWeight={"600"}
                  fontSize={"16px"}
                >
                  Cash
                </Flex>
                <Flex
                  fontFamily={"Roboto"}
                  fontWeight={"600"}
                  fontSize={"16px"}
                >
                  {cashValue
                    ? "Rp. " + Number(cashValue).toLocaleString("id-ID")
                    : "Rp. 0"}
                </Flex>
              </Flex>
              <Flex h={"19px"} justifyContent={"space-between"}>
                <Flex
                  fontFamily={"Roboto"}
                  fontWeight={"600"}
                  fontSize={"16px"}
                >
                  Change
                </Flex>
                <Flex
                  fontFamily={"Roboto"}
                  fontWeight={"600"}
                  fontSize={"16px"}
                  color={"red"}
                >
                  Rp.{" "}
                  {cashValue
                    ? (cashValue - totalAmount).toLocaleString("id-ID")
                    : " 0"}
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent w="100%" maxW={"462px"} maxH={"638px"} h={"100%"}>
          <ModalTrxDetail
            isOpen={isOpen}
            onClose={onClose}
            cashValue={cashValue}
            totalAmount={totalAmount}
          />
        </ModalContent>
      </Modal>
    </>
  );
}
