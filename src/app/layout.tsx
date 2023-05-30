import './globals.css'
import Loading from '../components/Loading'
import { Ubuntu_Mono } from 'next/font/google'
import { Metadata } from 'next'
import Header from '../components/headers/Header'
import { cn } from '../lib/utils'

const ubuntuMono = Ubuntu_Mono({ weight: '400', subsets: ['latin-ext'] })

export const metadata: Metadata = {
  title: {
    template: '%s — BLUEHOPE',
    default: 'BLUEHOPE'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <body className={cn("bg-light-500 dark:bg-dark-500", ubuntuMono.className)}>
          <Loading duration={3}/>
          <Header/>
          {children}
        </body>
      </html>
    </>
  )
}
