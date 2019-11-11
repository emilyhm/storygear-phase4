import React, { Component } from 'react';
import './create.css';
import axios from 'axios';

class Create extends Component {
    state = {
        title: "",
        image: "",
        category: "",
        description: ""
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { title, image, category, description } = this.state
        let dataURL = '/api/products';
        // axios.post(dataURL, { title, image, category, description })

        // window.location = '/';

        fetch(dataURL, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({ 
                title: this.state.title, 
                image: this.state.image, 
                category: this.state.category, 
                description: this.state.description 
            })
        })
        .then(res => res.json)
        // takes the data and turns it into json
        // .then(items => {
        // this.setState({
        //     products: items
        //     // sets state to all the items that were brought back
        // });
        // });
        .then(data => console.log(data))
        .catch(err => console.log(err));
    };


    render () {
        return (
            <form onSubmit={this.onSubmit}>
                <h1> Create a Product!</h1>
                <div>
                    Product Name:
                    <br/>
                    <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
                </div>

                <br/>

                <div>
                    Product Image Link:
                    <br/>
                    <input type="text" name="image" value={this.state.image} onChange={this.onChange}/>
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
                    <input type="text" name="description" value={this.state.description} onChange={this.onChange}/>
                </div>

                <br/>

                <button className="submit">Submit</button>
            </form>
        );
    };
};

export default Create;