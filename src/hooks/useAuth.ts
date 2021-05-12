import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router";

import { User } from "../types/api/user";
import { useLoginUser } from "./useLoginUser";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

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

            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });

            history.push("/home");
          } else {
            showMessage({
              status: "error",
              title: "ユーザーが見つかりません",
            });
            setLoading(false);
          }
        })
        .catch(() => {
          showMessage({
            status: "error",
            title: "ログインできません",
          });
          setLoading(false);
        });
    },
    [history, showMessage, setLoginUser]
  );

  return { login, loading };
};
