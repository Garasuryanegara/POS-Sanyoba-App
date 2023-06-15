import { Box, Center, Container } from "@chakra-ui/react";
import SidebarAdmin from "../components/SidebarAdmin";
import Employee from "../components/employee";
import ProfileAdmin2 from "../components/ProfileAdmin2";

export default function AddEmployeePage() {
  return (
    <>
      <Box backgroundColor={"#F1F1F1"}>
        <Container maxW={"1440px"} padding={"0"}>
          <Box display={"flex"}>
            <SidebarAdmin></SidebarAdmin>
            <Box width={"100%"}>
              <ProfileAdmin2 />
              <Employee />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
