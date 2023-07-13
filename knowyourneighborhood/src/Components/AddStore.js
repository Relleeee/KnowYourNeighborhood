import axios from 'axios';
import React, { Component } from 'react';
import './css/all.css'

class AddStore extends Component {
    //attibutes & methods 
    constructor() {
        super();
        this.state = {
            "name": '',
            "email": '',
            "contactNumber": '',
            "localities": ''
        }
    }

    nameInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    emailInput = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    contactNumberInput = (event) => {
        this.setState({
            contactNumber: event.target.value
        })
    }

    localitiesInput = (event) => {
        this.setState({
            localities: event.target.value
        })
    }

    addStore = (event) => {
        alert("Store: " + this.state.name + "has been added!");
        axios.post('private/addStore', this.state)
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    //View --HTML

    render() {
        return (
            <main className="addstore-body">
            <div className='addstore-container'>
                <div className='addstore-wrapper'>
                    <div className='addstore-formwrapper'>
                        <h1 className='addstore-heading'>Add a store now!</h1>
                        <form onSubmit={this.addStore} className='addstore-form' autoComplete='on'>
                            <div className='addstore-div'>
                                <label htmlFor="name" className='addstore-label'>Name:</label>
                                <input type='text' className='addstore-form-control' placeholder='Enter store name' name="name" id="name" value={this.state.name} onChange={this.nameInput} autoComplete='on' required />
                            </div>
                            <div className='addstore-div'>
                                <label htmlFor="email" className='addstore-label'>Email:</label>
                                <input type='email' className='addstore-form-control' placeholder='Enter store email' name="email" id="email" value={this.state.email} onChange={this.emailInput} autoComplete='on' required />
                            </div>
                            <div className='addstore-div'>
                                <label htmlFor='contact' className='addstore-label'>Contact Number:</label>
                                <input type='text' className='addstore-form-control' name='contact' id='contact' placeholder='Enter store contact number' value={this.state.contactNumber} onChange={this.contactNumberInput} autoComplete='on' required />
                            </div>
                            <div className='addstore-div'>
                                <label htmlFor='localities' className='addstore-label'>Localities:</label>
                                <input type='text' className='addstore-form-control' name="localities" id='localities' placeholder='Enter store locality' value={this.state.localities} onChange={this.localitiesInput} autoComplete='on' required />
                            </div>
                            <input type="submit" name="AddStore" value="Add Store" className="addstore-btn" />
                        </form>
                    </div>
                </div>
            </div>
         </main>
        )
    }
}

export default AddStore;