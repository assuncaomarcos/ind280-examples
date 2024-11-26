import "@/styles/globals.css";
import {Inter} from "next/font/google";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

export default function App({Component, pageProps}) {
  return (
    <div className={inter.className}>
      <header>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
      </header>

      <div className="p-4">
        <Component {...pageProps} />
      </div>
    </div>
  )
}
