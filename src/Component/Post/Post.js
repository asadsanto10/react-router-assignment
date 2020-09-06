import React from 'react';
import { Card, CardActions, Button } from '@material-ui/core';
import './Post.scss'
import { useHistory } from 'react-router-dom';
const Post = (props) => {
    const {title, id} = props.post_data;

    // button handeler
    const history = useHistory();
    const postButtonHandeler = (id) => {
        history.push(`post-details/${id}`);
    }
    return (
        <>
            <Card className="post_stylle">
                    <h2>Title: {title}</h2>
                <CardActions>
                    <Button onClick={ ()=> postButtonHandeler(id)} className="post_button" variant="outlined">Learn More</Button>
                </CardActions>
            </Card>
        </>
    );
};

export default Post;