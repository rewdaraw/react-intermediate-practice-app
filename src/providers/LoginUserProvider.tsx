import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { User } from "../types/api/user";

type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

// TODO: nulの修正
export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
