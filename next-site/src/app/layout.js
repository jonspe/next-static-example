import Link from "next/link"
import "./globals.css"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <div>
            <img id="logo" alt="" src="next.svg" />
            <Link href="/">Koti</Link>
            <Link href="/blog">Blogi</Link>
            <Link href="/about">Tietoja</Link>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
