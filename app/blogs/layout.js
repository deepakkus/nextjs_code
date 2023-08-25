import '../globals.css'
import { Inter } from 'next/font/google'
//import styles from '../page.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Our Blogs',
  description: 'Our blog posts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{margin:0}}>{children}</body>
    </html>
  )
}
