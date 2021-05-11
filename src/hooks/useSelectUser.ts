import { useCallback, useState } from "react";

import { User } from "../types/api/user";

type Props = {
  users: Array<User>;
  id: number;
  onOpen: () => void;
}

/**
 * 選択したユーザー情報を特定し、モーダルを表示するカスタムフック
 * @returns 
 */
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { users, id, onOpen } = props;

    const targetUser = users.find((user: User) => user.id === id);
    setSelectedUser(targetUser ?? null);
    onOpen();
  }, []);

  return { selectedUser, onSelectUser };
};
