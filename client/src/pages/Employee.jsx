import { Box, Center, Container } from "@chakra-ui/react";
import SidebarAdmin from "../components/SidebarAdmin";
import ProfileAdmin from "../components/ProfileAdmin";
import Employee from "../components/employee";

export default function AddEmployeePage() {
  return (
    <>
      <Center>
        <Box
          backgroundColor={"#F1F1F1"}
          //  w={"1440px"}
        >
          <Container maxW={"1440px"} padding={"0"}>
            <Box display={"flex"}>
              <SidebarAdmin></SidebarAdmin>
              <Box width={"100%"}>
                <ProfileAdmin />
                <Employee />
              </Box>
            </Box>
          </Container>
        </Box>
      </Center>
    </>
  );
}
