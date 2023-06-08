import "../css/AddProductPage.css";
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  Text,
  Select,
  Switch,
  Image,
} from "@chakra-ui/react";
import { HiOutlineUpload } from "react-icons/hi";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { api } from "../api/api";

export default function AddStaff() {
  const inputFileRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imgUrl, setImgUrl] = useState();
  const nav = useNavigate();

  useEffect(() => {
    categoryId();
  }, []);

  const [categoryList, setCategoryList] = useState([]);

  const categoryId = async () => {
    await api.get("/categories", categoryList).then((res) => {
      setCategoryList(res.data);
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      role: "",
      phone: "",
      address: "",
      filename: "",
    },
    onSubmit: async () => {
      const { name, password, role, phone, address, filename } = formik.values;
      const staff = new FormData();
      console.log(filename);
      staff.append("staffImg", filename);
      staff.append("name", name);
      staff.append("password", password);
      staff.append("role", role);
      staff.append("phone", phone);
      staff.append("address", address);

      const checkStaff = await api
        .get("/users", {
          params: {
            search: staff.name,
          },
        })
        .then((res) => {
          if (res.data.length) {
            return true;
          } else {
            return false;
          }
        });
      console.log(checkStaff);
      if (checkStaff) {
        return "staff already exist";
      } else {
        console.log(staff);
        await api.post("/users", staff).then((res) => {
          alert("staff added");
          console.log(res.data);
          // nav("/staff");
        });
      }
    },
  });

  async function inputHandler(event) {
    const { value, id } = event.target;
    console.log({ id, value });

    formik.setFieldValue(id, value);
  }

  const handleFile = async (event) => {
    const file = event.target.files[0];
    formik.setFieldValue("filename", file);
    console.log(file);
    setSelectedFile(file);

    //buat ngemuncuin gambar----------
    const reader = new FileReader();
    reader.onload = () => {
      setImgUrl(reader.result);
    };
    reader.readAsDataURL(file);
    //--------------------------------
  };
  return (
    <>
      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"flex-start"}
        padding={"16px"}
        gap={"32px"}
        position={"absolute"}
        w={"1168px"}
        h={"1051px"}
        left={"248"}
        top={"178px"}
        borderRadius={"8px"}
        fontFamily={"Roboto"}
        fontStyle={"normal"}
        fontWeight={"500"}
        fontSize={"12px"}
        lineHeight={"14px"}
        color={"#353535"}
        background={"#ffff"}
      >
        <Flex id="staffInfo">Employee Information</Flex>

        <Flex alignItems={"center"} gap={"120px"} w={"703px"} h={"32px"}>
          <Flex w={"160px"} h={"14px"} flex={"none"} flexGrow={"0"}>
            Name<Flex color={"#D0011C"}>*</Flex>
          </Flex>
          <Input
            className="input"
            placeholder="staff name"
            h={"32px"}
            w={"423px"}
            id="name"
            onChange={inputHandler}
          ></Input>
        </Flex>
        <Flex alignItems={"center"} gap={"120px"} w={"703px"} h={"32px"}>
          <Flex w={"160px"} h={"14px"} flex={"none"} flexGrow={"0"}>
            Password<Flex color={"#D0011C"}>*</Flex>
          </Flex>
          <Input
            className="input"
            placeholder="password"
            h={"32px"}
            w={"423px"}
            id="password"
            onChange={inputHandler}
          ></Input>
        </Flex>
        {/* product name */}
        <Flex alignItems={"center"} gap={"120px"} w={"703px"} h={"32px"}>
          <Flex w={"160px"} h={"14px"} flex={"none"} flexGrow={"0"}>
            Role<Flex color={"#D0011C"}>*</Flex>
          </Flex>

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
            h={"32px"}
            w={"423px"}
            borderRadius={"8px"}
            placeholder="Choose the role"
            id="role"
            onChange={inputHandler}
          >
            <option value="admin">admin</option>
            <option value="user">user</option>

            {/* {categoryList.map((val) => (
              <option value={val.id}>{val.category}</option>
            ))} */}
          </Select>
        </Flex>

        {/* phone */}
        <Flex
          alignItems={"flex-start"}
          gap={"120px"}
          w={"1136px"}
          h={"50px"}
          flex={"none"}
          flexGrow={"0"}
        >
          <Flex w={"160px"} h={"14px"} flex={"none"} flexGrow={"0"}>
            Phone<Flex color={"#D0011C"}>*</Flex>
          </Flex>
          <Flex
            flexDir={"row"}
            alignItems={"center"}
            gap={"24px"}
            w={"856px"}
            h={"50px"}
            flex={"none"}
            flexGrow={"1"}
          >
            <Flex
              flexDir={"column"}
              alignItems={"flex-start"}
              gap={"4px"}
              w={"269.33px"}
              h={"50px"}
              flex={"none"}
              flexGrow={"1"}
            >
              <Input
                className="input"
                placeholder="phone number"
                h={"32px"}
                w={"269.33px"}
                id="phone"
                onChange={inputHandler}
              ></Input>
            </Flex>
          </Flex>
        </Flex>
        <Flex alignItems={"flex-start"} gap={"120px"} w={"703px"} h={"107px"}>
          <Flex w={"160px"} h={"14px"} flex={"none"} flexGrow={"0"}>
            Address
          </Flex>
          <Input
            className="input"
            placeholder="Staff Address"
            h={"107px"}
            w={"423px"}
            id="address"
            onChange={inputHandler}
          ></Input>
        </Flex>

        {/* staff photo */}
        <Flex
          flexDir={"row"}
          alignItems={"flex-start"}
          gap={"120px"}
          w={"703px"}
          h={"160px"}
          flex={"none"}
          flexGrow={"0"}
        >
          <Flex
            flexDirection={"column"}
            alignItems={"flex-start"}
            padding={"0px"}
            gap={"8px"}
            w={"160px"}
            h={"148px"}
            flex={"none"}
            flexGrow={"0"}
          >
            <Flex
              w={"160px"}
              h={"14px"}
              fontFamily={"roboto"}
              fontStyle={"normal"}
              fontWeight={"500"}
              fontSize={"12px"}
              lineHeight={"14px"}
              color={"#353535"}
              flex={"none"}
              alignSelf={"stretch"}
              flexGrow={"0"}
            >
              Staff Photo
            </Flex>
            <Flex
              w={"160px"}
              h={"126px"}
              fontFamily={"roboto"}
              fontStyle={"normal"}
              fontWeight={"400"}
              fontSize={"12px"}
              lineHeight={"14px"}
              color={"rgba(53, 53, 53, 0.6);"}
              flex={"none"}
              alignSelf={"stretch"}
              flexGrow={"0"}
            >
              Use a 1:1 photo ratio with file size between 10KB and a maximum of
              1MB. <br />
              Acceptable formats are .jpg, .jpeg, and .png. The minimum size
              should be 100px x 100px for optimal display. You can upload a
              maximum of 5 photos.
            </Flex>
          </Flex>
          <>
            <Input
              accept="image/png, image/jpeg"
              onChange={(e) => {
                handleFile(e);
                // inputHandler(e);
              }}
              ref={inputFileRef}
              type="file"
              display={"none"}
              id="filename"
            ></Input>
            {!selectedFile ? (
              <Box
                display={"flex"}
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                padding={"16px"}
                gap={"16px"}
                w={"140px"}
                h={"160px"}
                border={"1px dashed rgba(53, 53, 53, 0.3);"}
                borderRadius={"8px"}
                flex={"none"}
                flexGrow={"0"}
                textAlign={"center"}
                fontFamily={"roboto"}
                fontStyle={"normal"}
                fontWeight={"400"}
                fontSize={"12px"}
                lineHeight={"14px"}
                color={"#353535"}
              >
                <Icon as={HiOutlineUpload} w={"16px"} h={"16px"} />
                <Text as={"span"}>
                  Drag and Drop File or{" "}
                  <Text
                    as={"span"}
                    onClick={() => inputFileRef.current.click()}
                    cursor={"pointer"}
                    color={"#45BB71"}
                    textDecor={"underline"}
                  >
                    Browse
                  </Text>
                </Text>
              </Box>
            ) : (
              <Image
                onClick={() => setSelectedFile(0)}
                display={"flex"}
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                padding={"16px"}
                gap={"16px"}
                w={"140px"}
                h={"160px"}
                border={"1px dashed rgba(53, 53, 53, 0.3);"}
                borderRadius={"8px"}
                flex={"none"}
                flexGrow={"0"}
                textAlign={"center"}
                fontFamily={"roboto"}
                fontStyle={"normal"}
                fontWeight={"400"}
                fontSize={"12px"}
                lineHeight={"14px"}
                color={"#353535"}
                src={imgUrl}
              ></Image>
            )}
          </>
        </Flex>

        {/* super admin */}
        <Flex alignItems={"center"} gap={"120px"} w={"703px"} h={"50px"}>
          <Flex
            flexDir={"column"}
            alignItems={"flex-start"}
            padding={"0px"}
            gap={"8px"}
          >
            <Flex w={"160px"} h={"14px"} flex={"none"} flexGrow={"0"}>
              Super Admin
            </Flex>
            <Flex w={"160px"} h={"28px"} color={"rgba(53, 53, 53, 0.6)"}>
              Activate super admin to get the full access to all features
            </Flex>
          </Flex>
          <Switch />
        </Flex>
        {/* button */}
        <Box
          display={"flex"}
          w={"100%"}
          h={"100%"}
          justifyContent={"flex-end"}
          alignItems={"flex-end"}
        >
          <Box
            display={"flex"}
            flexDir={"row"}
            justifyContent={"flex-end"}
            alignItems={"flex-start"}
            padding={"0px"}
            gap={"8px"}
            flex={"none"}
            flexGrow={"0"}
            w={"322px"}
            h={"30px"}
            left={"879px"}
          >
            <Button
              w={"102px"}
              h={"30px"}
              border={"1px solid #369A64"}
              borderRadius={"8px"}
              fontFamily={"roboto"}
              fontStyle={"normal"}
              fontWeight={"700"}
              fontSize={"12px"}
              lineHeight={"14px"}
              color={"#369A64"}
              colorScheme="white"
            >
              Cancel
            </Button>
            <Button
              w={"102px"}
              h={"30px"}
              border={"1px solid #369A64"}
              borderRadius={"8px"}
              fontFamily={"roboto"}
              fontStyle={"normal"}
              fontWeight={"700"}
              fontSize={"12px"}
              lineHeight={"14px"}
              color={"#369A64"}
              colorScheme="white"
            >
              Draft
            </Button>
            <Button
              w={"102px"}
              h={"30px"}
              borderRadius={"8px"}
              fontFamily={"roboto"}
              fontStyle={"normal"}
              fontWeight={"700"}
              fontSize={"12px"}
              lineHeight={"14px"}
              color={"white"}
              bgColor={"#369A64"}
              onClick={formik.handleSubmit}
            >
              Add Staff
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
