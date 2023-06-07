import AddProduct from "../components/addProduct";
import { Container, Box, Center } from "@chakra-ui/react";
import SidebarAdmin from "../components/SidebarAdmin";
import ProfileAdmin from "../components/ProfileAdmin";

export default function AddProductPage() {
	return (
		<>
			<Box backgroundColor={"#F1F1F1"} height={"100vh"} width={"100vw"}>
				<Container maxW={"1440px"}>
					<Box display={"flex"}>
						<SidebarAdmin></SidebarAdmin>
						<Box>
							<ProfileAdmin />
							<AddProduct />
						</Box>
					</Box>
				</Container>
			</Box>
		</>
	);
}
