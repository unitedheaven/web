import type { Metadata } from 'next'
import { ColorModeProvider } from '@/context/ColorModeContext'
import { AuthProvider } from '@/context/AuthContext'
import WalletProvider from '@/provider/WalletProvider'
import ReactQueryProvider from '@/provider/ReactQueryProvider'
import { Analytics } from '@vercel/analytics/react'
import NotificationToaster from '@/components/NotificationToaster'
import { AlgoProvider } from '@/context/AlgoContext'
import localFont from 'next/font/local'

import './globals.css'

export const metadata: Metadata = {
  title: 'United Heaven',
  description: 'United Heaven is an organization seeking to create a finer world through blockchain technology.',
}

const ailerons = localFont({
  variable: '--font-ailerons',
  src: '../assets/fonts/Ailerons.otf',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${ailerons.variable} dark`}>
      <body className='bg-zinc-100 dark:bg-zinc-900 overscroll-none'>
        <ReactQueryProvider>
          <ColorModeProvider>
            <NotificationToaster />
            <WalletProvider>
              <AuthProvider>
                <AlgoProvider>{children}</AlgoProvider>
              </AuthProvider>
            </WalletProvider>
          </ColorModeProvider>
        </ReactQueryProvider>
        <Analytics />
      </body>
    </html>
  )
}
