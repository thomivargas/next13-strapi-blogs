import Link from 'next/link';
import React from 'react'

interface Props {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    } 
}

const Pagination = ({pagination}: Props) => {

  const {page, pageSize, pageCount, total} = pagination;
  const classNumber = "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
  const classNumberActive = "z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";
  const classPrevious = "block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
  const classNext = "block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"

  return (
    <nav aria-label="Page navigation example text-center">
        <ul className="inline-flex items-center -space-x-px">
            <li>
            <Link 
              href={page === 1 ? `/blog?page=${page}` : `/blog?page=${page - 1}`} 
              className={`
              ${classPrevious} ${
                page === 1 ? "opacity-75Z pointer-events-none" : ""
              }`}
            >
                <span className="sr-only">Previous</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            </Link>
            </li>
              {Array.from({length: pageCount}).map((_, index) => (
                <li>
                  <Link 
                    href={`/blog?page=${index + 1}`}
                    className={index + 1 === page ? classNumberActive : classNumber}
                  >
                    {index + 1}
                  </Link>
                </li>
              ))}    
            <li>
            <Link 
              href={page === pageCount ? `/blog?page=${page}`  : `/blog?page=${page + 1}`} 
              className={`
              ${classNext} ${
                page === 5 ? "opacity-75 pointer-events-none" : ""
              }`}
            >
                <span className="sr-only">Next</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
            </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Pagination
