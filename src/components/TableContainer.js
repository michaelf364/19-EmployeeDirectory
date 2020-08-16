import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Jumbotron from "./Jumbotron";
import getEmployeeName from "../utils/API";
import DatatablePage from "./Table"

class TableContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.loadEmployees();
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

  render() {
    return (

      <Container>
        <Jumbotron />
        <Row>
          <DatatablePage
            firstName={this.employee.name.first}
            lastName={this.employee.name.last}
            phoneNumber={this.employee.phone}
            age={this.employee.dob.age}
          />
        </Row>
      </Container>
    );
  }
}

export default TableContainer;
