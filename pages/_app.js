import { SWRConfig } from "swr";
import { DM_Sans } from "next/font/google";
import Layout from "../components/Layout/Layout";

const dm_Sans = DM_Sans({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{ fetcher: (url) => fetch(url).then((res) => res.json()) }}
    >
      <style jsx global>{`
        html {
          font-family: ${dm_Sans.style.fontFamily};
        }
      `}</style>
      <Layout/>
        <Component {...pageProps} />
    </SWRConfig>
  );
}
