
import './index.css';
import App from './App';
import store from './Components/Store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Provider store={store}><App /></Provider>);