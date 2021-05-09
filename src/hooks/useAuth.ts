import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({
              status: "success",
              title: "ログインしました",
            });
            history.push("/home");
          } else {
            showMessage({
              status: "error",
              title: "ユーザーが見つかりません",
            });
          }
        })
        .catch(() => {
          showMessage({
            status: "error",
            title: "ログインできません",
          });
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [history, showMessage]
  );

  return { login, loading };
};
