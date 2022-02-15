import { styled } from "baseui";
import type { VFC } from "react";

import { Navigation } from "~/component/ui/Navigation";

export const Header: VFC = () => {
  return (
    <HeaderWrap>
      <H1>ジョブキャン</H1>
      <Navigation />
    </HeaderWrap>
  );
};

const HeaderWrap = styled("div", ({ $theme }) => {
  return {
    position: "absolute",
    top: 0,
    left: 0,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    width: "100vw",

    backgroundColor: `${$theme.colors.backgroundPrimary}`,
    borderBottom: `1px solid ${$theme.colors.primary300}`,
  };
});

const H1 = styled("h1", ({ $theme }) => {
  return {
    paddingLeft: `${$theme.sizing.scale1000}`,

    color: `${$theme.colors.primary700}`,
    fontFamily: "sans-serif",
  };
});
