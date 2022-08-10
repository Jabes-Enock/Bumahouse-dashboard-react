import { useState } from 'react'

/* Storage methods from firebase */
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

/* firestorage methods from firebase */
import { updateDoc, doc, collection } from 'firebase/firestore'

/* import storage and db */
import { storage, db } from '../services/firebase/config'

export const useUploadAndEditProduct = () => {
  const [percentageOfUpload, setPercentageOfUpload] = useState(0)
  const [requisitionStatus, setRequisitionStatus] = useState('')

  const uploadProductToFirebase = (values, path, id) => {
    const storageRef = ref(storage, path)
    const uploadTask = uploadBytesResumable(storageRef, values.productImage)
    const date = new Date()
    
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setPercentageOfUpload(Math.round(progress))
        setRequisitionStatus('started')
      },
      (error) => {
        setRequisitionStatus('error')
        return error
      },
      () => {
        const updateNewProduct = async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
            const productsCollectionRef = collection(db, values.productCategory)
            const data = {
              productName: values.productName,
              productDescription: values.productDescription,
              productPrice: Number(values.productPrice),
              productUnit: values.productUnit,
              productQuantity: Number(values.productQuantity),
              productImageUrl: downloadURL,
              updatedAt: `${date.getDate()}/${(date.getMonth()) + 1}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`
            }
            const productDoc = doc(productsCollectionRef, id)
            await updateDoc(productDoc, data)
            setRequisitionStatus('success')
            return
          } catch (error) {
            setRequisitionStatus('error')
            return error
          }
        }
        updateNewProduct()
      }
    )
  }

  return {
    percentageOfUpload,
    requisitionStatus,
    setRequisitionStatus,
    uploadProductToFirebase,
  }
}
