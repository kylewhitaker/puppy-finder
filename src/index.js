import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";

const getData = () => {
  return fetch(`http://localhost:8000/`, { headers: { 'content-type': 'application/json' }, method: 'get' })
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => !response.ok ? Promise.reject(json) : json)
    .then(response => response, error => error);
}

class App extends React.Component {

  constructor() {
    super();
    this.state = { puppies: [] };
  }

  render() {
    return (
      <Carousel width="720px" showThumbs={false}>
        {this.state.puppies}
      </Carousel>
    );
  }

  componentDidMount() {
    getData().then(response => {
      const puppies = response.map(puppy => {
        return (
          <div>
            <p className="title">{puppy.title}</p>
            <img src={puppy.image}></img>
          </div>
        )
      });
      this.setState({ puppies });
    });
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
