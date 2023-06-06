import {
  Box,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { LuDelete } from "react-icons/lu";

export default function Kalkulator() {
  return (
    <Box w={"100%"} h={"348px"}>
      <Flex h={"56px"}>
        <InputGroup border={"1px solid grey"} borderRadius={"8px"}>
          <Input h={"56px"} border={"none"} placeholder="Rp 0"></Input>
          <InputRightAddon h={"56px"} bg={"#615E5B"}>
            <LuDelete fontSize={"28px"} color="white" />
          </InputRightAddon>
        </InputGroup>
      </Flex>
      <Flex h={"280px"} marginTop={"12px"} rowGap={"8px"} flexDir={"column"}>
        <Flex w={"100%"} h={"64px"} gap={"8px"}>
          <Center
            w={"116.33px"}
            border={"1px solid grey"}
            borderRadius={"8px"}
            fontFamily={"roboto"}
            fontWeight={"500"}
            fontSize={"20px"}
          >
            7
          </Center>
          <Center
            w={"116.33px"}
            border={"1px solid grey"}
            borderRadius={"8px"}
            fontFamily={"roboto"}
            fontWeight={"500"}
            fontSize={"20px"}
          >
            8
          </Center>
          <Center
            w={"116.33px"}
            border={"1px solid grey"}
            borderRadius={"8px"}
            fontFamily={"roboto"}
            fontWeight={"500"}
            fontSize={"20px"}
          >
            9
          </Center>
        </Flex>
        <Flex w={"100%"} h={"64px"} gap={"8px"}>
          <Center
            w={"116.33px"}
            border={"1px solid grey"}
            borderRadius={"8px"}
            fontFamily={"roboto"}
            fontWeight={"500"}
            fontSize={"20px"}
          >
            4
          </Center>
          <Center
            w={"116.33px"}
            border={"1px solid grey"}
            borderRadius={"8px"}
            fontFamily={"roboto"}
            fontWeight={"500"}
            fontSize={"20px"}
          >
            5
          </Center>
          <Center
            w={"116.33px"}
            border={"1px solid grey"}
            borderRadius={"8px"}
            fontFamily={"roboto"}
            fontWeight={"500"}
            fontSize={"20px"}
          >
            6
          </Center>
        </Flex>
        <Flex w={"100%"} h={"64px"} gap={"8px"}>
          <Center
            w={"116.33px"}
            border={"1px solid grey"}
            borderRadius={"8px"}
            fontFamily={"roboto"}
            fontWeight={"500"}
            fontSize={"20px"}
          >
            1
          </Center>
          <Center
            w={"116.33px"}
            border={"1px solid grey"}
            borderRadius={"8px"}
            fontFamily={"roboto"}
            fontWeight={"500"}
            fontSize={"20px"}
          >
            2
          </Center>
          <Center
            w={"116.33px"}
            border={"1px solid grey"}
            borderRadius={"8px"}
            fontFamily={"roboto"}
            fontWeight={"500"}
            fontSize={"20px"}
          >
            3
          </Center>
        </Flex>
        <Flex w={"100%"} h={"64px"} gap={"8px"}>
          <Center
            w={"116.33px"}
            border={"1px solid grey"}
            borderRadius={"8px"}
            fontFamily={"roboto"}
            fontWeight={"500"}
            fontSize={"20px"}
          >
            .
          </Center>
          <Center
            w={"116.33px"}
            border={"1px solid grey"}
            borderRadius={"8px"}
            fontFamily={"roboto"}
            fontWeight={"500"}
            fontSize={"20px"}
          >
            0
          </Center>
          <Center
            w={"116.33px"}
            border={"1px solid grey"}
            borderRadius={"8px"}
            fontFamily={"roboto"}
            fontWeight={"500"}
            fontSize={"20px"}
          >
            000
          </Center>
        </Flex>
      </Flex>
    </Box>
  );
}
