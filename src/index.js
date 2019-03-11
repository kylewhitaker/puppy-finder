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


class Image extends React.Component {

  render() {
    return (
      <div className="imageContainer">
        <img className="img" id={this.props.title} src={this.props.image} width="650px" />
        <canvas className="myCanvas" id={`canvas_${this.props.title}`} width="650" height="450"></canvas>
      </div>
    )
  }

  componentDidMount() {
    if (this.props.canines.length === 0) return;
    const canvas = document.getElementById(`canvas_${this.props.title}`);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    this.props.canines.forEach(canine => {
      const [[startX, startY], [endX, endY]] = canine.coordinates;
      const diffX = endX - startX;
      const diffY = endY - startY;
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "red";
      ctx.rect(startX, startY, diffX, diffY);
      ctx.stroke();
    });
  }

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
        <Carousel showThumbs={false}>
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
            <Image title={puppy.title} image={puppy.image} canines={puppy.canines}></Image>
            <Table canines={puppy.canines}></Table>
          </div>
        )
      });
      this.setState({ puppies });
    });
  }

}


ReactDOM.render(<App />, document.getElementById('root'));
