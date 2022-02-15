import type { VFC } from "react";

import { LayoutErrorBoundary } from "~/component/functional/ErrorBoundary";
import { Root } from "~/component/page/Root/Root";

export const RootPage: VFC = () => {
  return (
    <LayoutErrorBoundary>
      <Root />
    </LayoutErrorBoundary>
  );
};
