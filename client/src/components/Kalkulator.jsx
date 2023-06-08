import {
  Box,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LuDelete } from "react-icons/lu";

export default function Kalkulator(props) {
  const { input, setInput } = props;
  const valueHandler = (e) => {
    console.log(e.target.id);
    setInput(`${input}` + `${e.target.id}`);
  };
  const deleteValue = () => {
    const result = input.split("");
    result.pop();
    console.log(result.join(""));
    setInput(result.join(""));
  };
  return (
    <Box w={"100%"} h={"348px"}>
      <Flex h={"56px"}>
        <InputGroup border={"1px solid grey"} borderRadius={"8px"}>
          <Input
            w={"100%"}
            h={"56px"}
            alignItems={"center"}
            paddingLeft={"20px"}
            placeholder="Rp.0"
            value={input ? Number(input).toLocaleString("id-ID") : "Rp.0"}
          ></Input>
          <InputRightAddon h={"56px"} bg={"#615E5B"} onClick={deleteValue}>
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
            id="7"
            onClick={valueHandler}
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
            id="8"
            onClick={valueHandler}
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
            id="9"
            onClick={valueHandler}
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
            id="4"
            onClick={valueHandler}
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
            id="5"
            onClick={valueHandler}
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
            id="6"
            onClick={valueHandler}
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
            id="1"
            onClick={valueHandler}
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
            id="2"
            onClick={valueHandler}
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
            id="3"
            onClick={valueHandler}
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
            id="."
            onClick={valueHandler}
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
            id="0"
            onClick={valueHandler}
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
            id="000"
            onClick={valueHandler}
          >
            000
          </Center>
        </Flex>
      </Flex>
    </Box>
  );
}
