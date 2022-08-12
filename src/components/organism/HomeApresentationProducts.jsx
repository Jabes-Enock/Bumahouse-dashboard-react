import React from 'react'

const HomeApresentationProducts = ({number, text, imageSrc}) => {
  return (
    <div className="w-full md:px-16 px-4 py-20 bg-white">
    <div className="max-w-full md:flex items-center md:space-x-16 space-y-8">
      <img src={imageSrc} alt="dashboard" className="shadow-2xl overflow-hidden md:rounded-xl md:order-1 order-2" />
      <div className="space-y-4 text-center md:order-2 order-1">
        <p className="text-blue-500 md:text-9xl text-4xl">{number}</p>
        <p className="text-blue-500">{text}</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-8 mt-8">
      <img src={imageSrc} alt="dashboard" className="shadow-2xl overflow-hidden md:rounded-xl skew-x-6" />
      <img src={imageSrc} alt="dashboard" className="shadow-2xl overflow-hidden md:rounded-xl -skew-x-6" />
    </div>
  </div>
  )
}

export default HomeApresentationProducts