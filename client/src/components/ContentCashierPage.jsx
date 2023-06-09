import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Center,
  InputRightAddon,
  Image,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  Spinner,
} from "@chakra-ui/react";
import load from "../assets/images/load.gif";
import { FiSearch } from "react-icons/fi";
import { BsUpcScan, BsCardList } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaMotorcycle } from "react-icons/fa";
import { TbPlaylistX } from "react-icons/tb";
import { useEffect, useState } from "react";
import { ModalSelectQty } from "./Modal";
import InfiniteScroll from "react-infinite-scroll-component";
import { api } from "../api/api";
import { Link, useNavigate } from "react-router-dom";

export default function ContentCashier() {
  // console.log(category);
  const [search, setSearch] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [orderList, setOrderList] = useState([]);
  const [order, setOrder] = useState({ id: "", name: "", qty: "", price: "" });
  const [cont, setCont] = useState(9);
  const [mmk, setMmk] = useState();
  const [isClicked, setIsClicked] = useState();
  const nav = useNavigate();

  const handleObjectValue = async (val) => {
    console.log(val);
    setOrder({ ...order, name: val.name, price: val.price, id: val.id });
    console.log({ ...order, name: val.name, price: val.price, id: val.id });
    console.log(orderList.length);
  };

  // fetch all menu
  const [menu, setMenu] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalCount, setTotalCount] = useState();
  const [loading, setLoading] = useState(false);
  const fetchMenu = async (category_id) => {
    setLoading(true);
    await api
      .get(`/menus`, { params: { limit: cont, category_id } })
      .then((res) => {
        console.log(res.data);
        setMenu(res.data.menus);
        setTotalCount(res.data.count);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  };

  //fetch all category
  const [category, setCategory] = useState([]);
  const fetchCategory = async () => {
    await api.get("/categories/").then((res) => {
      // console.log(res.data);
      setCategory(res.data);
    });
  };
  useEffect(() => {
    fetchMenu();
    fetchCategory();
  }, []);
  useEffect(() => {
    fetchMenu(mmk);
  }, [cont]);
  useEffect(() => {
    if (mmk) {
      fetchMenu(mmk);
    }
    setCont(9);
  }, [mmk]);
  //rubah warna saat click
  const handleClick = (e) => {
    setIsClicked(e.target.id);
  };

  //fetch menu by category
  // const menuByCategory = async (category_id) => {
  //   await api.get(`/menus/`, { params: { category_id } }).then((res) => {
  //     console.log(res.data);
  //     setMenu(res.data.menus);
  //   });
  // };
  //count total price variable
  const totalPrice = orderList
    .reduce((accumulator, val) => {
      return accumulator + Number(val.price * val.qty);
    }, 0)
    .toLocaleString("id-ID");

  //post new order

  const postOrder = async (req, res) => {
    const total = { total: totalPrice };
    const hasil = await api.post("/orders", total).then((result) => {
      localStorage.setItem("order_id", JSON.stringify(result.data.id));
      orderList.map(async (val) => {
        await api.post("/orderDetails", {
          ...val,
          order_id: result.data.id,
          menu_id: val.id,
        });
        console.log(result);
      });
    });
    nav("/trx-detail");
  };

  return (
    <>
      <Box
        maxW={"1194px"}
        w={"100%"}
        h={"100vh"}
        bgColor={"#F1F1F1"}
        top={0}
        zIndex={-1}
        position={"absolute"}
      >
        <Box
          w={"100%"}
          h={"236px"}
          paddingTop={"84px"}
          paddingLeft={"24px"}
          paddingBottom={"59px"}
        >
          <Flex>
            <Box w={"660px"}>
              <InputGroup>
                <InputLeftAddon bg={"white"} cursor={"pointer"}>
                  <FiSearch fontSize={"19px"} />
                </InputLeftAddon>
                <Input
                  w={"558px"}
                  h={"40px"}
                  bg={"white"}
                  placeholder="Search"
                  fontFamily={"roboto"}
                  borderRadius={"8px"}
                  border={"#F1F1F1"}
                  onChange={(e) => setSearch(e.target.value)}
                ></Input>
                <InputRightAddon bg={"#1D5E48"} cursor={"pointer"}>
                  <BsUpcScan fontSize={"19px"} color={"white"} />
                </InputRightAddon>
              </InputGroup>
              <Box
                w={"100vw"}
                maxW={"660px"}
                h={"51px"}
                marginTop={"8px"}
                bg={"#FFFFFF"}
                borderRadius={"8px"}
                display={"flex"}
                overflowX={"scroll"}
                css={{
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                <Center
                  padding={"16px"}
                  fontWeight={"600"}
                  fontSize={"16px"}
                  justifyContent={"center"}
                  cursor={"pointer"}
                  color={isClicked == "all" ? "#45BB71" : "black"}
                  // h="100%"
                  // w="100%"
                  display={"inline-flex"}
                  wrap={"wrap"}
                  // maxW={"px"}
                  flex={"1 0 auto"}
                  id="all"
                  onClick={(e) => {
                    setCont(9);
                    setMmk(null);
                    fetchMenu();
                    handleClick(e);
                  }}
                >
                  All
                </Center>
                {category.map((val) => (
                  <Center
                    padding={"16px"}
                    fontWeight={"600"}
                    fontSize={"16px"}
                    justifyContent={"center"}
                    cursor={"pointer"}
                    color={isClicked == val.id ? "#45BB71" : "black"}
                    // h="100%"
                    // w="100%"
                    display={"inline-flex"}
                    wrap={"wrap"}
                    q
                    // maxW={"px"}
                    flex={"1 0 auto"}
                    id={val.id}
                    onClick={(e) => {
                      setMmk(val.id);
                      handleClick(e);
                      console.log(totalCount);
                    }}
                  >
                    {val.category}
                  </Center>
                ))}
              </Box>
              {loading ? (
                <Center maxW="660px" w="100%" h="570px" marginTop="24px">
                  <Image src={load} />
                </Center>
              ) : (
                <Box overflow="scroll">
                  <Box
                    // bgColor={"blue"}
                    maxW="660px"
                    w="100%"
                    h="570px"
                    marginTop="24px"
                    display="grid"
                    gridGap="32px"
                    gridColumnGap="24px"
                    css={{
                      "&::-webkit-scrollbar": {
                        display: "none",
                      },
                    }}
                    gridTemplateColumns={{
                      base: "repeat(auto-fill, minmax(0, 1fr))",
                      md: "repeat(3, 1fr)", // adjust the number of columns as needed for different screen sizes
                    }}
                    gridTemplateRows={{
                      base: "repeat(auto-fill, minmax(0, 1fr))",
                      md: "repeat(4, 1fr)", // adjust the number of rows as needed for different screen sizes
                    }}
                  >
                    {menu
                      .filter((val) => {
                        if (search == "") {
                          return val;
                        } else if (
                          val.name.toLowerCase().includes(search.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((val) => (
                        <>
                          <Box
                            backgroundImage={`url('${val.img_url}')`}
                            backgroundSize={"100% 100%"}
                            w={"204px"}
                            h={"146px"}
                            borderRadius={"8px"}
                            alignContent={"flex-end"}
                            // marginTop={"32px"}
                            cursor={"pointer"}
                            display={"grid"}
                            id="name"
                            onClick={() => {
                              onOpen();
                              handleObjectValue(val);
                            }}
                          >
                            <Center
                              w={"204px"}
                              h={"35px"}
                              bg={"rgba(29, 94, 72, 0.85)"}
                              // alignItems={"flex-end"}
                              fontFamily={"roboto"}
                              fontWeight={"500"}
                              color={"white"}
                              borderBottomRadius={"8px"}
                            >
                              {val.name}
                            </Center>
                          </Box>
                        </>
                      ))}
                    <Center>
                      <Button
                        bg={"#369A64"}
                        color={"white"}
                        onClick={() => {
                          setCont(cont + 9);
                          // console.log(cont);
                        }}
                        opacity={
                          totalCount > 9 && cont <= totalCount ? "100%" : "0%"
                        }
                        pointerEvents={
                          totalCount > 9 && cont <= totalCount ? "auto" : "none"
                        }
                        // transition="opacity 3.5s linear"
                      >
                        More Meals
                      </Button>
                    </Center>
                  </Box>
                </Box>
              )}
            </Box>
            <Box maxW={"510px"} w={"100%"} h={"700px"} padding={"0px 24px"}>
              <Flex
                w={"100%"}
                h={"673px"}
                bg={"white"}
                borderRadius={"8px"}
                flexDir={"column"}
              >
                <Flex
                  w={"100%"}
                  h={"72px"}
                  bg={"#F3FFFC"}
                  borderTopRadius={"8px"}
                  justifyContent={"space-evenly"}
                  alignItems={"center"}
                >
                  <Button
                    w={"180px"}
                    h={"35px"}
                    fontFamily={"roboto"}
                    fontWeight={"700"}
                    color={"#45BB71"}
                    bg={"white"}
                    variant={"outline"}
                  >
                    Dine-In
                  </Button>
                  <Button
                    w={"180px"}
                    h={"35px"}
                    fontFamily={"roboto"}
                    fontWeight={"700"}
                    color={"#45BB71"}
                    bg={"white"}
                    variant={"outline"}
                  >
                    Take Away
                  </Button>
                  <Box>
                    <SlOptions />
                  </Box>
                </Flex>
                <Flex
                  w={"100%"}
                  h={"67px"}
                  padding={"0px 12px"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Flex
                    w={"249px"}
                    h={"35px"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <MdOutlinePersonOutline fontSize={"21px"} />
                    <Box
                      fontFamily={"roboto"}
                      fontWeight={"500"}
                      fontSize={"16px"}
                    >
                      Customer
                    </Box>
                    <Flex
                      w={"115px"}
                      h={"35px"}
                      bg={"#ECECEC"}
                      borderRadius={"8px"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      fontFamily={"roboto"}
                      fontWeight={"500"}
                      fontSize={"16px"}
                    >
                      {localStorage.getItem("order_id")}
                    </Flex>
                  </Flex>
                  <Flex
                    w={"76px"}
                    h={"32px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"21px"}
                  >
                    <BsCardList fontSize={"21px"} />
                    <FaMotorcycle fontSize={"21px"} />
                  </Flex>
                </Flex>
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
                {orderList.length ? (
                  <Flex
                    w={"100%"}
                    h={"381px"}
                    flexDir={"column"}
                    color={"grey"}
                    fontFamily={"Roboto"}
                    fontWeight={"400"}
                  >
                    {orderList.map((val) => (
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
                        <Flex
                          w={"208px"}
                          paddingLeft={"8px"}
                          alignItems={"center"}
                        >
                          {val.name}
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
                          Rp. {val.price.toLocaleString("id-ID")}
                        </Flex>
                      </Flex>
                    ))}

                    <Flex mt={"auto"} bg={"#FFE7CA"}>
                      <Flex
                        w={"100%"}
                        h={"51px"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        fontFamily={"Roboto"}
                        fontStyle={"normal"}
                        fontWeight={"600"}
                        fontSize={"16px"}
                        color={"black"}
                      >
                        <Flex
                          w={"154px"}
                          h={"100%"}
                          justifyContent={"space-around"}
                          alignItems={"center"}
                        >
                          Total Order (
                          {orderList.reduce((accumulator, val) => {
                            return accumulator + val.qty;
                          }, 0)}
                          )
                        </Flex>
                        <Flex
                          w={"154px"}
                          h={"100%"}
                          justifyContent={"space-around"}
                          alignItems={"center"}
                        >
                          Rp. {totalPrice}
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                ) : (
                  <Flex
                    w={"100%"}
                    h={"381px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDir={"column"}
                    color={"grey"}
                    fontFamily={"Roboto"}
                    fontWeight={"400"}
                    // display={"none"}
                  >
                    <Box>
                      <TbPlaylistX fontSize={"64px"} color="grey" />
                    </Box>
                    There is no item list yet
                  </Flex>
                )}

                <Flex
                  w={"100%"}
                  h={"51px"}
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  fontFamily={"Roboto"}
                  fontStyle={"normal"}
                  fontWeight={"600"}
                  fontSize={"16px"}
                  color={"black"}
                >
                  <Flex
                    w={"154px"}
                    h={"100%"}
                    justifyContent={"space-around"}
                    alignItems={"center"}
                    borderRight={"1px"}
                    borderColor={"grey"}
                    cursor={"pointer"}
                    onClick={() => {
                      setOrderList([]);
                    }}
                  >
                    Reset
                  </Flex>
                  <Flex
                    w={"154px"}
                    h={"100%"}
                    justifyContent={"space-around"}
                    alignItems={"center"}
                    borderRight={"1px"}
                    borderColor={"grey"}
                    cursor={"pointer"}
                  >
                    Save
                  </Flex>
                  <Flex
                    w={"154px"}
                    h={"100%"}
                    justifyContent={"space-around"}
                    alignItems={"center"}
                    cursor={"pointer"}
                  >
                    Cash Drawer
                  </Flex>
                </Flex>
                {/* <Link to={orderList.length ? "/trxDetail" : null}> */}
                <Flex
                  w={"100%"}
                  h={"67px"}
                  bg={"#369A64"}
                  fontFamily={"Roboto"}
                  fontWeight={"600"}
                  fontSize={"16px"}
                  color={"white"}
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  borderBottomRadius={"8px"}
                  cursor={"pointer"}
                  onClick={orderList.length ? postOrder : null}
                >
                  Proceed Payment
                </Flex>
                {/* </Link> */}
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent w="80vw" maxW={"300px"}>
          <ModalSelectQty
            isOpen={isOpen}
            onClose={onClose}
            order={order}
            setOrder={setOrder}
            setOrderList={setOrderList}
            orderList={orderList}
          />
        </ModalContent>
      </Modal>
    </>
  );
}
