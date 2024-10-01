import logo from './logo.svg';
import './App.css';
import AppRoute from './route/route';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <>
    <Provider store={store}>
    <AppRoute/>
    </Provider>
    </>
  );
}

export default App;
