import './globals.css'
import { Inter } from 'next/font/google'
import LayoutSession from './layout/layout-session';
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

type LayoutProps = {
  loggedUser?: string;
}

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

 const  RootLayout = (props: LayoutProps & { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Suspense fallback={<div>loading...</div>}>
          <LayoutSession>
            {props.children}
          </LayoutSession>
        </Suspense>
      </body>
    </html>
  )
}

export default RootLayout;
