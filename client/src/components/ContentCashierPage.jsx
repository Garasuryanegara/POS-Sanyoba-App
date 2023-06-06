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
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { BsUpcScan, BsCardList } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaMotorcycle } from "react-icons/fa";
import { TbPlaylistX } from "react-icons/tb";
import { useState } from "react";
import { ModalSelectQty } from "./Modal";
import InfiniteScroll from "react-infinite-scroller";

export default function ContentCashier() {
  const category = [
    { name: "All" },
    { name: "Cakes" },
    { name: "Pie and Tarts" },
    { name: "Cookies and Brownies" },
    { name: "Ice Cream and Sorbets" },
    { name: "Specialty" },
  ];
  const product = [
    {
      name: "Chocolate Fudge Cake",
      img: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/5403-3-large.jpg?itok=nKaVtQvV",
      category: "cakes",
      price: "35.000",
    },
    {
      name: "Vanilla Bean Cake",
      img: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/5403-3-large.jpg?itok=nKaVtQvV",
      category: "cakes",
      price: "35.000",
    },
    {
      name: "Red Velvet Cake",
      img: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/5403-3-large.jpg?itok=nKaVtQvV",
      category: "cakes",
      price: "35.000",
    },
    {
      name: "Carrot Cake",
      img: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/5403-3-large.jpg?itok=nKaVtQvV",
      category: "cakes",
      price: "35.000",
    },
    {
      name: "Lemon Pound Cake",
      img: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/5403-3-large.jpg?itok=nKaVtQvV",
      category: "cakes",
      price: "35.000",
    },
    {
      name: "Raspberry Cheesecake",
      img: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/5403-3-large.jpg?itok=nKaVtQvV",
      category: "cakes",
      price: "35.000",
    },
    {
      name: "Apple Pie",
      img: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/5403-3-large.jpg?itok=nKaVtQvV",
      category: "pie and tarts",
      price: "35.000",
    },
    {
      name: "Kelly Lime Pie",
      img: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/5403-3-large.jpg?itok=nKaVtQvV",
      category: "pie and tarts",
      price: "35.000",
    },
    {
      name: "Cherry Tart",
      img: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/5403-3-large.jpg?itok=nKaVtQvV",
      category: "pie and tarts",
      price: "35.000",
    },
    {
      name: "Chocolate Chip Cookies",
      img: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/5403-3-large.jpg?itok=nKaVtQvV",
      category: "cookies and brownies",
      price: "35.000",
    },
    {
      name: "Oatmeal Raisin Cookies",
      img: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/5403-3-large.jpg?itok=nKaVtQvV",
      category: "cookies and brownies",
      price: "35.000",
    },
    {
      name: "Peanut Butter Cookies",
      img: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/5403-3-large.jpg?itok=nKaVtQvV",
      category: "cookies and brownies",
      price: "35.000",
    },
    {
      name: "Peanut Butter Cookies",
      img: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/5403-3-large.jpg?itok=nKaVtQvV",
      category: "cookies and brownies",
      price: "35.000",
    },
  ];
  // console.log(category);
  const [search, setSearch] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [orderList, setOrderList] = useState([]);
  const [order, setOrder] = useState({ name: "", qty: "", price: "" });

  const handleObjectValue = async (val) => {
    console.log(val);
    setOrder({ ...order, name: val.name, price: val.price }); //jangan lupa price: val.price
    console.log({ ...order, name: val.name, price: val.price });
    console.log(orderList.length);
  };
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState([]);
  const loadFunc = () => {
    // if (data.length <= product.length) {
    const startIndex = data.length;
    const endIndex = startIndex + 9;

    const nextData = product.slice(startIndex, endIndex);
    return setData([...data, ...nextData]);
    // } else {
    // return setHasMore(false);
    // }
  };

  return (
    <>
      <Box
        maxW={"1194px"}
        w={"100%"}
        h={"834px"}
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
                {category.map((val) => (
                  <Center
                    padding={"16px"}
                    fontWeight={"600"}
                    fontSize={"16px"}
                    justifyContent={"center"}
                    cursor={"pointer"}
                    // h="100%"
                    // w="100%"
                    display={"inline-flex"}
                    wrap={"wrap"}
                    // maxW={"px"}
                    flex={"1 0 auto"}
                  >
                    {val.name}
                  </Center>
                ))}
              </Box>
              <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                // hasMore={hasMore}
              >
                <Box
                  maxW="660px"
                  w="100%"
                  h="570px"
                  marginTop="24px"
                  display="grid"
                  gridGap="32px"
                  gridColumnGap="24px"
                  overflowY="scroll"
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
                  {product
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
                          backgroundImage={`url('${val.img}')`}
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
                </Box>
              </InfiniteScroll>
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
                      0001
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
                          Rp. {val.price}
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
                          Rp.{" "}
                          {orderList
                            .reduce((accumulator, val) => {
                              return accumulator + Number(val.price * val.qty);
                            }, 0)
                            .toLocaleString("id-ID")}
                          .000
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
                >
                  Proceed Payment
                </Flex>
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
