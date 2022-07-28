import React from 'react'

const AlertsWithIcon = ( { message }) => {
  return (
    <div className="w-full flex justify-center p-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
      <span className="text-sm"> { message } </span> 
    </div>
  )
}

export default AlertsWithIcon