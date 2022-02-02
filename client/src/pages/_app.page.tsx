import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

import { getFetcher } from "~/function/fetcher";

const MyApp = (props: AppProps) => {
  return (
    <SWRConfig
      value={{
        fetcher: getFetcher,
      }}
    >
      <props.Component {...props.pageProps} />
    </SWRConfig>
  );
};

// eslint-disable-next-line import/no-default-export
export default MyApp;
