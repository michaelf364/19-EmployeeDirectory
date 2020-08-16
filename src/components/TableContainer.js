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
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
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

  callBackendAPI = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
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
          email: employee.email,
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
          sort: 'disabled',
          width: 150
        },
        {
          label: 'First Name',
          field: 'firstName',
          width: 150
        },
        {
          label: 'Last Name',
          field: 'lastName',
          width: 270
        },
        {
          label: 'Phone Number',
          field: 'phoneNumber',
          width: 200
        },
        {
          label: 'Email',
          field: 'email',
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
          order={['firstName', 'asc' ]}
          bordered
          small
          data={data}
          searchTop
          searchBottom={false}
          entriesOptions={[5, 20, 25]}
          entries={5}
          materialSearch
          hover
          fullPagination 
        />
      </Container>
    );
  }
}

export default TableContainer;
