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
import { EditProduct } from "./ModalProduct";

export default function Product() {
	const [menu, setMenu] = useState([]);
	const [kobel, setKobel] = useState(true);
	const { isOpen, onOpen, onClose } = useDisclosure();

	console.log(menu);
	useEffect(() => {
		getAll();
	}, []);

	async function deleteMenu(val) {
		await api.delete("/menus/" + val.id);
		// alert("Product deleted");
		getAll();
	}

	async function getAll() {
		await api.get("/menus/all").then((res) => {
			console.log(res.data);
			setMenu(res.data);
		});
	}

	return (
		<>
			<Box
				background={"#FFFFFF"}
				display={"flex"}
				flexDir={"column"}
				alignItems={"flex-start"}
				padding={"16px 0px"}
				gap={"24px"}
				position={"absolute"}
				w={"1168px"}
				h={"634px"}
				left={"248px"}
				top={"150px"}
				borderRadius={"8px"}
				fontFamily={"Roboto"}
				fontStyle={"normal"}
				fontWeight={"500"}
				fontSize={"1px"}
				lineHeight={"14px"}
				color={"#353535"}
				// border={"1px"}
			>
				<Box
					display={"flex"}
					flexDir={"row"}
					padding={"0px 16px"}
					gap={"24px"}
					w={"1168px"}
					h={"32px"}
				>
					{/* categories */}
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
						placeholder="All Type of Category"
					/>
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
							placeholder="Search"
							w={"266px"}
							h={"32px"}
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
									<Text>Product Name</Text>
								</Flex>

								<Flex flexDir={"column"}>
									<Icon
										cursor={"pointer"}
										as={MdArrowDropUp}
									/>
									<Icon
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
									<Icon
										cursor={"pointer"}
										as={MdArrowDropUp}
									/>
									<Icon
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
									<Text>SKU (Stock Keeping Unit)</Text>
								</Flex>

								<Flex flexDir={"column"}>
									<Icon
										cursor={"pointer"}
										as={MdArrowDropUp}
									/>
									<Icon
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
									<Text>Category</Text>
								</Flex>

								<Flex flexDir={"column"}>
									<Icon
										cursor={"pointer"}
										as={MdArrowDropUp}
									/>
									<Icon
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
									<Text>Sales Price Per Item</Text>
								</Flex>
								<Flex flexDir={"column"}>
									<Icon
										cursor={"pointer"}
										as={MdArrowDropUp}
									/>
									<Icon
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
								<Flex flexDir={"column"}>
									<Icon
										cursor={"pointer"}
										as={MdArrowDropUp}
									/>
									<Icon
										cursor={"pointer"}
										as={MdArrowDropDown}
									/>
								</Flex>
							</Flex>
							<Flex w={"16px"} h={"48px"}></Flex>
						</Flex>
						{/* map */}
						{menu.length
							? menu?.map((val) => {
									return (
										<Flex
											flexDir={"row"}
											justifyContent={"center"}
											alignItems={"center"}
											padding={"0px 16px"}
											gap={"24px"}
											w={"1168px"}
											h={"46px"}
											borderBottom={
												"1px solid rgba(53, 53, 53, 0.1)"
											}
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
												<Flex
													gap={"8px"}
													alignItems={"center"}
												>
													<Checkbox />
													<Image
														src={val.img_url}
														w={"24px"}
														h={"24px"}
														borderRadius={"4px"}
													/>
													<Text>{val.name} </Text>
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
												<Flex
													gap={"5px"}
													alignItems={"center"}
												>
													<Text>
														Grand Batam Mall
													</Text>
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
												<Flex
													gap={"5px"}
													alignItems={"center"}
												>
													<Text>CAK021</Text>
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
												<Flex
													gap={"5px"}
													alignItems={"center"}
												>
													<Text>
														{val.category_id}
													</Text>
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
												<Flex
													gap={"5px"}
													alignItems={"center"}
												>
													<Text>{val.price}</Text>
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
												<Flex
													gap={"5px"}
													alignItems={"center"}
												>
													<Text
														color={"#45BB71"}
														fontFamily={"Roboto"}
														fontStyle={"normal"}
														fontWeight={"500"}
														fontSize={"12px"}
														lineHeight={"14px"}
													>
														Published
													</Text>
												</Flex>
											</Flex>
											<Menu>
												<MenuButton
													as={BiDotsHorizontalRounded}
													w={"16px"}
													h={"48px"}
													cursor={"pointer"}
												/>
												<MenuList>
													<MenuItem>Publish</MenuItem>
													<MenuItem
														onClick={() => {
															onOpen();
															setKobel(true);
														}}
													>
														Edit
													</MenuItem>
													<Modal
														isOpen={isOpen}
														onClose={onClose}
													>
														<ModalOverlay />
														<ModalContent>
															{kobel ? (
																<EditProduct
																	onClose={
																		onClose
																	}
																	id={val.id}
																/>
															) : null}
														</ModalContent>
													</Modal>
													<MenuItem
														onClick={() => {
															onOpen();
															setKobel(false);
														}}
													>
														Remove
													</MenuItem>
													{!kobel ? (
														<>
															<Modal
																isOpen={isOpen}
																onClose={
																	onClose
																}
															>
																<ModalOverlay />
																<ModalContent>
																	<ModalHeader>
																		Remove
																		Item
																	</ModalHeader>
																	<ModalCloseButton />
																	<ModalBody>
																		Deleting
																		the
																		{` ${val.name} `}
																		will
																		permanently
																		remove
																		it from
																		the list
																		and
																		cannot
																		be
																		undone.
																	</ModalBody>

																	<ModalFooter>
																		<Button
																			w={
																				"50%"
																			}
																			bgColor={
																				"white"
																			}
																			border={
																				"1px"
																			}
																			mr={
																				3
																			}
																			onClick={
																				onClose
																			}
																		>
																			Close
																		</Button>
																		<Button
																			w={
																				"50%"
																			}
																			bgColor={
																				"#D0011C	"
																			}
																			color={
																				"white"
																			}
																			onClick={() => {
																				deleteMenu(
																					val
																				);
																			}}
																		>
																			Remove
																		</Button>
																	</ModalFooter>
																</ModalContent>
															</Modal>
														</>
													) : null}
												</MenuList>
											</Menu>
										</Flex>
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
								<Icon as={MdKeyboardArrowDown} />
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
								Shown 1-2 from 2 page
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
								<Flex cursor={"pointer"} alignItems={"center"}>
									<Icon as={MdOutlineArrowBackIos} /> Back
								</Flex>
								<Flex flexDir={"row"} gap={"8px"}>
									<Flex>1</Flex>
									<Flex>2</Flex>
									<Flex>3</Flex>
									<Flex>4</Flex>
									<Flex>...</Flex>
								</Flex>
								<Flex cursor={"pointer"} alignItems={"center"}>
									Next
									<Icon as={MdOutlineArrowForwardIos} />
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				</Box>
			</Box>
		</>
	);
}
