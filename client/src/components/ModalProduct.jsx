import {
	Flex,
	Icon,
	Image,
	Input,
	Textarea,
	Center,
	Select,
	Button,
} from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { api } from "../api/api";

export function EditProduct({ getAll, onClose, id }) {
	const [imgUrl, setImgUrl] = useState();
	const [jembut, setJembut] = useState({
		name: "",
		filename: "",
		desc: "",
		price: 0,
		category_id: "",
	});
	const inputFileRef = useRef(null);

	async function inputHandler(event) {
		const { value, id } = event.target;
		let tempObj = {};
		tempObj[id] = value;
		setJembut({ ...jembut, ...tempObj });
	}

	async function onSubmit() {
		console.log(jembut);
		const { name, filename, desc, price, category_id } = jembut;
		const product = new FormData();
		console.log(filename);
		product.append("productImg", filename);
		product.append("name", name);
		product.append("desc", desc);
		product.append("price", price);
		product.append("category_id", category_id);

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
			await api.patch("/menus/" + id, product).then((res) => {
				// alert("product edited");
				onClose();
				getAll();
			});
		}
	}

	const handleFile = async (event) => {
		const file = event.target.files[0];
		console.log(file);
		setJembut({ ...jembut, filename: file });
		//buat ngemuncuin gambar----------
		const reader = new FileReader();
		reader.onload = () => {
			setImgUrl(reader.result);
		};
		reader.readAsDataURL(file);
		//--------------------------------
	};

	useEffect(() => {
		categoryId();
	}, []);

	const [categoryList, setCategoryList] = useState([]);

	const categoryId = async () => {
		await api.get("/categories", categoryList).then((res) => {
			setCategoryList(res.data);
		});
	};
	return (
		<>
			<Flex
				bgColor={"white"}
				maxW={"524px"}
				w={"524px"}
				h="100%"
				borderRadius={"5px"}
				flexDir={"column"}
				pb="20px"
			>
				<Flex
					justifyContent={"space-between"}
					w="100%"
					fontSize="24px"
					padding={"24px"}
				>
					<Flex fontWeight={"bold"}>Edit product details</Flex>
					<Flex alignItems={"end"}>
						<Icon
							as={IoMdClose}
							color="black"
							cursor={"pointer"}
							onClick={() => onClose()}
						></Icon>
					</Flex>
				</Flex>
				<Flex padding={"0px 24px 24px 24px"} justifyContent={"space-between"}>
					<Flex flexDir={"column"} gap="10px">
						<Image w={"180px"} h="180px" src={imgUrl}></Image>
						<Input
							accept="image/png, image/jpeg"
							ref={inputFileRef}
							type="file"
							onChange={handleFile}
							display={"none"}
						></Input>
						<Button
							fontWeight={"hairline"}
							onClick={() => inputFileRef.current.click()}
						>
							Change photo
						</Button>
					</Flex>
					<Flex flexDir={"column"} gap={"10px"}>
						<Input
							w="280px"
							h="40px"
							placeholder="Product name"
							id="name"
							onChange={inputHandler}
						></Input>
						<Textarea
							w="280px"
							h="40px"
							placeholder="Product description"
							resize={"none"}
							id="desc"
							onChange={inputHandler}
						></Textarea>
						<Input
							w="280px"
							h="40px"
							placeholder="Price"
							id="price"
							onChange={inputHandler}
						></Input>
						<Select
							w="280px"
							h="40px"
							borderRadius={"8px"}
							id="category_id"
							onChange={inputHandler}
						>
							<option value="">Select Categories</option>
							{categoryList.map((val) => (
								<option value={val.id}>{val.category}</option>
							))}
						</Select>
					</Flex>
				</Flex>

				<Center w="100%">
					<Center
						borderRadius={"5px"}
						fontWeight={"600"}
						color={"white"}
						bgColor={"#38A169"}
						h="48px"
						w="90%"
						cursor={"pointer"}
						onClick={jembut.category_id ? onSubmit : null}
					>
						SAVE
					</Center>
				</Center>
			</Flex>
		</>
	);
}
