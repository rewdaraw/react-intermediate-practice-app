import React, { memo, ReactNode, VFC } from "react";

import { Header } from "../organisms/layout/Header";

// childrenの型はReactNode
type Props = {
  children: ReactNode;
}

export const HeaderLayout: VFC<Props> = memo((props) => {
  const {children} = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
