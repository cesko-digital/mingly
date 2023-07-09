import './globals.css'
import { Inter } from 'next/font/google'
import LayoutProfile from './layout/layout-profile';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { GetServerSideProps } from 'next';
import LayoutSession from './layout/layout-session';

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
        <LayoutSession/>
        {props.children}
      </body>
    </html>
  )
}

export default RootLayout;