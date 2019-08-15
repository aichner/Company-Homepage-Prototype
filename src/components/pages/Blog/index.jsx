//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
/*
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
} from 'mdbreact';
*/

//> Components
import {
  Hero
} from '../../organisms/sections';

//> API
// Keys
import API_KEY from './key.json';
// Set API config
const API_LIST = 'https://www.googleapis.com/blogger/v3/blogs/8573796855968165555/posts?key='+API_KEY.apiKey;

// This component shall not return any content
class Blog extends React.Component {
     constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

    componentDidMount() {
        // Get blog list
        fetch(API_LIST)
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    renderList = () => {
        let data = this.state.data;
        // If the state has been set
        if(data !== undefined && data !== null){
            // Check if it's the correct patch of data
            if(data.kind === "blogger#postList"){
                // Check if there are any blogs
                if(data.items.length > 0){
                    let blogs = data.items;
                    // For each blog
                    blogs.map((blog, i) => {
                        console.log(blog,i);
                    })
                } else {
                     return { "value": false, "msg": "There are no posts to display" }
                }
            } else {
                return { "value": false, "msg": "This API does not return the correct data" }
            }
        } else {
            return { "value": false, "msg": "There is no data" }
        }
    }

    render() {
        console.log(this.renderList());

        return (
            null
        );
    }
}

export default Blog;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
