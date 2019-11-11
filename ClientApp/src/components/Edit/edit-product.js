import React, { Component } from 'react';
import Axios from 'axios';
import './edit.css';

class Edit extends Component {
    state = {
        id: 0,
        product_name: "",
        product_image: "",
        category: "",
        item_description: ""
    }

    // getting the products from the database
    componentDidMount() {
        Axios.get('/api/products/' + this.props.match.params.productId)
        .then(response => {
            this.setState({
                id: response.data.id,
                product_name: response.data.product_name,
                product_image: response.data.product_image,
                category: response.data.category,
                item_description: response.data.item_description
            })
            console.log(response.data.id)
        })
        .catch(err => {
            console.log(err);
        })
    };

    // when something within the fields changes, update state
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //when you submit, update the product
    onSubmit = (e) => {
        e.preventDefault();

        const { id, product_name, product_image, category, item_description } = this.state

        Axios.put('/api/products/' + this.props.match.params.productId, { id, product_name, product_image, category, item_description })

        window.location = '/';
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1> Edit This Product!</h1>
                <div>
                    Product Name:
                    <br/>
                    <input className="edit-input" type="text" name="product_name" value={this.state.product_name} onChange={this.onChange}/>
                </div>

                <br/>

                <div>
                    Product Image Link:
                    <br/>
                    <input className="edit-input" type="text" name="product_image" value={this.state.product_image} onChange={this.onChange}/>
                </div>

                <br/>

                <div> 
                    Product Category:
                    <br/>
                    <input className="edit-input" type="text" name="category" value={this.state.category} onChange={this.onChange}/>
                </div>

                <br/>

                <div>
                    Product Description:
                    <br/>
                    <input className="edit-input" type="text" name="item_description" value={this.state.item_description} onChange={this.onChange}/>
                </div>

                <br/>

                <button className="edit-submit">Submit</button>
            </form>
        );
    };
};

export default Edit;