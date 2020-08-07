import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import MainApp from "./App";

ReactDOM.render(
    <MainApp />,
    document.getElementById('root')
);

serviceWorker.unregister();
