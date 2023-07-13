import React, {useState,useEffect} from "react";
import './css/all.css'
import Axios from "axios";
import {Link} from 'react-router-dom';
import storeImg from '../Components/Images/placeholder.png';
import './css/all.css'

export function Dashboard() {
    const [count, setCount] = useState(0);
    const [stores, setStore] = useState([])

    useEffect(() => {
        setCount((count) => count + 1)
        Axios.get('private/allStores')
            .then(res => {
                console.log("Getting from ::::", res.data)
                setStore(res.data)
            }).catch(err => 
                console.log(err))
    }, []);

    const logout = (event) => {
        Axios.post("/logout")
        .then((res) => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
            window.location.href="/login"
        })
    }

    const allStores = stores.map((store, index) => {
        return (
            <div className="card allStore">
                <img className="card-img-top cardStoreImg" src={storeImg}
                    alt="Store" />
                <div className="card-body">
                    <h4 className="card-title heading">{store.name}</h4>
                    <p className="card-text">
                        {store.localities}
                    </p>

                    <a href={"/store-details?sid=" + store.id} className="btn btn-outline-tertiary">View
                        Store Details</a>
                </div>
            </div> 
        )
    })

    return (
        <main className="dashboard-body">
        <div className='pageWrapper container'>
            <h1 className='text-center mt-3 mb-3'>Welcome to KYN!</h1>  
            <br/>
            <button className='btn btn-outline-danger me-3' onClick={logout}>Logout</button>
            <Link className='btn btn-outline-tertiary rounded' to="/add-store">Add Store</Link>
        
            
        </div>
        <div className='d-flex flex-wrap store-gap mt-3'>
                    {allStores}
                </div>
        </main>
    );
}
