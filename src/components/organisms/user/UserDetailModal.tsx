import React, { memo, VFC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/modal";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Stack } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  // const { isOpen, onOpen, onClose } = useDisclosure();

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
              <Input value="rt" isReadOnly />
            </FormControl>

            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value="ryutaro tanaka" isReadOnly />
            </FormControl>

            <FormControl>
              <FormLabel>メールアドレス</FormLabel>
              <Input value="dummy@example.com" isReadOnly />
            </FormControl>

            <FormControl>
              <FormLabel>電話番号</FormLabel>
              <Input value="090-1111-2222" isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
