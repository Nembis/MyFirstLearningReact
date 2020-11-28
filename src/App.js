import './App.css';
import Cart from './Components/Cart';

const item = [
    { id: 1, name: 'Taco Seasoning', price: 2.25, qty: 2 },
    { id: 2, name: 'Pinto Bean', price: 1.99, qty: 3 },
    { id: 3, name: 'Sour Cream', price: 3.5, qty: 1 }
];

function App() {
    return (
        <div className='App'>
            <Cart initialItems={item} />
        </div>
    );
}

export default App;
