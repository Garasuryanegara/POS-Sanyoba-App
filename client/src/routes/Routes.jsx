import { Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import AddProductPage from "../pages/AddProductPage";
import ProductPage from "../pages/ProductPage";
import AdminPage from "../pages/AdminLandingPage";
import TransactionDetailPage from "../pages/TransactionDetailPage";

const routes = [
  <Route path="/cashier" element={<Homepage />} />,
  <Route path="/admin" element={<AdminPage />}></Route>,
  <Route path="/addProduct" element={<AddProductPage />} />,
  <Route path="/product" element={<ProductPage />} />,
  <Route path="/trxDetail" element={<TransactionDetailPage />}></Route>,
];

export default routes;
