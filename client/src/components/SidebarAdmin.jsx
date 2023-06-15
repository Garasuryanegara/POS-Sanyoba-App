import { Flex, Box, Center, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export default function SidebarAdmin() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const nav = useNavigate();
  try {
    return (
      <Box
        left={0}
        top={0}
        zIndex={5}
        height={"100vh"}
        fontFamily={"Roboto"}
        fontStyle={"normal"}
        fontWeight={"400"}
        fontSize={"12px"}
        lineHeight={"14px"}
      >
        <Box
          width={"224px"}
          height={"158px"}
          background={"#ffff"}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"space-between"}
        >
          <Center
            width={"224px"}
            height={"70px"}
            backgroundColor={"#1D5E48"}
            fontWeight={"700px"}
            fontSize={"16px"}
            color={"#FFFFFF"}
          >
            <Box>CASHERE</Box>
          </Center>
          <Box
            width={"224px"}
            height={"40px"}
            padding={"12px 24px"}
            textAlign={"center"}
          >
            Refresh
          </Box>
        </Box>

        <Box
          id="scroll"
          width={"224px"}
          maxHeight={"calc(100vh - 158px - 40px)"}
          overflowY={"hidden"}
          background={"#ffff"}
          _hover={{ overflowY: "scroll", overflowX: "hidden" }}
          sx={{
            "&::-webkit-scrollbar": {
              width: "12px",
              backgroundColor: `#ffff`,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `#DCFFE2`,
            },
          }}
        >
          <Box
            width={"224px"}
            height={"40px"}
            _hover={{
              background: "#DCFFE2",
              color: "#267B59",
              cursor: "pointer",
            }}
            fontWeight={"bold"}
            onClick={() => nav("/adminland")}
          >
            <Flex height={"100%"} alignItems={"center"} padding={"12px 24px"}>
              Dashboard
            </Flex>
          </Box>
          <Box
            width={"224px"}
            height={"40px"}
            fontWeight={"bold"}
            _hover={{ cursor: "pointer", background: "#DCFFE2" }}
            onClick={() => setCheck1(!check1)}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Flex height={"100%"} alignItems={"center"} padding={"12px 24px"}>
              Report
            </Flex>
            <Icon as={MdArrowDropDown} marginRight={"12px"} fontSize={"16px"} />
          </Box>
          {check1 ? (
            <>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{
                  cursor: "pointer",
                  background: "#DCFFE2",
                }}
              >
                <Flex
                  height={"100%"}
                  alignItems={"center"}
                  padding={"12px 24px"}
                >
                  Sales Transaction Data
                </Flex>
              </Box>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{
                  cursor: "pointer",
                  background: "#DCFFE2",
                }}
              >
                <Flex
                  height={"100%"}
                  alignItems={"center"}
                  padding={"12px 24px"}
                >
                  Sales Product
                </Flex>
              </Box>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{
                  cursor: "pointer",
                  background: "#DCFFE2",
                }}
              >
                <Flex
                  height={"100%"}
                  alignItems={"center"}
                  padding={"12px 24px"}
                >
                  Daily Sales Report
                </Flex>
              </Box>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{
                  cursor: "pointer",
                  background: "#DCFFE2",
                }}
              >
                <Flex
                  height={"100%"}
                  alignItems={"center"}
                  padding={"12px 24px"}
                >
                  Sales Per Outlet
                </Flex>
              </Box>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{
                  cursor: "pointer",
                  background: "#DCFFE2",
                }}
              >
                <Flex
                  height={"100%"}
                  alignItems={"center"}
                  padding={"12px 24px"}
                >
                  Sales Per Category
                </Flex>
              </Box>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{
                  cursor: "pointer",
                  background: "#DCFFE2",
                }}
              >
                <Flex
                  height={"100%"}
                  alignItems={"center"}
                  padding={"12px 24px"}
                >
                  Sales Per Custommer
                </Flex>
              </Box>
            </>
          ) : null}

          <Box
            width={"224px"}
            height={"40px"}
            fontWeight={"bold"}
            _hover={{ cursor: "pointer", background: "#DCFFE2" }}
            onClick={() => setCheck2(!check2)}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Flex height={"100%"} alignItems={"center"} padding={"12px 24px"}>
              Goods Detail
            </Flex>
            <Icon as={MdArrowDropDown} marginRight={"12px"} fontSize={"16px"} />
          </Box>
          {check2 ? (
            <>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{
                  cursor: "pointer",
                  background: "#DCFFE2",
                }}
                onClick={() => nav("/product")}
              >
                <Flex
                  height={"100%"}
                  alignItems={"center"}
                  padding={"12px 24px"}
                >
                  Product
                </Flex>
              </Box>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{
                  cursor: "pointer",
                  background: "#DCFFE2",
                }}
              >
                <Flex
                  height={"100%"}
                  alignItems={"center"}
                  padding={"12px 24px"}
                >
                  Inventory
                </Flex>
              </Box>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{
                  cursor: "pointer",
                  background: "#DCFFE2",
                }}
              >
                <Flex
                  height={"100%"}
                  alignItems={"center"}
                  padding={"12px 24px"}
                >
                  Procurement
                </Flex>
              </Box>
            </>
          ) : null}

          <Box
            width={"224px"}
            height={"40px"}
            fontWeight={"bold"}
            _hover={{ cursor: "pointer", background: "#DCFFE2" }}
            onClick={() => setCheck3(!check3)}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Flex height={"100%"} alignItems={"center"} padding={"12px 24px"}>
              Management
            </Flex>
            <Icon as={MdArrowDropDown} marginRight={"12px"} fontSize={"16px"} />
          </Box>
          {check3 ? (
            <>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{
                  cursor: "pointer",
                  background: "#DCFFE2",
                }}
              >
                <Flex
                  height={"100%"}
                  alignItems={"center"}
                  padding={"12px 24px"}
                >
                  Outlet
                </Flex>
              </Box>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{
                  cursor: "pointer",
                  background: "#DCFFE2",
                }}
                onClick={() => nav("/emp")}
              >
                <Flex
                  height={"100%"}
                  alignItems={"center"}
                  padding={"12px 24px"}
                >
                  Employee
                </Flex>
              </Box>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{
                  cursor: "pointer",
                  background: "#DCFFE2",
                }}
              >
                <Flex
                  height={"100%"}
                  alignItems={"center"}
                  padding={"12px 24px"}
                >
                  Customer
                </Flex>
              </Box>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{
                  cursor: "pointer",
                  background: "#DCFFE2",
                }}
              >
                <Flex
                  height={"100%"}
                  alignItems={"center"}
                  padding={"12px 24px"}
                >
                  Comission
                </Flex>
              </Box>
            </>
          ) : null}

          <Box
            width={"224px"}
            height={"40px"}
            fontWeight={"bold"}
            _hover={{
              background: "#DCFFE2",
              color: "#267B59",
              cursor: "pointer",
            }}
          >
            <Flex height={"100%"} alignItems={"center"} padding={"12px 24px"}>
              Settings
            </Flex>
          </Box>
        </Box>
      </Box>
    );
  } catch (error) {
    <>
      <Center>
        <h2>Error</h2>
      </Center>
      {console.log(error)}
    </>;
  }
}
