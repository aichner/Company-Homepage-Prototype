//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// React Router Link
import { Link } from 'react-router-dom';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { 
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBMask,
    MDBIcon,
    MDBView,
    MDBBtn,
    MDBBadge,
} from "mdbreact";

//> Components
import {
  Hero
} from '../../organisms/sections';

//> SCSS
import './bloglist.scss';

//> API
// Keys
import API_KEY from './key.json';
// Set API config
const API_LIST = 'https://www.googleapis.com/blogger/v3/blogs/8573796855968165555/posts?key='+API_KEY.apiKey;

//> Component related config
const color_LIST = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "agency-red",
    "agency-dark",
    "pink",
    "red",
    "green",
    "blue",
    "brown",
    "black",
    "white",
    "orange"
]

// This component shall not return any content
class BlogList extends React.Component {
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

    getPureText = (text) => {
        let rx = /\{(.*?)\}/;
        let res = text.replace(rx, "");
        return res;
    }

    getColor = (text) => {

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
                    return blogs.map((blog, i) => {
                        
                        // Preset Image
                        let image = undefined;
                        // Preset color
                        let color = "dark";
                        // Preset text preview
                        let text = "";
                        if(blog.content !== undefined && blog.content !== null && blog.content !== ""){
                            //> Get image to show as title image
                            // Create a new DOM to crawl the image from
                            let content_HTML = new DOMParser().parseFromString(blog.content, "text/html");
                            // Get the first image from the new blog content DOM
                            let first_image = content_HTML.getElementsByTagName('img')[0];
                            // Check if there is an image
                            if(first_image !== undefined){
                                // Extract image source
                                image = first_image.src;
                            }

                            // Get color label
                            if(blog.labels !== undefined && blog.labels !== null){
                                blog.labels.map((title, i) => {
                                    if(color_LIST.includes(title)){
                                        color = title;
                                        return true;
                                    } else {
                                        return false;
                                    }
                                })
                            }

                            //> Get text preview
                            // Create temporary HTML element
                            let temp = document.createElement("div");
                            // Write html blog content to temporary HTML element
                            temp.innerHTML = blog.content;
                            // Get the first 
                            text = temp.textContent.substring(0,180) + "...";
                            
                            
                        }

                        return(
                             <MDBCol key={i} lg="3" md="12" className="mb-lg-0 mb-4">
                                <Link to={"/"+blog.id}>
                                    <MDBView hover className="mb-4" >
                                    <img
                                        className="img-fluid m-auto"
                                        src={image}
                                        alt={blog.title+" image"}
                                    />
                                    <MDBMask overlay="white-slight" />
                                    </MDBView>
                                </Link>
                                <h6 className="font-weight-bold mb-3">
                                    {blog.labels && blog.labels.map((title, i) => {
                                        if(!color_LIST.includes(title)){
                                            return(
                                                <MDBBadge key={i} className="mr-2" pill color={color}>{title}</MDBBadge>
                                            );
                                        } else {
                                            return null;
                                        }
                                    })}
                                </h6>
                                <h4 className="font-weight-bold mb-3">
                                <strong>{blog.title}</strong>
                                </h4>
                                <p>
                                by <a href="#!" className="font-weight-bold">
                                {blog.author.displayName}</a>, {new Date(blog.published).toDateString()}
                                </p>
                                <p className="dark-grey-text">
                                {text}
                                </p>
                                <MDBBtn color={color} rounded size="md">
                                Read more
                                </MDBBtn>
                            </MDBCol>
                        );
                    })
                } else {
                     return null;
                }
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    render() {
        console.log(this.state.data);
        return (
            <MDBCard className="my-5 px-5 pb-5 recent-post-list">
                <MDBCardBody className="text-center">
                    <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Recent posts
                    </h2>
                    <p className="text-center w-responsive mx-auto mb-5">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                    </p>
                    <MDBRow className="justify-content-center">
                        {this.renderList()}
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        );
    }
}

export default BlogList;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
