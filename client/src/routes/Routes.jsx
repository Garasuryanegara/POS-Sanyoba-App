import { Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import AddProductPage from "../pages/AddProductPage";
import ProductPage from "../pages/ProductPage";

const routes = [
	<Route path="/" element={<Homepage />} />,
	<Route path="/addProduct" element={<AddProductPage />} />,
	<Route path="/product" element={<ProductPage />} />,
];

export default routes;
