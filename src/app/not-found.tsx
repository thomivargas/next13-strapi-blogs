import Link from 'next/link'

const notFound = () => {
  return (
    <div className='grid grid-cols-1 place-items-center h-screen'>
      <div className='text-center space-y-4'>
        <h1 className='text-3xl'>Not Found</h1>
        <p>Could not find requested resource</p>
        <Link 
            href='/blog'
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700'
        >
          all posts
        </Link>    
      </div>
    </div>
  )
}

export default notFound
