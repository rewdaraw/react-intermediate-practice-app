import React, { memo, VFC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/modal";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Stack } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/PrimaryButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  isAdmin: boolean;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, user, isAdmin } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input defaultValue={user?.username ?? ""} isReadonly={isAdmin} />
            </FormControl>

            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input defaultValue={user?.name ?? ""} isReadonly={isAdmin} />
            </FormControl>

            <FormControl>
              <FormLabel>メールアドレス</FormLabel>
              <Input defaultValue={user?.email} isReadonly={isAdmin} />
            </FormControl>

            <FormControl>
              <FormLabel>電話番号</FormLabel>
              <Input defaultValue={user?.phone} isReadonly={isAdmin} />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter mx={4}>
            <PrimaryButton onClick={onClose}>編集</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});
