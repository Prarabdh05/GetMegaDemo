import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';
import reportWebVitals from './reportWebVitals';
import './styles.css';

ReactDOM.render
  (
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
  );

reportWebVitals();
