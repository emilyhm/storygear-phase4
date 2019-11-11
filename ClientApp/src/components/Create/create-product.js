import React, { Component } from 'react';
import './create.css';
import axios from 'axios';

class Create extends Component {
    state = {
        product_name: "",
        product_image: "",
        category: "",
        item_description: ""
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { product_name, product_image, category, item_description } = this.state
        let dataURL = '/api/Products';
        axios.post(dataURL, { product_name, product_image, category, item_description })

        window.location = '/';

        // fetch(dataURL, {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     method: 'post',
        //     body: JSON.stringify({ 
        //         title: this.state.title, 
        //         product_image: this.state.product_image, 
        //         category: this.state.category, 
        //         item_description: this.state.item_description 
        //     })
        // })
        // .then(res => res.json)
        // // takes the data and turns it into json
        // // .then(items => {
        // // this.setState({
        // //     products: items
        // //     // sets state to all the items that were brought back
        // // });
        // // });
        // .then(data => console.log(data))
        // .catch(err => console.log(err));
    };


    render () {
        return (
            <form onSubmit={this.onSubmit}>
                <h1> Create a Product!</h1>
                <div>
                    Product Name:
                    <br/>
                    <input type="text" name="product_name" value={this.state.product_name} onChange={this.onChange}/>
                </div>

                <br/>

                <div>
                    Product Image Link:
                    <br/>
                    <input type="text" name="product_image" value={this.state.product_image} onChange={this.onChange}/>
                </div>

                <br/>

                <div> 
                    Product Category:
                    <br/>
                    <input type="text" name="category" value={this.state.category} onChange={this.onChange}/>
                </div>

                <br/>

                <div>
                    Product Description:
                    <br/>
                    <input type="text" name="item_description" value={this.state.item_description} onChange={this.onChange}/>
                </div>

                <br/>

                <button className="submit">Submit</button>
            </form>
        );
    };
};

export default Create;