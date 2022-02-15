/* eslint-disable @typescript-eslint/naming-convention */
import { styled, withStyle } from "baseui";
import { Button, StyledBaseButton } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";
import Link from "next/link";
import type { VFC } from "react";

const NAV_LABEL = [
  { id: 1, label: "出勤登録", href: "/" },
  { id: 1, label: "登退勤録", href: "/leaving_work" },
  { id: 2, label: "シフト提出", href: "/attendance/submit" },
  { id: 3, label: "スタッフ一覧", href: "/staff/list" },
];

export const Navigation: VFC = () => {
  return (
    <Nav>
      <ButtonGroup>
        {NAV_LABEL.map((item) => {
          return (
            <Link href={item.href} key={item.id} passHref>
              <Anker>
                <Button overrides={{ BaseButton: CustomeButton }}>{item.label}</Button>
              </Anker>
            </Link>
          );
        })}
      </ButtonGroup>
    </Nav>
  );
};

const Nav = styled("nav", ({ $theme }) => {
  return {
    paddingRight: `${$theme.sizing.scale1000}`,

    color: `${$theme.colors.primary700}`,
    backgroundColor: `${$theme.colors.backgroundPrimary}`,
  };
});

const Anker = styled("a", () => {
  return {
    textDecoration: "none",
  };
});

const CustomeButton = withStyle(StyledBaseButton, ({ $theme }) => {
  return {
    color: $theme.colors.primary700,
    backgroundColor: $theme.colors.backgroundPrimary,

    ":hover": {
      backgroundColor: $theme.colors.backgroundSecondary,
    },
  };
});
