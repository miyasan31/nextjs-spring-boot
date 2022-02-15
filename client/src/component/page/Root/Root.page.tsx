import type { VFC } from "react";

import { LayoutErrorBoundary } from "~/component/functional/ErrorBoundary";
import { Root } from "~/component/page/Root/Root";
import { Layout } from "~/component/ui/Layout";

export const RootPage: VFC = () => {
  return (
    <Layout>
      <LayoutErrorBoundary>
        <Root />
      </LayoutErrorBoundary>
    </Layout>
  );
};
