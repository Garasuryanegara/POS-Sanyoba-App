import "../css/AddProductPage.css";
import {
  Box,
  Flex,
  Icon,
  Input,
  Text,
  Select,
  Checkbox,
  Image,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Button,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Center,
} from "@chakra-ui/react";
import {
  MdArrowDropUp,
  MdArrowDropDown,
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RxMagnifyingGlass } from "react-icons/rx";
import { useState, useEffect } from "react";
import { api } from "../api/api";

import MapEmp from "./MapEmp";

export default function Employee() {
  const [user, setUser] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({ limit: 10 });
  const [shown, setShown] = useState({ offset: 0 });
  const [pages, setPages] = useState([]);
  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    if (filter) {
      getAll();
    }
  }, [filter]);

  useEffect(() => {
    if (shown.offset >= 0 && shown.offset <= shown.totalCount) {
      setFilter({ ...filter, offset: shown.offset });
    }
  }, [shown.offset]);
  useEffect(() => {
    pageHandler();
  }, [shown.totalPages]);

  async function getAll() {
    await api
      .get("/users/draft", {
        params: filter,
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data.users);
        setShown({
          ...shown,
          totalPages: res.data.totalPages,
          totalCount: res.data.totalCount,
        });
      });
  }

  function valueHandler(e) {
    const tempObj = {};
    tempObj[e.target.id] = e.target.value;
    console.log(tempObj);
    setFilter({ ...filter, ...tempObj });
  }

  function sortHandler(column) {
    console.log(column);
    setFilter({ ...filter, ...column });
  }

  function pageHandler() {
    const output = [];
    for (let i = 1; i <= shown.totalPages; i++) {
      output.push(i);
    }
    setPages(output);
    console.log(output);
  }

  async function activEmp(val) {
    await api.patch("/users/" + val.id);
    getAll();
  }
  async function deleteEmp(val) {
    await api.delete("/users/" + val.id);
    getAll();
  }
  return (
    <>
      <Center
        background={"#FFFFFF"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"flex-start"}
        padding={"16px 0px"}
        gap={"24px"}
        position={"absolute"}
        w={"1168px"}
        h={"634px"}
        marginLeft={"24px"}
        borderRadius={"8px"}
        fontFamily={"Roboto"}
        fontStyle={"normal"}
        fontWeight={"500"}
        fontSize={"1px"}
        lineHeight={"14px"}
        color={"#353535"}
      >
        <Box
          display={"flex"}
          flexDir={"row"}
          padding={"0px 16px"}
          gap={"24px"}
          w={"1168px"}
          h={"32px"}
        >
          {/* role */}
          <Select
            fontStyle={"normal"}
            fontWeight={"500"}
            fontSize={"12px"}
            lineHeight={"14px"}
            className="select"
            boxSizing="border-box"
            display={"flex"}
            flexDir={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"202px"}
            w={"266px"}
            h={"32px"}
            border={"1px solid rgba(53, 53, 53, 0.3)"}
            borderRadius={"8px"}
            placeholder="All Outlets"
          />
          <Select
            fontStyle={"normal"}
            fontWeight={"500"}
            fontSize={"12px"}
            lineHeight={"14px"}
            className="select"
            boxSizing="border-box"
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"202px"}
            w={"266px"}
            h={"32px"}
            border={"1px solid rgba(53, 53, 53, 0.3)"}
            borderRadius={"8px"}
            placeholder="Role"
            id="role"
            onChange={valueHandler}
          >
            <option value={"true"}>Active</option>
            <option value={"false"}>In-active</option>
          </Select>
          <Select
            fontStyle={"normal"}
            fontWeight={"500"}
            fontSize={"12px"}
            lineHeight={"14px"}
            className="select"
            boxSizing="border-box"
            display={"flex"}
            flexDir={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"202px"}
            w={"266px"}
            h={"32px"}
            border={"1px solid rgba(53, 53, 53, 0.3)"}
            borderRadius={"8px"}
            placeholder="All Status"
          />
          <InputGroup w={"266px"} h={"32px"} gap={"202px"}>
            <InputLeftElement h={"32px"}>
              <Icon
                as={RxMagnifyingGlass}
                w={"15px"}
                h={"15px"}
                onClick={() => setFilter({ ...filter, search: search })}
              />
            </InputLeftElement>
            <Input
              className="input"
              boxSizing="border-box"
              display={"flex"}
              flexDir={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              border={"1px solid rgba(53, 53, 53, 0.3)"}
              borderRadius={"8px"}
              placeholder="search"
              w={"266px"}
              h={"32px"}
              onChange={(e) => {
                setSearch(e.target.value);
                if (!e.target.value) {
                  setFilter({ ...filter, search: "" });
                }
              }}
            />
          </InputGroup>
        </Box>
        {/* Sort */}
        <Box
          display={"flex"}
          flexDir={"column"}
          alignItems={"flex-start"}
          padding={"0px"}
          gap={"16px"}
          w={"1168px"}
          h={"538px"}
          fontFamily={"Roboto"}
          fontStyle={"normal"}
          fontWeight={"500"}
          fontSize={"12px"}
          lineHeight={"14px"}
          color={"#353535"}
        >
          <Flex
            flexDir={"column"}
            alignItems={"center"}
            padding={"0"}
            w={"1168px"}
            h={"506px"}
          >
            <Flex
              flexDir={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              padding={"0px 16px"}
              gap={"24px"}
              w={"1168px"}
              h={"46px"}
              borderBottom={"1px solid rgba(53, 53, 53, 0.1)"}
              fontWeight={"700"}
            >
              <Flex
                flexDir={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                padding={"8px 0px"}
                gap={"8px"}
                w={"162.67px"}
                h={"46px"}
              >
                <Flex gap={"5px"} alignItems={"center"}>
                  <Checkbox />
                  <Text>Staff Name</Text>
                </Flex>

                <Flex
                  flexDir={"column"}
                  id="cek"
                  onClick={(e) => {
                    // console.log(e.target.name);
                    sortHandler(JSON.parse(e.target.getAttribute("id")));
                  }}
                  zIndex={"10"}
                >
                  <Icon
                    id={JSON.stringify({ column: "name", sort: "ASC" })}
                    cursor={"pointer"}
                    as={MdArrowDropUp}
                  />
                  <Icon
                    id={JSON.stringify({ column: "name", sort: "DESC" })}
                    cursor={"pointer"}
                    as={MdArrowDropDown}
                  />
                </Flex>
              </Flex>
              <Flex
                flexDir={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={"8px"}
                w={"162.67px"}
                h={"46px"}
              >
                <Flex gap={"5px"} alignItems={"center"}>
                  <Text>Role</Text>
                </Flex>
                <Flex
                  flexDir={"column"}
                  onClick={(e) => {
                    // console.log(e.target.name);
                    sortHandler(JSON.parse(e.target.getAttribute("id")));
                  }}
                  zIndex={"10"}
                >
                  <Icon
                    id={JSON.stringify({ column: "role", sort: "ASC" })}
                    cursor={"pointer"}
                    as={MdArrowDropUp}
                  />
                  <Icon
                    id={JSON.stringify({ column: "role", sort: "DESC" })}
                    cursor={"pointer"}
                    as={MdArrowDropDown}
                  />
                </Flex>
              </Flex>
              <Flex
                flexDir={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={"8px"}
                w={"162.67px"}
                h={"46px"}
              >
                <Flex gap={"5px"} alignItems={"center"}>
                  <Text>Outlet</Text>
                </Flex>

                <Flex flexDir={"column"}>
                  <Icon cursor={"pointer"} as={MdArrowDropUp} />
                  <Icon cursor={"pointer"} as={MdArrowDropDown} />
                </Flex>
              </Flex>
              <Flex
                flexDir={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={"8px"}
                w={"162.67px"}
                h={"46px"}
              >
                <Flex gap={"5px"} alignItems={"center"}>
                  <Text>Phone Number</Text>
                </Flex>

                <Flex
                  flexDir={"column"}
                  onClick={(e) => {
                    // console.log(e.target.name);
                    sortHandler(JSON.parse(e.target.getAttribute("id")));
                  }}
                  zIndex={"10"}
                >
                  <Icon
                    id={JSON.stringify({ column: "phone", sort: "ASC" })}
                    cursor={"pointer"}
                    as={MdArrowDropUp}
                  />
                  <Icon
                    id={JSON.stringify({ column: "phone", sort: "DESC" })}
                    cursor={"pointer"}
                    as={MdArrowDropDown}
                  />
                </Flex>
              </Flex>
              <Flex
                flexDir={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={"8px"}
                w={"162.67px"}
                h={"46px"}
              >
                <Flex gap={"5px"} alignItems={"center"}>
                  <Text>PIN Number</Text>
                </Flex>
                <Flex
                  flexDir={"column"}
                  onClick={(e) => {
                    // console.log(e.target.name);
                    sortHandler(JSON.parse(e.target.getAttribute("id")));
                  }}
                  zIndex={"10"}
                >
                  <Icon
                    id={JSON.stringify({ column: "password", sort: "ASC" })}
                    cursor={"pointer"}
                    as={MdArrowDropUp}
                  />
                  <Icon
                    id={JSON.stringify({ column: "password", sort: "DESC" })}
                    cursor={"pointer"}
                    as={MdArrowDropDown}
                  />
                </Flex>
              </Flex>
              <Flex
                flexDir={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={"8px"}
                w={"162.67px"}
                h={"46px"}
              >
                <Flex gap={"5px"} alignItems={"center"}>
                  <Text>Status</Text>
                </Flex>
                <Flex
                  flexDir={"column"}
                  onClick={(e) => {
                    // console.log(e.target.name);
                    sortHandler(JSON.parse(e.target.getAttribute("id")));
                  }}
                  zIndex={"10"}
                >
                  <Icon
                    id={JSON.stringify({ column: "status", sort: "ASC" })}
                    cursor={"pointer"}
                    as={MdArrowDropUp}
                  />
                  <Icon
                    id={JSON.stringify({ column: "status", sort: "DESC" })}
                    cursor={"pointer"}
                    as={MdArrowDropDown}
                  />
                </Flex>
              </Flex>
              <Flex w={"16px"} h={"48px"}></Flex>
            </Flex>
            {/* map */}
            {user.length
              ? user.map((val) => {
                  return (
                    <MapEmp
                      val={val}
                      getAll={getAll}
                      activEmp={activEmp}
                      deleteEmp={deleteEmp}
                    />
                  );
                })
              : null}
          </Flex>
          {/* pagination */}
          <Flex
            flexDir={"row"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            padding={"0px 14px"}
            gap={"24px"}
            w={"1168px"}
            h={"16px"}
          >
            <Flex
              flexDir={"row"}
              alignItems={"center"}
              padding={"0px"}
              gap={"24px"}
              h={"16px"}
            >
              <Flex
                fontFamily={"Roboto"}
                fontStyle={"normal"}
                fontWeight={"400"}
                fontSize={"12px"}
                lineHeight={"14px"}
                flexDir={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"4px"}
                h={"16px"}
              >
                Showing: 10 Results
              </Flex>
              <Flex
                fontFamily={"Roboto"}
                fontStyle={"normal"}
                fontWeight={"400"}
                fontSize={"12px"}
                lineHeight={"14px"}
                justifyContent={"center"}
                alignItems={"center"}
                h={"16px"}
              >
                {`Shown ${Math.ceil(shown.offset / 10) + 1} from ${
                  shown.totalPages || 1
                }`}
              </Flex>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                gap={"16px"}
                h={"16px"}
                fontFamily={"Roboto"}
                fontStyle={"normal"}
                fontWeight={"400"}
                fontSize={"12px"}
                lineHeight={"14px"}
              >
                <Flex
                  cursor={"pointer"}
                  alignItems={"center"}
                  onClick={() => {
                    if (Math.ceil(shown.offset / 10) + 1 > 1) {
                      setShown({ ...shown, offset: shown.offset - 10 });
                    }
                  }}
                >
                  <Icon as={MdOutlineArrowBackIos} /> Back
                </Flex>
                <Flex flexDir={"row"} gap={"8px"}>
                  {pages.length <= 4 ? (
                    pages.map((val) => (
                      <Flex
                        cursor={"pointer"}
                        bgColor={
                          Math.ceil(shown.offset / 10) + 1 == val
                            ? "#38A169"
                            : "white"
                        }
                        color={
                          Math.ceil(shown.offset / 10) + 1 == val
                            ? "white"
                            : "black"
                        }
                        borderRadius={"3px"}
                        w={"16px"}
                        h={"16px"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        onClick={() =>
                          setShown({ ...shown, offset: (val - 1) * 10 })
                        }
                        key={val}
                      >
                        {val}
                      </Flex>
                    ))
                  ) : (
                    <>
                      {Math.ceil(shown.offset / 10) + 1 < 4 && (
                        <>
                          {pages.slice(0, 4).map((val) => (
                            <Flex
                              cursor={"pointer"}
                              bgColor={
                                Math.ceil(shown.offset / 10) + 1 == val
                                  ? "#38A169"
                                  : "white"
                              }
                              color={
                                Math.ceil(shown.offset / 10) + 1 == val
                                  ? "white"
                                  : "black"
                              }
                              borderRadius={"3px"}
                              w={"16px"}
                              h={"16px"}
                              justifyContent={"center"}
                              alignItems={"center"}
                              onClick={() =>
                                setShown({ ...shown, offset: (val - 1) * 10 })
                              }
                              key={val}
                            >
                              {val}
                            </Flex>
                          ))}
                          <Flex>...</Flex>
                        </>
                      )}
                      {Math.ceil(shown.offset / 10) + 1 >= 4 &&
                        Math.ceil(shown.offset / 10) + 1 < pages.length - 4 && (
                          <>
                            <Flex>...</Flex>
                            {pages
                              .slice(shown.offset - 1, shown.offset + 3)
                              .map((val) => (
                                <Flex
                                  cursor={"pointer"}
                                  bgColor={
                                    Math.ceil(shown.offset / 10) + 1 == val
                                      ? "#38A169"
                                      : "white"
                                  }
                                  color={
                                    Math.ceil(shown.offset / 10) + 1 == val
                                      ? "white"
                                      : "black"
                                  }
                                  borderRadius={"3px"}
                                  w={"16px"}
                                  h={"16px"}
                                  justifyContent={"center"}
                                  alignItems={"center"}
                                  onClick={() =>
                                    setShown({
                                      ...shown,
                                      offset: (val - 1) * 10,
                                    })
                                  }
                                  key={val}
                                >
                                  {val}
                                </Flex>
                              ))}
                            <Flex>...</Flex>
                          </>
                        )}
                      {Math.ceil(shown.offset / 10) + 1 >= pages.length - 4 && (
                        <>
                          <Flex>...</Flex>
                          {pages.slice(-4).map((val) => (
                            <Flex
                              cursor={"pointer"}
                              bgColor={
                                Math.ceil(shown.offset / 10) + 1 == val
                                  ? "#38A169"
                                  : "white"
                              }
                              color={
                                Math.ceil(shown.offset / 10) + 1 == val
                                  ? "white"
                                  : "black"
                              }
                              borderRadius={"3px"}
                              w={"16px"}
                              h={"16px"}
                              justifyContent={"center"}
                              alignItems={"center"}
                              onClick={() =>
                                setShown({ ...shown, offset: (val - 1) * 10 })
                              }
                              key={val}
                            >
                              {val}
                            </Flex>
                          ))}
                        </>
                      )}
                    </>
                  )}
                </Flex>
                <Flex
                  cursor={"pointer"}
                  alignItems={"center"}
                  onClick={() => {
                    if (Math.ceil(shown.offset / 10) + 1 < shown.totalPages) {
                      setShown({ ...shown, offset: shown.offset + 10 });
                    }
                  }}
                >
                  Next
                  <Icon as={MdOutlineArrowForwardIos} />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Center>
    </>
  );
}
