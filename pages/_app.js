import { SWRConfig } from 'swr';

export default function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{ fetcher: (url) => fetch(url).then((res) => res.json()) }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
