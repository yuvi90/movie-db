import './globals.css'
import { Header } from '@/components'

export const metadata = {
  title: 'IMDB Clone',
  description: 'Movie DB a IMDB Clone.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className='bg-slate-500 dark:bg-slate-800 dark:text-white transition-colors duration-300'>
        <Header />
        {children}
      </body>
    </html>
  )
}
