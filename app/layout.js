import './globals.css'
import Link from "next/link"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hello Next.js!',
  description: 'Make your world through the Next.js!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <body>
        <div className="navbar">
        <Link href="/">홈</Link>
        <Link href="/list">List</Link>
        <Link href="/cart">Cart</Link>
      </div>
      {children}
      </body>
    </html>
  )
}
