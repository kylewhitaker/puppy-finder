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


class Table extends React.Component {

  render() {
    let groups = [];
    this.props.canines.forEach(canine => {
      const idx = groups.findIndex(x => x.type === canine.type && x.age === canine.age);
      if (idx < 0) {
        groups.push({ type: canine.type, age: canine.age, qty: 1 });
      } else {
        groups[idx].qty++;
      }
    })
    const rows = groups.map(canine => {
      return (
        <tr>
          <td>{canine.type}</td>
          <td>{canine.age}</td>
          <td>{canine.qty}</td>
        </tr>
      )
    })
    return (
      <table>
        <tr>
          <th>Type</th>
          <th>Age</th>
          <th>Qty</th>
        </tr>
        {rows}
      </table>
    );
  }

}


class App extends React.Component {

  constructor() {
    super();
    this.state = { puppies: [] };
  }

  render() {
    return (
      <div className="container">
        <Carousel width="720px" showThumbs={false}>
          {this.state.puppies}
        </Carousel>
      </div>
    );
  }

  componentDidMount() {
    getData().then(response => {
      const puppies = response.map(puppy => {
        return (
          <div>
            <p className="title">{puppy.title}</p>
            <img src={puppy.image}></img>
            <Table canines={puppy.canines}></Table>
          </div>
        )
      });
      this.setState({ puppies });
    });
  }

}


ReactDOM.render(<App />, document.getElementById('root'));
