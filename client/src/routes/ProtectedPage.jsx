import { Center, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProtectedPage({
  children,
  adminOnly,
  cashier,
  needLogin,
  guestOnly,
}) {
  const userSelector = useSelector((state) => state.auth);
  // const user = JSON.parse(localStorage.getItem("auth"));
  const user = userSelector;
  const nav = useNavigate();
  // console.log(user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(userSelector);

    // if (guestOnly && user?.role == "admin") {
    //   return nav("/adminLand");
    // } else if (guestOnly && user?.role == "cashier") {
    //   return nav("/cashierLnd");
    // } else if (needLogin && !user?.role) {
    //   return nav("/login");
    // }

    if (guestOnly && user.role) {
      if (user.role == "admin") {
        return nav("/adminLand");
      } else {
        return nav("/cashierland");
      }
    } else if (needLogin && !user.role) {
      return nav("/login");
    } else if (needLogin && adminOnly && user.role != "admin") {
      return nav("/cashierland");
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

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(setIsLoading(false));
      }, 1000);
    });
  }, [userSelector]);

  return (
    <>
      {isLoading ? (
        <Center h={"100vh"}>
          <Spinner />
        </Center>
      ) : (
        children
      )}
    </>
  );
}
