import { useCallback } from "react";
import { useToast } from "@chakra-ui/toast";

type Props = {
  status: "info" | "warning" | "success" | "error";
  title: string;
};

export const useMessage = () => {
  const toast = useToast();

  const showMessage = useCallback(
    (props: Props) => {
      const { status, title } = props;
      toast({
        position: "top",
        duration: 2000,
        isClosable: true,
        status: status,
        title: title,
      });
    },
    [toast]
  );

  return { showMessage };
};
