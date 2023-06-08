import { Box, Center, Flex, Link, Table, Td, Tr } from "@chakra-ui/react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GiCookingPot } from "react-icons/gi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ModalTrxDetail(props) {
  const { cashValue, totalAmount } = props;
  const nav = useNavigate();
  return (
    <>
      <Flex flexDir={"column"} rowGap={"125px"}>
        <Box borderRadius={"8px"} w={"100%"} h={"347px"}>
          <Center flexDir={"column"} rowGap={"25px"}>
            <Flex
              w={"100%"}
              h={"119px"}
              flexDir={"column"}
              justifyContent={"end"}
              alignItems={"center"}
              rowGap={"13px"}
            >
              <AiOutlineCheckCircle fontSize={"60px"} color="#45BB71" />
              <Flex fontFamily={"roboto"} fontSize={"20px"} fontWeight={"600"}>
                Successful Transaction !
              </Flex>
            </Flex>
            <Center
              w={"365px"}
              h={"56px"}
              color={"#45BB71"}
              borderRadius={"8px"}
              border={"1px solid #45BB71"}
              gap={"10px"}
            >
              <GiCookingPot fontSize={"30px"} />
              Send to Kitchen
            </Center>
            <Flex w={"100%"} h={"124px"} flexDir={"column"}>
              <Flex
                w={"100%"}
                h={"35px"}
                justifyContent={"space-between"}
                padding={"0px 16px"}
              >
                <Flex w={"168px"} h={"24px"} justifyContent={"space-between"}>
                  <Flex w={"110px"} gap={"8px"} borderRight={"2px solid black"}>
                    <Center>
                      <Link to={"/cashier"}>
                        <MdOutlinePersonOutline fontSize={"16px"} />
                      </Link>
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
              <Flex flexDir={"column"} rowGap={"10px"} padding={"10px 20px"}>
                <Flex h={"19px"} justifyContent={"space-between"}>
                  <Flex
                    fontFamily={"Roboto"}
                    fontWeight={"800"}
                    fontSize={"16px"}
                  >
                    Total Amount
                  </Flex>
                  <Flex
                    fontFamily={"Roboto"}
                    fontWeight={"800"}
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
            </Flex>
          </Center>
        </Box>
        <Box
          w={"100%"}
          h={"185px"}
          borderBottomRadius={"8px"}
          display={"flex"}
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
            <Center w={"33%"} borderRight={"1px solid lightgrey"}>
              View Receipt
            </Center>
            <Center w={"33%"} borderRight={"1px solid lightgrey"}>
              Print
            </Center>
            <Center w={"33%"}>Share</Center>
          </Flex>
          <Center
            h={"67px"}
            borderBottomRadius={"8px"}
            fontFamily={"roboto"}
            fontWeight={"600"}
            fontSize={"16px"}
            color={"white"}
            bg={"#369A64"}
            onClick={() => {
              nav("/cashier");
            }}
          >
            Done
          </Center>
        </Box>
      </Flex>
    </>
  );
}
