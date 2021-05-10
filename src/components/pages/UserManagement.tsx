import React, { memo, VFC } from "react";
import { Wrap, WrapItem } from "@chakra-ui/layout";

import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard imageUrl="https://source.unsplash.com/photos/random" userName="Toyo" fullName="Taylor Toyo" />
      </WrapItem>
    </Wrap>
  );
});
