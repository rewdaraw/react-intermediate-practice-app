import React, { memo, useCallback, useEffect, VFC } from "react";
import { Center, Wrap, WrapItem } from "@chakra-ui/layout";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { Spinner } from "@chakra-ui/spinner";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useDisclosure } from "@chakra-ui/hooks";

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getUsers(), []);
  const onClickUser = useCallback(() => onOpen(), [onOpen]);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="center" spacing="30px">
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                imageUrl="https://source.unsplash.com/photos/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
