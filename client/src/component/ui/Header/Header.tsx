import { styled } from "baseui";
import type { VFC } from "react";

import { Navigation } from "~/component/ui/Navigation";

export const Header: VFC = () => {
  return (
    <HeaderRoot>
      <H1>
        ジョブキャン
        <Span>勤怠管理</Span>
      </H1>

      <Navigation />
    </HeaderRoot>
  );
};

const HeaderRoot = styled("div", ({ $theme }) => {
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

const Span = styled("span", ({ $theme }) => {
  return {
    color: `${$theme.colors.primary500}`,
    fontSize: `${$theme.sizing.scale300}`,
  };
});
