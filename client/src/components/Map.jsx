import "../css/AddProductPage.css";
import {
	Flex,
	Text,
	Checkbox,
	Image,
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

import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useState, useEffect } from "react";
import { EditProduct } from "./ModalProduct";

export default function Map({ val, deleteMenu, getAll }) {
	const [kobel, setKobel] = useState(true);
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Flex
				flexDir={"row"}
				justifyContent={"center"}
				alignItems={"center"}
				padding={"0px 16px"}
				gap={"24px"}
				w={"1168px"}
				h={"46px"}
				borderBottom={"1px solid rgba(53, 53, 53, 0.1)"}
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
					<Flex gap={"8px"} alignItems={"center"}>
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
					<Flex gap={"5px"} alignItems={"center"}>
						<Text>Grand Batam Mall</Text>
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
					<Flex gap={"5px"} alignItems={"center"}>
						<Text>{val.Category.category}</Text>
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
					<Flex gap={"5px"} alignItems={"center"}>
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
						<Modal isOpen={isOpen} onClose={onClose}>
							<ModalOverlay />
							<ModalContent>
								{kobel ? (
									<EditProduct onClose={onClose} id={val.id} getAll={getAll} />
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
								<Modal isOpen={isOpen} onClose={onClose}>
									<ModalOverlay />
									<ModalContent>
										<ModalHeader>Remove Item</ModalHeader>
										<ModalCloseButton />
										<ModalBody>
											Deleting the
											{` ${val.name} `}
											will permanently remove it from the list and cannot be
											undone.
										</ModalBody>

										<ModalFooter>
											<Button
												w={"50%"}
												bgColor={"white"}
												border={"1px"}
												mr={3}
												onClick={onClose}
											>
												Close
											</Button>
											<Button
												w={"50%"}
												bgColor={"#D0011C	"}
												color={"white"}
												onClick={() => {
													onClose();
													deleteMenu(val);
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
		</>
	);
}
