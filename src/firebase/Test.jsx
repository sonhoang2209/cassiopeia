import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { db } from './config.firebase';
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore'
import {getProductFB , addProductFB} from './product.firebase'

const prod = {
    "name": "Red Roses and White Lilies",
    "thumbnail": "https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1920,q_auto/5d84dc1a631b2292689077_nihv8m.webp",
    "price": 99,
    "types": "roses, lilies",
    "category": "flower",
    "occasion": "christmas",
    "color": [
     {
      "name": "red",
      "color": "#ff0000"
     },
     {
      "name": "blue",
      "color": "#0000ff"
     }
    ],
    "offer": 0
}

function Test(props) {
    const [newUser, setNewUser] = useState({
        name:"",
        age: 0 
    })

    const [users, setUsers] = useState([])
    const usersCollectionRef = collection(db, "users")

    const createUser = async () => {
        await addProductFB(prod)
    }

    const updateUser = async (data) => {
        // setNewUser({...data})
        const userDoc = doc(db, "users", data.id)
        const newFields = {age: data.age + 1}
        await updateDoc(userDoc, newFields)
    }

    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id)
        await deleteDoc(userDoc)
    }

    useEffect(() => {
        const getUsers = async () => {
            const data = await getProductFB()
            setUsers(data);
        }
        getUsers()
    }, [])

    return (
        <div>
            <input defaultValue={newUser.id} onChange={(e) => {setNewUser({...newUser, name: e.target.value})}} />
            <input value={parseInt(newUser.age)} type="number" onChange={(e) => {setNewUser({...newUser, age: e.target.value})}} />
            <button onClick={createUser} >
                add
            </button>
            {
                users.map((user) => {
                    return (
                        <div key={user.id}>
                            <h2>name: {user.name}</h2>
                            <h4>age: {user.price}</h4>
                            <button onClick={() => {updateUser(user)}}>edit</button>
                            <button onClick={() => {deleteUser(user.id)}}>delete</button>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Test;