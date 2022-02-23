import { db } from './config.firebase';
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore'

const usersCollectionRef = collection(db, "products")

export const getProductFB = async () => {
    const data = await getDocs(usersCollectionRef)
    return data.docs.map((doc) => ({...doc.data(), id: doc.id}))
}