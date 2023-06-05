import { Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import AddProductPage from "../pages/AddProductPage";
import ProductPage from "../pages/ProductPage";
import AdminPage from "../pages/AdminLandingPage";
import HomePageCashier from "../pages/HomePageCashier";
import TransactionDetailPage from "../pages/TransactionDetailPage";

const routes = [
  <Route path="/" element={<Homepage />} />,
  <Route path="/admin" element={<AdminPage />}></Route>,
  <Route path="/addProduct" element={<AddProductPage />} />,
  <Route path="/product" element={<ProductPage />} />,
  <Route path="/cashier-landing-page" element={<HomePageCashier />}></Route>,
  <Route path="/trx-detail-page" element={<TransactionDetailPage />}></Route>,
];

export default routes;
