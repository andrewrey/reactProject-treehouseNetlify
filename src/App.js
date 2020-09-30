import React, { Component } from "react";
import Axios from "axios";
import "./App.css";
import SearchForm from "./Components/SearchForm";
import GifList from "./Components/GifList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
    // fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIF_API}`)
    //   .then((response) => response.json())
    //   .then((data) => this.setState({ gifs: data.data }))
    //   .catch((error) => console.log("Error fetcing and parsing data...", error));
    Axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIF_API}`)
      .then((response) =>
        this.setState({
          gifs: response.data.data,
        })
      )
      .catch((error) => console.log("Error fetching and parsing data...", error));
  }

  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm />
          </div>
        </div>
        <div className="main-content">
          <GifList />
        </div>
      </div>
    );
  }
}
