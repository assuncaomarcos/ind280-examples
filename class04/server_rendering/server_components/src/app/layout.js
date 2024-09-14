import "./globals.css";
import {Inter} from "next/font/google";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Composants côté serveur",
  description: "Exemple sur comment utiliser app router",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body className={`${inter.className} ${inter.className}`}>
    <header>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/about">About</Link>
    </header>
    <div>{children}</div>
    </body>
    </html>
  );
}
