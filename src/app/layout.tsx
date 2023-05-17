import './globals.css'
import Loading from './components/Loading'
import { Ubuntu_Mono } from 'next/font/google'
import { Metadata } from 'next'

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
        <body className={ubuntuMono.className}>
          <Loading duration={3}/>
          {children}
        </body>
      </html>
    </>
  )
}
