import { Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import AddProductPage from "../pages/AddProductPage";
import ProductPage from "../pages/ProductPage";
import AdminPage from "../pages/AdminLandingPage";
import TransactionDetailPage from "../pages/TransactionDetailPage";
import ProtectedPage from "./ProtectedPage";
import LoginPage from "../pages/LoginPage";

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
      <ProtectedPage guestOnly={true} needLogin={true}>
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
  <Route path="/addProduct" element={<AddProductPage />} />,
  <Route path="/staff" element={<AddProductPage />} />,
  <Route path="/product" element={<ProductPage />} />,
  <Route path="/trxDetail" element={<TransactionDetailPage />}></Route>,
];

export default routes;
