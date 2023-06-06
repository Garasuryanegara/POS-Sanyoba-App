import { Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import AdminPage from "../pages/LandingPageAdmin";
import ProtectedPage from "./ProtectedPage";

const routes = [
  <Route
    path="/cashierLand"
    element={
      <ProtectedPage guestOnly={true} needLogin={true}>
        <Homepage />
      </ProtectedPage>
    }
  ></Route>,

  <Route
    path="/adminLand"
    element={
      <ProtectedPage guestOnly={false} needLogin={true}>
        <AdminPage />
      </ProtectedPage>
    }
  ></Route>,

  <Route
    path="/login"
    element={
      <ProtectedPage guestOnly={false} needLogin={false}>
        <LoginPage />
      </ProtectedPage>
    }
  ></Route>,

  // <Route
  //   path="/admin"
  //   element={
  //     <ProtectedPage
  //       // adminOnly={true}
  //       // cashier={false}
  //       guestOnly={false}
  //       needLogin={true}
  //     >
  //       <AdminPage />
  //     </ProtectedPage>
  //   }
  // ></Route>,

  // <Route path="/" element={<Homepage />}></Route>,
  // <Route path="/adminland" element={<AdminPage />}></Route>,
  // <Route path="/login" element={<LoginPage />}></Route>,
];

export default routes;
