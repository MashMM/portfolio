import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Nav from '@/components/navbar'
import BackgroundVideo from '@/components/bg-video'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mashhood',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <BackgroundVideo />
        </div>

        {/* Main Content */}
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <div className="outline-border dark:outline-darkBorder relative z-10 grid h-[800px] max-h-[100dvh] w-[1000px] max-w-[1000px] grid-cols-[100px_auto] rounded-base shadow-[10px_10px_0_0_#000] outline outline-4 w600:grid-cols-[70px_auto] w500:grid-cols-1 portrait:h-[100dvh]">
            <header className="border-r-border dark:border-r-darkBorder relative flex items-center justify-center rounded-l-base border-r-4 bg-main w500:hidden portrait:rounded-none">
              <h1 className="-rotate-90 whitespace-nowrap text-[40px] font-bold tracking-[4px] smallHeight:text-[30px] smallHeight:tracking-[2px] w600:text-[30px] w600:tracking-[2px]">
                <span className="text-text inline-block">MASHHOOD MANZOOR</span>
              </h1>
            </header>
            <main className="dark:bg-darkBg relative flex h-[800px] max-h-[100dvh] max-w-[900px] flex-col rounded-br-base rounded-tr-base bg-bg font-semibold portrait:h-[100dvh] portrait:max-h-[100dvh] portrait:rounded-none">
              <Nav />
              <div className="main h-full max-h-[750px] max-w-[900px] overflow-y-auto portrait:max-h-[calc(100dvh-50px)]">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}