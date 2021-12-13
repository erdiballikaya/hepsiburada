import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/root/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "typeface-roboto";
import { Provider } from "react-redux";
import configureStore from "./redux/reducers/configureStore";
import products from '/HepsiBurada/hepsiburada/src/productsData/products';

const store = configureStore();
localStorage.setItem("products", JSON.stringify(products));
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
