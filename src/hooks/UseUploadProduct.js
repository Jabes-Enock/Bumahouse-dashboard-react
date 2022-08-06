import { useState } from "react"

/* Storage methods from firebase */
import { 
    ref,
    uploadBytesResumable,
    getDownloadURL
} from "firebase/storage"

/* firestorage methods from firebase */
import { collection, addDoc } from 'firebase/firestore'

/* import storage and db */
import { storage, db } from "../services/firebase/config"

export const useUploadProduct = () => {

    const [percentageOfUpload, setPercentageOfUpload] = useState(0)
    const [requisitionStatus, setRequisitionStatus] = useState('')

    const uploadProductToFirebase = (values) => {
        const storageRef = ref(storage, `produtos/${values.productImage.name}`)
        const uploadTask = uploadBytesResumable(storageRef, values.productImage)

        uploadTask.on('state_changed', 
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
                const uploadNewProduct = async () => {
                    try {
                        const downloadURL =  await getDownloadURL(uploadTask.snapshot.ref)
                        const  productsCollectionRef = collection(db, 'produtos')
                        const data = { 
                            productName: values.productName, 
                            productDescription: values.productDescription,
                            productPrice: Number(values.productPrice),
                            productQuantity: Number(values.productQuantity),
                            productImageUrl: downloadURL
                        }
                        await addDoc(productsCollectionRef, data)
                        setRequisitionStatus('success')
                        return 
                    } catch (error) {
                        setRequisitionStatus('error')
                        return error
                    }
                }
                uploadNewProduct()
            })
    }

    return {
        percentageOfUpload,
        requisitionStatus,
        setRequisitionStatus,
        uploadProductToFirebase
    }
}



