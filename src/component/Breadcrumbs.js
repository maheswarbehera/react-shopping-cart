import React from 'react'
import { Home, ChevronRight } from 'lucide-react' 
import { Link } from 'react-router-dom'

export default function Breadcrumb(props) {
  return (
    <nav className="flex py-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
          >
            <Home className="mr-4 h-4 w-4" /> {props.parent}
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4" />
            <Link to={props.child} className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
              {props.child}
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4" />
            <Link to={props.child2} className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
              {props.child2}
            </Link>
          </div>
        </li>
      </ol>
    </nav>
  )
}
