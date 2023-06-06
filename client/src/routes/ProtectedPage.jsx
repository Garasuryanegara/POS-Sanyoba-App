import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedPage({
  children,
  adminOnly,
  cashier,
  needLogin,
  guestOnly,
}) {
  const user = JSON.parse(localStorage.getItem("auth"));
  const nav = useNavigate();
  console.log(user);

  useEffect(() => {
    if (guestOnly && user?.role == "admin") {
      return nav("/adminLand");
    } else if (guestOnly && user?.role == "cashier") {
      return nav("/cashierLnd");
    } else if (needLogin && !user?.role) {
      return nav("/login");
    }

    // if (guestOnly && user?.role) {
    //   if (adminOnly && user?.role == "admin") {
    //     return nav("/adminLand");
    //   } else if (cashier && user?.role == "cashier") {
    //     return nav("/cashierLand");
    //   }
    // } else if (needLogin && !user?.role) {
    //   return nav("/login");
    // }

    // if (adminOnly && user?.role == "admin") {
    //   return nav("/adminLand");
    // } else if (cashier && user?.role == "cashier") {
    //   return nav("/");
    // } else if (needLogin && !user?.role) {
    //   return nav("/login");
    // }
  }, []);
  return children;
}
