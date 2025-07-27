import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/solid'

interface BreadcrumbItem {
  name: string
  url: string
  current?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav 
      className="flex mb-4 text-sm" 
      aria-label="Breadcrumb"
      role="navigation"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-1" aria-hidden="true" />
            )}
            {item.current ? (
              <span 
                className="text-gray-300"
                aria-current="page"
              >
                {item.name}
              </span>
            ) : (
              <Link href={item.url} className="text-blue-400 hover:text-blue-300 transition-colors">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb