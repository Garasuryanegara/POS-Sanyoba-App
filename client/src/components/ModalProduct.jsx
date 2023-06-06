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

export function EditProduct(props) {
	const [selectedFile, setSelectedFile] = useState(null);
	const inputFileRef = useRef(null);
	const [categoryList, setCategoryList] = useState([]);
	const [product, setProduct] = useState({
		name: "",
		price: "",
		category_id: "",
	});

	const [image, setImage] = useState();

	const handleFile = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	useEffect(() => {
		categoryId();
	}, []);

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
					<Flex fontWeight={"bold"}>Product details</Flex>
					<Flex alignItems={"end"}>
						<Icon
							as={IoMdClose}
							color="black"
							cursor={"pointer"}
							onClick={() => props.onClose()}
						></Icon>
					</Flex>
				</Flex>
				<Flex
					padding={"0px 24px 24px 24px"}
					justifyContent={"space-between"}
				>
					<Flex flexDir={"column"} gap="10px">
						<Image w={"180px"} h="180px"></Image>
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
						></Input>
						<Textarea
							w="280px"
							h="40px"
							placeholder="Product description"
							resize={"none"}
						></Textarea>
						<Input w="280px" h="40px" placeholder="Price"></Input>
						<Select w="280px" h="40px" borderRadius={"8px"}>
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
					>
						SAVE
					</Center>
				</Center>
			</Flex>
		</>
	);
}
