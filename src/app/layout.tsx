import { Inter } from "next/font/google"

// Styles and images
import { GlobalStyle } from "./styles/globalStyles"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Catálogo de produtos",
  description: "Catálogo de vários produtos",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <GlobalStyle />
      <body className={inter.className}>{children}</body>
    </html>
  )
}