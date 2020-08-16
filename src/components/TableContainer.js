import React, { Component } from "react";
import Container from "./Container";
import Jumbotron from "./Jumbotron";
import getEmployeeName from "../utils/API";
import { MDBDataTableV5 } from 'mdbreact';

class TableContainer extends Component {
  state = {
    employees: [],
    employeeInfo: []
  }

  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = () => [
    getEmployeeName()
      .then(response => response.data.results)
      .then(data => {
        this.setState({ employees: data })
      })

      .then(async () => {
        this.setState({ employeeInfo: this.buildData(), isLoading: false })
      })
      .catch((err) => {
        console.log(err);
      })
  ];

  buildData = () => {
    let employees = this.state.employees.map((employee) => {
      return (
        {
          employeePicture:  <img
          src={employee.picture.medium}
          alt='employee'
      />,
          firstName: employee.name.first,
          lastName: employee.name.last,
          phoneNumber: employee.phone,
          age: employee.dob.age,
        }
      )
    });
    return employees;
  }

  render() {
    const data = {
      columns: [
        {
          label: 'Employee Picture',
          field: 'employeePicture',
          width: 150
        },
        {
          label: 'First Name',
          field: 'firstName',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Last Name',
          field: 'lastName',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Phone Number',
          field: 'phoneNumber',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Age',
          field: 'age',
          sort: 'asc',
          width: 100
        }
      ],
      rows: this.state.employeeInfo
    };

    return (

      <Container>
        <Jumbotron />
        <MDBDataTableV5
          striped
          bordered
          small
          data={data}
          searchTop
          searchBottom={false}
          entriesOptions={[5, 20, 25]}
          entries={5}
        />
      </Container>
    );
  }
}

export default TableContainer;
