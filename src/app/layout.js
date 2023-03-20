import './globals.css'

export const metadata = {
  title: 'IMDB Clone',
  description: 'Movie DB a IMDB Clone.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
