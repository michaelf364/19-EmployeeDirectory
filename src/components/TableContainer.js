import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import Navbar from "./Navbar";
import MovieDetail from "./MovieDetail";
import getEmployeeName from "../utils/API";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchMovies("The Matrix");
  }

  loadEmployees = () => [
    getEmployeeName()
      .then((response) => {
        console.log(response);
        this.setState(
          {
            // API returns "results" 
            employees: response.data.results
          }
        )

      })
      .catch((err) => {
        console.log(err);
      })
  ]

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  render() {
    return (

      <Container>
        <Navbar />
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for a Movie to Begin"}
            >
              {this.state.result.Title ? (
                <MovieDetail
                  title={this.state.result.Title}
                  src={this.state.result.Poster}
                  director={this.state.result.Director}
                  genre={this.state.result.Genre}
                  released={this.state.result.Released}
                />
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </Card>
          </Col>
          <Col size="md-4">
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
