import CardImage from '@/components/CardImage'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      hola
      <Link 
        href="/blog"
        className='text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 dark:text-blue-400'
      >
        Blog
      </Link>
    </main>
  )
}
