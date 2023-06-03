import './globals.css'
import Loading from '../components/Loading'
import { Ubuntu_Mono } from 'next/font/google'
import { Metadata } from 'next'
import Header from '../components/headers/Header'
import { cn } from '../lib/utils'

const ubuntuMono = Ubuntu_Mono({ weight: ['400', '700'], style: ['normal', 'italic'], subsets: ['latin-ext'] })

export const metadata: Metadata = {
  title: {
    default: 'BLUEHOPE',
    template: '%s — BLUEHOPE'
  },
  description: 'BLOG'
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
          <section className='mt-[64px] flex flex-auto justify-center'>
            <div className='max-w-screen-xl w-full'>
              {children}
            </div>
          </section>
        </body>
      </html>
    </>
  )
}
