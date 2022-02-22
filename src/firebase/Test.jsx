import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { db } from './config.firebase';
import {collection, getDocs, addDoc} from 'firebase/firestore'

function Test(props) {
    const [newUser, setNewUser] = useState({
        name:"",
        age:0 
    }) 
    const [users, setUsers] = useState([])
    const usersCollectionRef = collection(db, "users")

    const createUser = async () => {
        await addDoc(usersCollectionRef, newUser)
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
            <input onChange={(e) => {setNewUser({...newUser, name: e.target.value})}} />
            <input type="number" onChange={(e) => {setNewUser({...newUser, age: e.target.value})}} />
            <button onClick={createUser} >
                add
            </button>
            {
                users.map((user) => {
                    return (
                        <div key={user.id}>
                            <h2>name: {user.name}</h2>
                            <h4>age: {user.age}</h4>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Test;