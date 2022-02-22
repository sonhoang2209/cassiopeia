import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { db } from './config.firebase';
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore'

function Test(props) {
    const [newUser, setNewUser] = useState({
        name:"",
        age: 0 
    })

    const [users, setUsers] = useState([])
    const usersCollectionRef = collection(db, "users")

    const createUser = async () => {
        await addDoc(usersCollectionRef, {name: newUser.name, age: Number(newUser.age) })
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
            const data = await getDocs(usersCollectionRef)
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
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
                            <h4>age: {user.age}</h4>
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