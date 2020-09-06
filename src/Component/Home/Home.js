import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import './Home.scss'
import Post from '../Post/Post';



const Home = () => {

    const [post, setPost] = useState([]);
  
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPost(data))
    },[])
    return (
        <Grid container>
            <Grid item md={12}>
                <AppBar style={{background: '#4a5775'}} position="static">
                    <Typography variant="h6" className="heading">
                        All Post
                    </Typography>
                </AppBar>
                {
                    post.map(post_data => <Post key={post_data.id} post_data={post_data}></Post>)
                }
            </Grid>
        </Grid>
    );
};

export default Home;