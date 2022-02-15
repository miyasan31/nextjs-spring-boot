import { styled } from "baseui";
import type { ReactNode, VFC } from "react";

import { Header } from "~/component/ui/Header";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <Root>
      <Header />
      <Main>{children}</Main>
    </Root>
  );
};

const Root = styled("div", () => {
  return {
    position: "relative",
    width: "100vw",
  };
});

const Main = styled("div", () => {
  return {
    height: "95vh",
    width: "100vw",
    paddingTop: "90px",
    overflowY: "scroll",
  };
});
