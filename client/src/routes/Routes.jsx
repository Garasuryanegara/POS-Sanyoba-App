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
  <Route
    path="/addproduct"
    element={
      <ProtectedPage needLogin={true} adminOnly={true}>
        <AddProductPage />
      </ProtectedPage>
    }
  ></Route>,
  <Route
    path="/product"
    element={
      <ProtectedPage needLogin={true} adminOnly={true}>
        <ProductPage />
      </ProtectedPage>
    }
  ></Route>,
  <Route
    path="/emp"
    element={
      <ProtectedPage needLogin={true} adminOnly={true}>
        <AddEmployeePage />
      </ProtectedPage>
    }
  ></Route>,
  <Route
    path="/trx-detail"
    element={
      <ProtectedPage needLogin={true}>
        <TransactionDetailPage />
      </ProtectedPage>
    }
  ></Route>,
];

export default routes;
