import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from '../src/contexts/ProductContext';
import CartContext from '../src/contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<CartContext.Provider value={{ products, addItem }}>
			<ProductContext.Provider value={{ products, addItem }}>
			<Navigation cart={cart} />
			</ProductContext.Provider>
			</CartContext.Provider>

			{/* Routes */}
			<CartContext.Provider value={{ products, addItem }}>
			<ProductContext.Provider value={{ products, addItem }}>
			<Route
				exact
				path="/"
				component = {Products}
			/>
			</ProductContext.Provider>
			</CartContext.Provider>

			<CartContext.Provider value={{ products, addItem }}>
			<ProductContext.Provider value={{ products, addItem }}>
			<Route
				path="/cart"
				component = {ShoppingCart}
			/>
			</ProductContext.Provider>
			</CartContext.Provider>
		</div>
		
	);
}

export default App;
