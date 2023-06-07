import AddProduct from "../components/addProduct";
import { Container, Box, Center } from "@chakra-ui/react";
import SidebarAdmin from "../components/SidebarAdmin";
import ProfileAdmin from "../components/ProfileAdmin";

export default function AddProductPage() {
	return (
		<>
			<Box backgroundColor={"#F1F1F1"}>
				<Container maxW={"1440px"} padding={"0"}>
					<Box display={"flex"}>
						<SidebarAdmin></SidebarAdmin>
						<Box width={"100%"}>
							<ProfileAdmin />
							<AddProduct />
						</Box>
					</Box>
				</Container>
			</Box>
		</>
	);
}
