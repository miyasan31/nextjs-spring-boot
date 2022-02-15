import { styled } from "baseui";
import type { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

export const BoxLayout: VFC<Props> = ({ title, children }) => {
  return (
    <PageRoot>
      <Box>
        <Title>{title}</Title>
        {children}
      </Box>
    </PageRoot>
  );
};

const Title = styled("h2", ({ $theme }) => {
  return {
    paddingLeft: `${$theme.sizing.scale800}`,
    margin: 0,

    backgroundColor: `${$theme.colors.primary100}`,
    fontSize: `${$theme.sizing.scale800}`,
    lineHeight: `${$theme.sizing.scale1400}`,
  };
});

const PageRoot = styled("div", ({ $theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: `${$theme.sizing.scale1000}`,

    width: "100vw",
  };
});

const Box = styled("div", ({ $theme }) => {
  return {
    width: "50vw",
    border: `1px solid ${$theme.colors.primary100}`,
  };
});
