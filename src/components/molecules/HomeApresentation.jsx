import React from 'react'

const HomeApresentation = ({number, text, imageSrc }) => {
  return (
    <div className="w-full md:px-16 px-4 py-20 bg-gray-800 placeholder">
      <div className="max-w-full md:flex items-center md:space-x-16 space-y-8">
        <div className="space-y-4 text-center">
          <p className="text-blue-500 md:text-9xl text-4xl">{number} </p>
          <p className="text-blue-500">{text}</p>
        </div>
        <img src={imageSrc} alt="dashboard" className="shadow-2xl shadow-blue-400 overflow-hidden md:rounded-xl" />
      </div>
    </div>
  )
}

export default HomeApresentation