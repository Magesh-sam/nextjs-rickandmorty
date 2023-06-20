import { Pagination } from './components/Pagination'
import './globals.css'
import { Roboto_Mono } from 'next/font/google'

const inter = Roboto_Mono({subsets: ['latin']})

export const metadata = {
  title: 'Rick and Morty Wikipedia',
  description: 'Rick and Morty Wikipedia developed in next js with Rick and Morty API',
  creator: 'Mageshkannan | Rick&Morty Fanboy',
  openGraph: {
    title: 'Rick and Morty Wikipedia',
  description: 'Rick and Morty Wikipedia developed in next js with Rick and Morty API',
    type: 'website',
    Image: {
      url: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
      alt: 'Rick and Morty',
  }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary-bg `}>
        <header>
      <h1 className="p-5 mb-3 text-primary-text text-5xl text-center underline underline-offset-8"  >Rick and Morty</h1>

        </header>
        {children}
          <Pagination/>
      </body>
    </html>
  )
}
