import React, { VFC } from "react";
import { Link } from "react-router-dom";

export const Page404: VFC = () => {
  return (
    <>
      <p>お探しのページは存在しません。</p>
      <Link to="/">TOPページへ</Link>
    </>
  );
};
