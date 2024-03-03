import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/vnd.microsoft.icon" href="/img/fav.ico" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={'true'}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
        />
        <meta
          name="google-site-verification"
          content="AfLwCan6EWrxCIvaDyJS0xRO7LRkDziHeObnKChEjBM"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
