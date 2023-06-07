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
      filename: "",
      desc: "",
      price: "",
      category_id: "",
    },
    onSubmit: async () => {
      const { name, filename, desc, price, category_id } = formik.values;
      const product = new FormData();
      console.log(filename);
      product.append("productImg", filename);
      product.append("name", name);
      product.append("desc", desc);
      product.append("price", price);
      product.append("category_id", category_id);

      // const product = {
      // 	name,
      // 	filename: formData,
      // 	desc,
      // 	price,
      // 	category_id,
      // };
      const checkProduct = await api
        .get("/menus/Draft", {
          params: {
            nameCat: product.name,
          },
        })
        .then((res) => {
          if (res.data.length) {
            return true;
          } else {
            return false;
          }
        });
      if (checkProduct) {
        return alert("product already exist");
      } else {
        console.log(product);
        await api.post("/menus", product).then((res) => {
          alert("product added");
          nav("/product");
        });
      }
    },
  });

  async function inputHandler(event) {
    const { value, id } = event.target;

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
        <Flex id="productInfo">Product Information</Flex>

        {/* outlet */}
        <Flex alignItems={"center"} gap={"120px"} w={"703px"} h={"32px"}>
          <Flex w={"160px"} h={"14px"} flex={"none"} flexGrow={"0"}>
            Outlet<Flex color={"#D0011C"}>*</Flex>
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
            placeholder="Choose your outlet"
          />
        </Flex>
        {/* product name */}
        <Flex alignItems={"center"} gap={"120px"} w={"703px"} h={"32px"}>
          <Flex w={"160px"} h={"14px"} flex={"none"} flexGrow={"0"}>
            Product Name<Flex color={"#D0011C"}>*</Flex>
          </Flex>
          <Input
            className="input"
            placeholder="e.g. Chocolate Truffle Cake"
            h={"32px"}
            w={"423px"}
            id="name"
            onChange={inputHandler}
          ></Input>
        </Flex>
        {/* product desc */}
        <Flex alignItems={"flex-start"} gap={"120px"} w={"703px"} h={"107px"}>
          <Flex w={"160px"} h={"14px"} flex={"none"} flexGrow={"0"}>
            Product Description
          </Flex>
          <Input
            className="input"
            placeholder="e.g. Best Seller"
            h={"107px"}
            w={"423px"}
            id="desc"
            onChange={inputHandler}
          ></Input>
        </Flex>
        {/* price */}
        <Flex
          alignItems={"flex-start"}
          gap={"120px"}
          w={"1136px"}
          h={"50px"}
          flex={"none"}
          flexGrow={"0"}
        >
          <Flex w={"160px"} h={"14px"} flex={"none"} flexGrow={"0"}>
            Price<Flex color={"#D0011C"}>*</Flex>
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
              <Flex w={"60px"} h={"14px"} fontWeight={"400"}>
                Basic Price
              </Flex>
              <Input
                className="input"
                placeholder="e.g. Rp 30.000"
                h={"32px"}
                w={"269.33px"}
                id="price"
                onChange={inputHandler}
              ></Input>
            </Flex>
            <Flex
              flexDir={"column"}
              alignItems={"flex-start"}
              gap={"4px"}
              w={"269.33px"}
              h={"50px"}
              flex={"none"}
              flexGrow={"1"}
            >
              <Flex w={"60px"} h={"14px"} fontWeight={"400"}>
                Sales Price
              </Flex>
              <Input
                className="input"
                placeholder="e.g. Rp 30.000"
                h={"32px"}
                w={"269.33px"}
              ></Input>
            </Flex>
            <Flex
              flexDir={"column"}
              alignItems={"flex-start"}
              gap={"4px"}
              w={"269.33px"}
              h={"50px"}
              flex={"none"}
              flexGrow={"1"}
            >
              <Flex h={"14px"} fontWeight={"400"}>
                Minimum Sales Quantity
              </Flex>
              <Input
                className="input"
                placeholder="e.g. 1"
                h={"32px"}
                w={"269.33px"}
              ></Input>
            </Flex>
          </Flex>
        </Flex>
        {/* product category */}
        <Flex
          flexDir={"row"}
          alignItems={"flex-start"}
          gap={"120px"}
          w={"1136px"}
          h={"72px"}
          flex={"none"}
          alignSelf={"stretch"}
          flexGrow={"0"}
        >
          <Flex w={"160px"} h={"14px"} flex={"none"} flexGrow={"0"}>
            Product Category
          </Flex>
          <Flex
            flexDir={"column"}
            alignItems={"flex-start"}
            gap={"8px"}
            w={"423px"}
            h={"72px"}
            flex={"none"}
            flexGrow={"0"}
          >
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
              placeholder="Choose category"
              id="category_id"
              onChange={inputHandler}
            >
              {categoryList.map((val) => (
                <option value={val.id}>{val.category}</option>
              ))}
            </Select>

            <Button
              display={"flex"}
              flexDir={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              padding={"0px 8px"}
              gap={"4px"}
              w={"423px"}
              h={"32px"}
              colorScheme="white"
              color={"#45BB71"}
              border={"1px solid #45BB71"}
              borderRadius={"4px"}
              flex={"none"}
              alignSelf={"stretch"}
              flexGrow={"0"}
              fontFamily={"roboto"}
              fontStyle={"normal"}
              fontWeight={"400"}
              fontSize={"12px"}
              lineHeight={"14px"}
            >
              + Add Variant
            </Button>
          </Flex>
        </Flex>
        {/* product photo */}
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
              Product Photo
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
        {/* sku */}
        <Flex
          flexDir={"row"}
          alignItems={"flex-start"}
          gap={"120px"}
          w={"703px"}
          h={"32px"}
          flex={"none"}
          flexGrow={"0"}
        >
          <Flex alignItems={"center"} gap={"120px"} w={"703px"} h={"32px"}>
            <Flex w={"160px"} h={"14px"} flex={"none"} flexGrow={"0"}>
              SKU (Stock Keeping Unit)
            </Flex>
            <Input
              className="input"
              placeholder="e.g. CAK001"
              h={"32px"}
              w={"423px"}
            ></Input>
          </Flex>
        </Flex>
        {/* stock qty */}
        <Flex
          flexDir={"row"}
          alignItems={"flex-start"}
          gap={"120px"}
          w={"703px"}
          h={"32px"}
          flex={"none"}
          flexGrow={"0"}
        >
          <Flex alignItems={"center"} gap={"120px"} w={"703px"} h={"32px"}>
            <Flex w={"160px"} h={"14px"} flex={"none"} flexGrow={"0"}>
              Stock Quantity<Flex color={"#D0011C"}>*</Flex>
            </Flex>
            <Input
              className="input"
              placeholder="e.g. 120"
              h={"32px"}
              w={"423px"}
            ></Input>
          </Flex>
        </Flex>
        {/* stock alert */}
        <Flex alignItems={"center"} gap={"120px"} w={"703px"} h={"50px"}>
          <Flex
            flexDir={"column"}
            alignItems={"flex-start"}
            padding={"0px"}
            gap={"8px"}
          >
            <Flex w={"160px"} h={"14px"} flex={"none"} flexGrow={"0"}>
              Stock Alert
            </Flex>
            <Flex w={"160px"} h={"28px"} color={"rgba(53, 53, 53, 0.6)"}>
              Activate stock alert to get the stock monitoring.
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
