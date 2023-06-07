import { Container, Box, Center } from "@chakra-ui/react";
import SidebarAdmin from "../components/SidebarAdmin";
import MainAdmin from "../components/MainAdmin";
export default function AdminPage() {

  return (
    <Box
      // height={"100vh"}
      // width={"100vw"}
      backgroundColor={"#F1F1F1"}
    >
      <Container maxW={"1440px"} padding={"0"}>
        <Box display={"flex"}>
          <SidebarAdmin></SidebarAdmin>
          <Box width={"100%"}>
            <MainAdmin></MainAdmin>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
