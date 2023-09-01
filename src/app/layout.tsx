import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Providers from '@/app/providers'
import {Poppins,K2D,Space_Grotesk} from 'next/font/google'
interface LandingProps {}
const k2d = K2D({subsets: ['latin'], weight: ['400','500','600','700','800']})
const poppins = Poppins({subsets: ["latin"], weight: '400'})
const space_grotesk = Space_Grotesk({subsets: ["latin"],  weight: ['400','500','600','700']})

export const metadata: Metadata = {
  title: 'Amrit Niure | Home',
  description: 'Amrit Niure, An Elegant software developer ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode           
}) {
  return (
    <html lang="en" className='light' style={{colorScheme : 'light'}} >
      <body className={`${k2d.className} bg-slate-50 dark:bg-slate-900`}>
        <Providers>
        <Navbar />
        <div className='bg-slate-50 dark:bg-slate-900  transition-all ease-in-out duration-200 '>

        {children}
        </div>
        <div className='box'>

        <Footer />
        </div>
        </Providers>
      </body>
    </html>
  )
}
