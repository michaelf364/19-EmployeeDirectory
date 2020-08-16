import React, * as react from 'react';

import { MDBDataTable, Row, Col, Card, CardBody } from 'mdbreact';

import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/posts';




class TableSectionInbound extends react.Component {

    constructor(props) {

        super(props);

        this.state = {

            posts: [],

            isLoading: true,

            tableRows: [],

        };

    }




    componentWillMount = async () => {

        await axios.get(url)

            .then(response => response.data)

            .then(data => {

                // console.log(data);

                // if (err) throw err;

                this.setState({ posts: data })

            })

            .then(async () => {

                this.setState({ tableRows: this.assemblePosts(), isLoading: false })

                console.log(this.state.tableRows);

            });

    }




    assemblePosts = () => {

        let posts = this.state.posts.map((post) => {

            return (

                {

                    number: post.id,

                    title: post.title,

                    user: post.userId,

                    body: post.body,

                }

            )

        });

        return posts;

    }





    render() {

        const data = {

            columns: [

                {

                    label: '#',

                    field: 'number',

                },

                {

                    label: 'Title',

                    field: 'title',

                },

                {

                    label: 'User ID',

                    field: 'user',

                },

                {

                    label: 'Body',

                    field: 'body',

                },

            ],

            rows: this.state.tableRows,

        }




        return (

            <RowclassName="mb-4" >

                <Col md="12">

                    <Card>

                        <CardBody>

                            <MDBDataTable

                                striped

                                bordered

                                hover

                                data={data}

                            />

                        </CardBody>

                    </Card>

                </Col>

      </Row >

    )

    }

}




export default TableSectionInbound;
