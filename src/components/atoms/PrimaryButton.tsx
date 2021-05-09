import React, { memo, ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/button";

type Props = {
  children: ReactNode;
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, loading = false, disabled = false } = props;

  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
      isLoading={loading}
      disabled={disabled || loading}
    >
      {children}
    </Button>
  );
});
