import { DM_Sans } from 'next/font/google'
import "./globals.css";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ThemeProvider } from "next-themes";

const dmSans = DM_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
