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
    MDBView,
    MDBBtn,
    MDBBadge,
    MDBChipsInput,
    MDBContainer,
} from "mdbreact";

//> CSS
import './bloglistlabel.scss';

//> API
// Keys
import API_KEY from '../../keys/blogger.json';

//> Component related config
const colorList = [
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
class BlogListLabel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            labels: [],
            labels_formatted: this.setInitialLabelFormatted(),
        };
    }

    componentDidMount() {
        // Fetch data when component has mounted
        this.fetchData();
    }

    fetchData = () => {
        //Format for labels: "label:cat|label:blue|label:wow";

        // Set API blog list by label url
        const API_LIST_LABEL = 'https://content.googleapis.com/blogger/v3/blogs/8573796855968165555/posts/search/?q='+
        this.state.labels_formatted+'&key='+API_KEY.apiKey;
        // Get blog list
        fetch(API_LIST_LABEL)
            .then((response) => response.json())
            .then((data) => this.setState({ data }));
    }

    setInitialLabelFormatted = () => {
        if(this.props.match !== undefined){
            if(this.props.match.params !== undefined){
                if(this.props.match.params.label !== undefined){
                    return "label:"+this.props.match.params.label;
                }
            }
        }
    }

    setLabelFormatted = () => {
        let labels = "";
        this.state.labels.map((tag, i) => {
            if(i+1 === this.state.labels.length){
                labels += "label:"+tag;
            } else {
                labels += "label:"+tag+["|"];
            }
            return true;
        })

        this.setState({labels_formatted: labels}, () => this.fetchData());
    }

    getPureText = (text) => {
        let rx = /\{(.*?)\}/;
        let res = text.replace(rx, "");
        return res;
    }

    renderList = () => {
        let data = this.state.data;
        // If the state has been set
        if(data !== undefined && data !== null){
            // Check if it's the correct patch of data
            if(data.kind === "blogger#postList"){
                if(data.items !== undefined){
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
                                let firstImage = content_HTML.getElementsByTagName('img')[0];
                                // Check if there is an image
                                if(firstImage !== undefined){
                                    // Extract image source
                                    image = firstImage.src;
                                }

                                // Get color label
                                if(blog.labels !== undefined && blog.labels !== null){
                                    blog.labels.map((title, i) => {
                                        if(colorList.includes(title)){
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
                                    {image &&
                                    <Link to={"/blog/article/"+blog.id}>
                                        <MDBView hover className="mb-4" >
                                        <img
                                            className="img-fluid m-auto"
                                            src={image}
                                            alt={blog.title+" image"}
                                        />
                                        <MDBMask overlay="white-slight" />
                                        </MDBView>
                                    </Link>
                                    }
                                    <h4 className="font-weight-bold mb-2">
                                    <strong>{blog.title}</strong>
                                    </h4>
                                    <h6 className="font-weight-bold mb-3">
                                        {blog.labels && blog.labels.map((title, i) => {
                                            if(!colorList.includes(title)){
                                                return(
                                                    <Link key={i} to={"/blog/"+title}>
                                                        <MDBBadge 
                                                        className="mr-2"
                                                        pill
                                                        color={color}>
                                                        {title}
                                                        </MDBBadge>
                                                    </Link>
                                                );
                                            } else {
                                                return null;
                                            }
                                        })}
                                    </h6>
                                    <p>
                                    by <a href="#!" className="font-weight-bold">
                                    {blog.author.displayName}</a>, {new Date(blog.published).toDateString()}
                                    </p>
                                    <p className="dark-grey-text">
                                    {text}
                                    </p>
                                    <Link to={"/blog/article/"+blog.id}>
                                        <MDBBtn color={color} rounded size="md">
                                        Read more
                                        </MDBBtn>
                                    </Link>
                                </MDBCol>
                            );
                        })
                    } else {
                        return null;
                    }
                } else {
                    return <h2>No search results.</h2>;
                }
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    // Handle change in tag search
    handleChange = (e) => {
        // If the ENTER key is pressed
        if (e.key === 'Enter') {
            // Get the main HTML chips element
            let layer1 = document.getElementsByClassName('chips')[0].outerHTML;
            // Create a new temporary element
            let temp = document.createElement("div");
            // Set the innerHTML of the temporary element to the main HTML element's outerHTML
            temp.innerHTML = layer1;
            // Get all the chips from the list
            let layer2 = temp.getElementsByClassName('chip');
            // Push all the chips to an array
            var arr = [...layer2];
            // If the array has been set
            if(Array.isArray(arr)){
                // For each chip in chips
                let chips = arr.map((chip, i) => {
                    // Split the HTML's innerHTML element (remove the icon)
                    let chipParts = chip.innerHTML.split("<");
                    // [0] is the pure chip text, [1] would be the close icon
                    return chipParts[0];
                })
                // Add the newly added chip to the already existent chips
                chips.push(e.target.value);
                // Set the state accordingly
                this.setState({labels: chips}, () => this.setLabelFormatted());
            }
        }
    }

    // Handle the closing of one of the badges
    myCloseFunction = () => {
        //console.log("Please just fire already...");
    }

    render() {
        return (
            <MDBCard id="article-list" className="my-5 px-5 pb-5 recent-post-list">
                <MDBCardBody className="text-center">
                    <MDBContainer>
                        <h2 className="h1-responsive font-weight-bold text-center my-5">
                        Tag search
                        </h2>
                        <MDBChipsInput
                        chips={[this.props.match.params.label]}
                        onKeyDown={this.handleChange}
                        handleClose={this.myCloseFunction}
                        />
                        <p className="text-center w-responsive mx-auto mb-5">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                        </p>
                    </MDBContainer>
                    <MDBRow className="justify-content-center">
                        {this.renderList()}
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        );
    }
}

export default BlogListLabel;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
