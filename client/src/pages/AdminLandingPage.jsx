import { Container, Box, Center } from "@chakra-ui/react";
import SidebarAdmin from "../components/SidebarAdmin";
import MainAdmin from "../components/MainAdmin";
export default function AdminPage() {
  try {
    return (
      <Box backgroundColor={"#F1F1F1"} height={"100vh"} width={"100vw"}>
        <Container maxW={"1440px"}>
          <Box display={"flex"}>
            <SidebarAdmin></SidebarAdmin>
            <Box>
              <MainAdmin></MainAdmin>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  } catch (error) {
    <>
      <Center>
        <h2>Error</h2>
      </Center>
      {console.log(error)}
    </>;
  }
}
