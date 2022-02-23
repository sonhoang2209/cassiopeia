import { db } from './config.firebase';
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore'

const usersCollectionRef = collection(db, "products")

export const getProductFB = async () => {
    const data = await getDocs(usersCollectionRef)
    return data.docs.map((doc) => ({...doc.data(), id: doc.id}))
}

export const addProductFB = async (data) => {
    const test = await addDoc(usersCollectionRef, data)
    console.log(test);
}

export const updateProductFB = async (data) => {
    const userDoc = doc(db, "users", data.id)
    const newFields = data
    await updateDoc(userDoc, newFields)
}

export const deleteProductFB = async (id) => {
    const userDoc = doc(db, "users", id)
    await deleteDoc(userDoc)
}