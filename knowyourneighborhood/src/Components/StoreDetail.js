import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import storeImg from '../Components/Images/placeholder.png';

export default function StoreDetail() {

    let [searchParams] = useSearchParams();

    const sid = searchParams.get('sid');

    const [store, setStore] = useState([])

    useEffect(() => {
        axios.get('private/viewStore/' + sid)
            .then(res => {
                console.log("Getting from ::::", res.data)
                setStore(res.data)
            }).catch(err =>
                console.log(err))
    }, [sid]);

    return (
        <div className="stored-body">
        <div className='storedcontainer'>
            <div className="card allStore">
                <img className="card-img-top cardStoreImg" src={storeImg}
                    alt="Store" />
                <div className="card-body">
                    <h4 className="card-title heading">{store.name}</h4>
                    <p className="card-text">
                        {store.localities}
                    </p>
                    <p className="card-text">
                        {store.contactNumber}
                    </p>
                    <p className="card-text">
                        {store.email}
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
}