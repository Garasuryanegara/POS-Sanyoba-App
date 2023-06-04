import { Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import AdminPage from "../pages/AdminLandingPage";

const routes = [
  <Route path="/" element={<Homepage />}></Route>,
  <Route path="/admin" element={<AdminPage />}></Route>,
];

export default routes;
