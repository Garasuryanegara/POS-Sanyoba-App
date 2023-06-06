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
// import AddProductPage from "../pages/AddProductPage";
// import ProductPage from "../pages/ProductPage";
// import AdminPage from "../pages/AdminLandingPage";
// import TransactionDetailPage from "../pages/TransactionDetailPage";

// const routes = [
//   <Route path="/cashier" element={<Homepage />} />,
//   <Route path="/admin" element={<AdminPage />}></Route>,
//   <Route path="/addProduct" element={<AddProductPage />} />,
//   <Route path="/product" element={<ProductPage />} />,
//   <Route path="/trxDetail" element={<TransactionDetailPage />}></Route>,

];

export default routes;
