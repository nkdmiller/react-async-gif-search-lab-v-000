import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";
 class GifListContainer extends Component {
  state = {
    gifs: []
  };

  render() {
    return (
      <div>
        <GifSearch />
        <GifList gifs = {this.state.gifs}/>
      </div>
    );
  }

  fetchGifs = (query) => {
    fetch()
  }