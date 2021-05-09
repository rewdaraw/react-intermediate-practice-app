import React, { ChangeEvent, memo, useState, VFC } from "react";
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";

import { PrimaryButton } from "../atoms/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState("");
  const { login, loading } = useAuth();

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);
  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={8} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            borderColor="gray.200"
            _placeholder={{ color: "gray.200" }}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            onClick={onClickLogin}
            loading={loading}
            disabled={!userId}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
