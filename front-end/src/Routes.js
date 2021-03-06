import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './modules/Login/Login';
import Register from './modules/Register/Register';
import Profile from './modules/Profile/Profile';
import Orders from './modules/Orders/Orders';
import Products from './modules/Products/Products';
import AdminOrders from './modules/Admin/Orders/AdminOrders';
import AdminProfile from './modules/Admin/Profile/AdminProfile';
import Checkout from './modules/Checkout/Checkout';
import AdminOrderDetail from './modules/Admin/OrderDetail/AdminOrderDetail';
import DetailOrder from './modules/Orders/DetailOrder';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/products" component={ Products } />
        <Route path="/admin/orders/:id" component={ AdminOrderDetail } />
        <Route path="/admin/orders" component={ AdminOrders } />
        <Route path="/admin/profile" component={ AdminProfile } />
        <Route path="/register" component={ Register } />
        <Route path="/profile" component={ Profile } />
        <Route path="/orders/:id" component={ DetailOrder } />
        <Route path="/orders" component={ Orders } />
        <Route path="/checkout" component={ Checkout } />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default Routes;
