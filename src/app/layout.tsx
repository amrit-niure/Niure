import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Providers from '@/app/providers'
import {Poppins,K2D,Space_Grotesk,Bricolage_Grotesque, Public_Sans} from 'next/font/google'
import ModeIcon from '@/components/ModeIcon'
interface LandingProps {}
const k2d = K2D({subsets: ['latin'], weight: ['400','500','600','700','800']})
const poppins = Poppins({subsets: ["latin"], weight: ['400','500','600','700','800']})
const space_grotesk = Space_Grotesk({subsets: ["latin"],  weight: ['400','500','600','700']})
const bricolage_grotesque = Bricolage_Grotesque({subsets: ["latin"],  weight: ['300','400','500','600','700']})
const public_sans = Public_Sans({subsets: ["latin"],  weight: ['300','400','500','600','700']})

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
    <html lang="en" className='dark' style={{colorScheme : ' dark'}} >
      <body className={`${public_sans.className} bg-slate-50 dark:bg-dark-background`}>
        <Providers>
        <Navbar />
        <div className='bg-slate-50 dark:bg-dark-background  transition-all ease-in-out duration-200 '>
        {children}
        </div>
        <div className='box'>
        <Footer />
        </div>
        <div className="fixed md:hidden top-[85vh] right-2 z-50">
        <ModeIcon />
        </div>
        </Providers>
      </body>
    </html>
  )
}
