import React, { Component } from "react";

 class GifSearch extends Component {
  state = {
    query: ""
  };

  handleSubmit = event =>
    {
      event.preventDefault()
      this.props.fetchGifs(this.state.query)
    }
