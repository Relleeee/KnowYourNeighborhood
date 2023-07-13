import axios from 'axios';
import React, { Component } from 'react';
import storeImg from '../Components/Images/placeholder.png';
import './css/all.css'

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            displaysearchdata: []

        }
    }

    changeofInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    searchMyData = (event) => {
        event.preventDefault();
        axios.get('private/searchStore?keyword=' + this.state.keyword)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    displaysearchdata: res.data
                })
            })
            .catch((error) => {
                console.log(error)
            })

    }
    render() {

        const searchdata = this.state.displaysearchdata.map((store, key) =>
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
            </div>);
        return (
            <div className="search-body">
            <div className='search-container'>
                    <form className='formSearch' onSubmit={this.searchMyData}>
                        <input className='search' id='keyword' type="search" placeholder='Enter keyword to search' value={this.state.keyword} onChange={this.changeofInput}></input>
                        <button className='btn btn-outline-tertiary searchbtn' type="submit">Search</button>
                    </form>
                <div className='d-flex flex-wrap store-gap mt-3'>
                    {searchdata}
                </div>


            </div>
        </div>
        )
    }
}

export default SearchResult;