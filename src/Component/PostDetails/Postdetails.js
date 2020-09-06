import React, { useState, useEffect } from 'react';
import { Card, AppBar, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import Comment from '../Comments/Comment';
import image from '../ImageData/ImageData'
import axios from 'axios';

const Postdetails = () => {
    const {postId} = useParams();
    const [postDetails, setpostDetails] = useState({});
    const {title, body} = postDetails;

    // post api
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setpostDetails(data))
    }, [postId])

    // post comments api
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setComments(data))
    }, [])

    // useEffect(() => {
    //     const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    //     axios(url)
    //     .then(data => setComments(data.data))
    // }, [])

    // function getPost() {
    //     const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    //     return axios.get(url);
    // }

    // function commentImage() {
    //     return axios.get('https://jsonplaceholder.typicode.com/users');
    // }

    // Promise.all([getPost(), commentImage()])
    //     .then(function (results) {
    //         const acct = results[0];
    //         const perm = results[1];
    //         console.log(acct, perm);
    //     });

    // console.log(comments);
    // // comments image
    // const [commenImage, setCommenImage] = useState(image);

    return (
        <>
        <AppBar style={{background: '#4a5775'}} position="static">
            <Typography variant="h6" className="heading">
                Post Details
            </Typography>
        </AppBar>
        <Card className="post_stylle">
            <h2>Title: {title}</h2>
            <p>{body}</p>
        </Card>
        <h3>Comments</h3>
        {
            comments.map(comment => <Comment comment={comment} key={comment.email}></Comment>)   
        }
        </>
    );
};

export default Postdetails;