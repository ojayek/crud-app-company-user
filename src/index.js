import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "@fontsource/vazir";
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserActionApp from './UserCRUD/UserAction';

ReactDOM.render(<UserActionApp />, document.getElementById('root'));

serviceWorker.unregister();
