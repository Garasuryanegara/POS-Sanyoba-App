import AddProduct from "../components/addProduct";
import { Container, Box, Center } from "@chakra-ui/react";
import SidebarAdmin from "../components/SidebarAdmin";
import ProfileAdmin from "../components/ProfileAdmin";
import AddStaff from "../components/addStaff";

export default function AddStaffPage() {
  return (
    <>
      <Box backgroundColor={"#F1F1F1"} height={"100vh"} width={"100vw"}>
        <Container maxW={"1440px"}>
          <Box display={"flex"}>
            <SidebarAdmin></SidebarAdmin>
            <Box>
              <ProfileAdmin />
              <Box>
                <AddStaff />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
