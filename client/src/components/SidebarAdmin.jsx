import { Flex, Box, Center } from "@chakra-ui/react";
import { useState } from "react";
export default function SidebarAdmin() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  try {
    return (
      <Box left={0} height={"100vh"}>
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
          >
            <Flex height={"100%"} alignItems={"center"} padding={"0 5px"}>
              Dashboard
            </Flex>
          </Box>
          <Box
            width={"224px"}
            height={"40px"}
            fontWeight={"bold"}
            _hover={{ cursor: "pointer", background: "#DCFFE2" }}
            onClick={() => setCheck1(!check1)}
          >
            <Flex height={"100%"} alignItems={"center"} padding={"0 5px"}>
              Report
            </Flex>
          </Box>
          {check1 ? (
            <>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{ cursor: "pointer", background: "#DCFFE2" }}
              >
                <Flex height={"100%"} alignItems={"center"} padding={"0 5px"}>
                  Sales Transaction Data
                </Flex>
              </Box>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{ cursor: "pointer", background: "#DCFFE2" }}
              >
                <Flex height={"100%"} alignItems={"center"} padding={"0 5px"}>
                  Sales Product
                </Flex>
              </Box>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{ cursor: "pointer", background: "#DCFFE2" }}
              >
                <Flex height={"100%"} alignItems={"center"} padding={"0 5px"}>
                  Daily Sales Report
                </Flex>
              </Box>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{ cursor: "pointer", background: "#DCFFE2" }}
              >
                <Flex height={"100%"} alignItems={"center"} padding={"0 5px"}>
                  Sales Per Outlet
                </Flex>
              </Box>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{ cursor: "pointer", background: "#DCFFE2" }}
              >
                <Flex height={"100%"} alignItems={"center"} padding={"0 5px"}>
                  Sales Per Category
                </Flex>
              </Box>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{ cursor: "pointer", background: "#DCFFE2" }}
              >
                <Flex height={"100%"} alignItems={"center"} padding={"0 5px"}>
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
          >
            <Flex height={"100%"} alignItems={"center"} padding={"0 5px"}>
              Goods Detail
            </Flex>
          </Box>
          {check2 ? (
            <>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{ cursor: "pointer", background: "#DCFFE2" }}
              >
                <Flex height={"100%"} alignItems={"center"} padding={"0 5px"}>
                  Product
                </Flex>
              </Box>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{ cursor: "pointer", background: "#DCFFE2" }}
              >
                <Flex height={"100%"} alignItems={"center"} padding={"0 5px"}>
                  Inventory
                </Flex>
              </Box>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{ cursor: "pointer", background: "#DCFFE2" }}
              >
                <Flex height={"100%"} alignItems={"center"} padding={"0 5px"}>
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
          >
            <Flex height={"100%"} alignItems={"center"} padding={"0 5px"}>
              Management
            </Flex>
          </Box>
          {check3 ? (
            <>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{ cursor: "pointer", background: "#DCFFE2" }}
              >
                <Flex height={"100%"} alignItems={"center"} padding={"0 5px"}>
                  Outlet
                </Flex>
              </Box>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{ cursor: "pointer", background: "#DCFFE2" }}
              >
                <Flex height={"100%"} alignItems={"center"} padding={"0 5px"}>
                  Employee
                </Flex>
              </Box>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{ cursor: "pointer", background: "#DCFFE2" }}
              >
                <Flex height={"100%"} alignItems={"center"} padding={"0 5px"}>
                  Customer
                </Flex>
              </Box>
              <Box
                width={"224px"}
                height={"40px"}
                _hover={{ cursor: "pointer", background: "#DCFFE2" }}
              >
                <Flex height={"100%"} alignItems={"center"} padding={"0 5px"}>
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
            <Flex height={"100%"} alignItems={"center"} padding={"0 5px"}>
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
