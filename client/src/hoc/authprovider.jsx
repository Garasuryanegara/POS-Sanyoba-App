import { useDispatch, useSelector } from "react-redux";
import { api } from "../api/api";
import { useEffect } from "react";

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();

  async function get() {
    const token = JSON.parse(localStorage.getItem("auth"));
    if (token) {
      const id = await api.get("/users/token", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(id.data.id);
      await api
        .get("/users", {
          params: {
            id: id.data.id,
          },
        })
        .then((res) => {
          console.log(res.data.Users);
          dispatch({
            type: "login",
            payload: res.data.Users,
          });
        });
    }
  }

  useEffect(() => {
    get();
  }, []);
  return <>{children}</>;
}
