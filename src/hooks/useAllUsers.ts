import axios from "axios";

import { User } from "../types/api/user";
import { useMessage } from "../hooks/useMessage";
import { useCallback, useState } from "react";

export const useAllUsers = () => {
  const { showMessage } = useMessage();

  const [users, setUsers] = useState<Array<User>>([]);
  const [loading, setLoading] = useState(false);

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        res.data
          ? setUsers(res.data)
          : showMessage({
              status: "error",
              title: "ユーザーたちがいません",
            });
      })
      .catch(() => {
        showMessage({
          status: "error",
          title: "ユーザー一覧の取得に失敗しました",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [showMessage]);

  return { getUsers, users, loading };
};
