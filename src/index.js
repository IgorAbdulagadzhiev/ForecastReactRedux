import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(<App />, document.getElementById('root'));

const res = async () => {
  return await fetch(`/api/location/44418/`);
}



res().then((data) => {
  console.log(data);
  return data.json();
}).then((data) => {
  console.log(data)
}).catch((error) => {
  console.log(error);
})