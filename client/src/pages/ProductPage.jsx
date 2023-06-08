import { Box, Center, Container } from "@chakra-ui/react";
import Product from "../components/product";
import SidebarAdmin from "../components/SidebarAdmin";
import ProfileAdmin from "../components/ProfileAdmin";

export default function AddProductPage() {
  return (
    <>
      <Center>
        <Box backgroundColor={"#F1F1F1"} w={"1440px"}>
          <Container maxW={"1440px"} padding={"0"}>
            <Box display={"flex"}>
              <SidebarAdmin></SidebarAdmin>
              <Box width={"100%"}>
                <ProfileAdmin />
                <Product />
              </Box>
            </Box>
          </Container>
        </Box>
      </Center>
    </>
  );
}
