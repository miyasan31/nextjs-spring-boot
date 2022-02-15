import { styled } from "baseui";
import type { ReactNode, VFC } from "react";

import { Header } from "~/component/ui/Header";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

const Main = styled("div", () => {
  return {
    minHeight: "100vh",
    paddingTop: "90px",

    overflowY: "scroll",
  };
});
