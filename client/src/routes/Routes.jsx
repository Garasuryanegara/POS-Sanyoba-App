import { Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import AddProductPage from "../pages/AddProductPage";
import ProductPage from "../pages/ProductPage";
import AdminPage from "../pages/AdminLandingPage";
import TransactionDetailPage from "../pages/TransactionDetailPage";
import AddStaffPage from "../pages/AddStaffPage";
import ProtectedPage from "./ProtectedPage";
import LoginPage from "../pages/LoginPage";
import AddEmployeePage from "../pages/Employee";

const routes = [
  <Route
    path="/cashierland"
    element={
      <ProtectedPage needLogin={true}>
        <Homepage />
      </ProtectedPage>
    }
  ></Route>,

  <Route
    path="/adminland"
    element={
      <ProtectedPage needLogin={true} adminOnly={true}>
        <AdminPage />
      </ProtectedPage>
    }
  ></Route>,

  <Route
    path="/login"
    element={
      <ProtectedPage guestOnly={true}>
        <LoginPage />
      </ProtectedPage>
    }
  ></Route>,

  <Route
    path="/staff"
    element={
      <ProtectedPage needLogin={true} adminOnly={true}>
        <AddStaffPage />
      </ProtectedPage>
    }
  ></Route>,
  <Route path="/addproduct" element={<AddProductPage />} />,
  // <Route path="/staff" element={<AddStaffPage />} />,
  <Route path="/product" element={<ProductPage />} />,

  <Route path="/emp" element={<AddEmployeePage />} />,
  <Route path="/trx-detail" element={<TransactionDetailPage />}></Route>,
];

export default routes;
