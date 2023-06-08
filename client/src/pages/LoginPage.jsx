import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { useDispatch } from "react-redux";
import bgImage from "../assets/images/bgPOS.jpg";
// import Logo from "../assets/images/logo3a.png";

export default function LoginPage() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [seePassword, setSeePassword] = useState(false);
  const [user, setUser] = useState({
    role: "",
    name: "",
    password: "",
  });

  const roles = [
    { name: "Admin", value: "admin" },
    { name: "Cashier", value: "cashier" },
  ];

  const inputHandler = (e) => {
    const { id, value } = e.target;
    const tempUser = { ...user };
    tempUser[id] = value;
    setUser(tempUser);
    console.log(tempUser);
  };

  const login = async () => {
    await api
      .post("/users/login", user)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("auth", JSON.stringify(res.data.token));
        dispatch({
          type: "login",
          payload: res.data.value,
        });
        console.log(res.data.value.role);
        if (res.data.value.role == "admin") {
          return nav("/adminLand");
        } else {
          return nav("/cashierLand");
        }
      })
      .catch((err) => {
        console.log(err.message);
        alert("name / password invalid");
      });
  };

  return (
    <>
      <Flex mt={"50px"} ml={"255px"} mr={"260px"}>
        <Flex
          className="loginL"
          w={"550px"}
          flexDir={"column"}
          justifyContent={"center"}
          bgPosition={"center"}
          bgRepeat={"no-repeat"}
          h={"600px"}
          zIndex={"2"}
          borderTopLeftRadius={"85px"}
        ></Flex>

        <Box
          // bgImage={Logo}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          h={"300px"}
          w={"500px"}
          position={"absolute"}
          zIndex={"4"}
          ml={"10px"}
          mt={"120px"}
        ></Box>

        <Box
          bgImage={bgImage}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          h={"600px"}
          w={"550px"}
          position={"absolute"}
          zIndex={"0"}
        ></Box>

        <Flex
          w={"450px"}
          justifyContent={"center"}
          className="loginR"
          borderBottomRightRadius={"85px"}
        >
          <Flex flexDir={"column"} gap={"20px"} mt={"50"} mb={"50"}>
            <Box fontSize={"25px"} textAlign={"center"} mb={"20px"}>
              Login to Sanyoba
            </Box>

            <Flex flexDir={"column"} gap={"5px"}>
              <Box>Log In As</Box>
              <Select
                placeholder="Select Your Role"
                h={"32px"}
                w={"100%"}
                id="role"
                onChange={inputHandler}
              >
                {roles.map((val) => (
                  <option value={val.value}>{val.name}</option>
                ))}
              </Select>
            </Flex>

            <Flex flexDir={"column"} gap={"5px"}>
              <Box>Name</Box>
              <Input
                onChange={inputHandler}
                id="name"
                h={"32px"}
                w={"100%"}
              ></Input>
            </Flex>

            <Flex flexDir={"column"} gap={"5px"}>
              <Box>Password</Box>
              <InputGroup>
                <Input
                  type={seePassword ? "text" : "password"}
                  onChange={inputHandler}
                  id="password"
                  h={"32px"}
                  w={"100%"}
                ></Input>
                <InputRightElement>
                  <Icon
                    as={seePassword ? AiOutlineEye : AiOutlineEyeInvisible}
                    onClick={() => setSeePassword(!seePassword)}
                  ></Icon>
                </InputRightElement>
              </InputGroup>
              {/* <Input w={"400px"}></Input> */}
            </Flex>

            <Flex flexDir={"column"} gap={"5px"}>
              <Button
                bgColor={"#104034dc"}
                fontSize={"25px"}
                color={"white"}
                onClick={login}
              >
                {" "}
                LOGIN{" "}
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
