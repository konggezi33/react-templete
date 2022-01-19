
import './App.css';
import Layer from './Pages/layer';

// 引入Provider 来统一管理store
import { Provider } from 'react-redux'
// 引入store
import store from './reducer/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Layer />
      </div>
    </Provider>
  );
}

export default App;
