import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {
  const data = {
    columns: [
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
    rows: [
      {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        age: ""
      }
    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
      paging={false}
    />
  );
}

export default DatatablePage;