import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import ToDoAppContainer from './container/toDoAppContainer'
import store from './redux/configureStore'

ReactDOM.render(
<Provider store={store}>
    <ToDoAppContainer />
</Provider>,
document.getElementById('root'));
registerServiceWorker();
