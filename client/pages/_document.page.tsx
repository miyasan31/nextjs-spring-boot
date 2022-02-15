/* eslint-disable @typescript-eslint/naming-convention */
import Document, { Head, Html, Main, NextScript } from "next/document";
import type { Server, Sheet } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";

import { styletron } from "~/util/styletron";

class MyDocument extends Document<{ stylesheets: Sheet[] }> {
  static getInitialProps(props: any) {
    // eslint-disable-next-line react/display-name
    const page = props.renderPage((App: any) => {
      return (props: any) => {
        return (
          <StyletronProvider value={styletron}>
            <App {...props} />
          </StyletronProvider>
        );
      };
    });
    const stylesheets = (styletron as Server).getStylesheets() || [];
    return { ...page, stylesheets };
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.stylesheets.map((sheet, i) => {
            return (
              <style
                className="_styletron_hydrate_"
                dangerouslySetInnerHTML={{ __html: sheet.css }}
                media={sheet.attrs.media}
                data-hydrate={sheet.attrs["data-hydrate"]}
                key={i}
              />
            );
          })}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// eslint-disable-next-line import/no-default-export
export default MyDocument;
