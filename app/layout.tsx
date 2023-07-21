import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Kazuki's World",
  description: "A personal portfolio in a virtual 3D world",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
