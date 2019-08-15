//> React
// Contains all the functionality necessary to define React components
import React from 'react';

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
    MDBContainer,
} from "mdbreact";

//> Helpers for setting innerHTML of JSX elements
import { renderToString } from 'react-dom/server';
import ReactHtmlParser from 'react-html-parser'; 

//> CSS
import './blog.scss';

//> API
// Keys
import API_KEY from '../../keys/blogger.json';

// This component shall not return any content
class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        // Fetch when component is mounted
        this.fetchData();
    }

    fetchData = () => {
        // Set API blog list url
        const API_LIST = 'https://content.googleapis.com/blogger/v3/blogs/8573796855968165555/posts/'+
        this.props.match.params.id+'?alt=json&key='+API_KEY.apiKey;
        // Get blog content
        fetch(API_LIST)
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    beautifyContent = (content) => {
        let c = ReactHtmlParser(content);
        return renderToString(c);
    }

    renderBlog = () => {
        let data = this.state.data;
        console.log(data);
        // If the state has been set
        if(data !== undefined && data !== null){
            // Check if it's the correct patch of data
            if(data.kind === "blogger#post"){
                // Check if there are any blogs
                if(data.content){
                    return(
                        <>
                            <div className="heading-container">
                                <h1 className="h1-responsive font-weight-bold my-5">
                                    {data.title}
                                </h1>
                            </div>
                            <p dangerouslySetInnerHTML={
                                {__html: this.beautifyContent(data.content)}
                            } style={{"fontSize": "22px !important"}}></p>
                        </>
                    )
                    
                } else {
                     return false;
                }
            } else {
                 return false;
            }
        } else {
             return false;
        }
    }

    render() {
        console.log(this.state);

        return (
            <MDBCard id="article" className="my-5 px-5 pb-5">
                <MDBCardBody className="text-left">
                    <MDBContainer>
                    {this.renderBlog()}
                    </MDBContainer>
                </MDBCardBody>
            </MDBCard>
        );
    }
}

export default Blog;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
