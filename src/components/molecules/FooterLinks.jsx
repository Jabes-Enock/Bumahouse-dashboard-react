import React from 'react'

const FooterLinks = ({titleGroup}) => {
  
  return (
    <div className="pl-6">
          <h3 className="text-gray-400 text-2xl">{titleGroup}</h3>
          <ul className="mt-3">
            <li
              className="text-gray-500 hover:text-gray-700 text-md cursor-pointer"
            >
              First link
            </li>
            <li
              className="text-gray-500 hover:text-gray-700 text-md cursor-pointer"
            >
              Second link
            </li>
            <li
              className="text-gray-500 hover:text-gray-700 text-md cursor-pointer"
            >
              Third link
            </li>
            <li
              className="text-gray-500 hover:text-gray-700 text-md cursor-pointer"
            >
              Fourth link
            </li>
          </ul>
        </div>
  )
}

export default FooterLinks