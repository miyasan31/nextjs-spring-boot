import { BaseProvider, LightTheme } from "baseui";
import type { AppProps } from "next/app";
import { Provider as StyletronProvider } from "styletron-react";
import { SWRConfig } from "swr";

import { Layout } from "~/component/ui/Layout";
import { getFetcher } from "~/function/fetcher";
import { styletron } from "~/util/styletron";

const MyApp = (props: AppProps) => {
  return (
    <SWRConfig
      value={{
        fetcher: getFetcher,
      }}
    >
      <StyletronProvider value={styletron}>
        <BaseProvider theme={LightTheme}>
          <Layout>
            <props.Component {...props.pageProps} />
          </Layout>
        </BaseProvider>
      </StyletronProvider>
    </SWRConfig>
  );
};

// eslint-disable-next-line import/no-default-export
export default MyApp;
