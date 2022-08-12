import { useEffect, useState } from 'react'

/* Firebase methods */
import { db } from '../../services/firebase/config'
import { collection, getDocs } from 'firebase/firestore'

const CategoryCard = ({ icon, categoryName, bgColor }) => {
  const [categorySize, setCategorySize] = useState('')

  useEffect(() => {
    const handleGetProductQuantity = async () => {
      try {
        const categoryCollectionRef = collection(db, categoryName)
        const data = await getDocs(categoryCollectionRef)
        const values = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setCategorySize(values.length)
      } catch (error) {
        console.log(error.message)
      }
    }
    handleGetProductQuantity()
  }, [])

  return (
    <div className="drop-shadow-2xl bg-white rounded-xl py-2">
      <div className="flex items-center justify-between p-4">
        <div className="space-y-2">
          <div
            className={`${bgColor} w-14 h-14 rounded-full grid place-items-center text-white text-xl`}
          >
            {icon}
          </div>
          <div>{categoryName}</div>
        </div>
        <div className="space-y-2">
          <div className="text-center">
            {categorySize === '' && (
              <p className="animate-pulse w-12 h-12 rounded-full bg-gray-300"></p>
            )}
            {categorySize.length !== '' && (
              <p className={`text-5xl text-orange-500`}>{categorySize}</p>
            )}
          </div>
          <div>produto(s)</div>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
