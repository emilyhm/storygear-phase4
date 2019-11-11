import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Index from './components/Products/index';
import Create from './components/Create/create-product';
import Edit from './components/edit-product';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Index} />
        <Route path='/create-product' component={ Create } />
        <Route exact path='/edit-product/:productId' component={ Edit } />
      </Layout>
    );
  }
}
