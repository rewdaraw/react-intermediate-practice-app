import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextType,
} from "../providers/LoginUserProvider";

// TODO: セットで修正
export const useLoginUser = (): LoginUserContextType => useContext(LoginUserContext)