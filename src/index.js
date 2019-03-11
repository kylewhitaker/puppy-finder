import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';

const getData = () => {
  return fetch(`http://localhost:8000/`, { headers: { 'content-type': 'application/json' }, method: 'get' })
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => !response.ok ? Promise.reject(json) : json)
    .then(response => response, error => error);
}

class App extends React.Component {

  render() {
    return (
      <div>Puppy Finder</div>
    );
  }

  componentDidMount() {
    getData().then(response => {
      console.log(response);
    });
  }
  
}

ReactDOM.render(<App />, document.getElementById('root'));
