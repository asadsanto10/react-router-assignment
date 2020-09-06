import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    margin: '20px',
    padding: '20px',
    maxWidth: '100%'
  },
  displays: {
    display: 'flex',
    alignItems:'center',
  },
  avterWidth: {
    width: '65px',
    height: '65px',
    borderRadius: '50px',
  }
}));

const Comment = (props) => {
    const classes = useStyles();
    const {id, email, body} = props.comment;
    console.log(props);
    return (
        <>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2} className={classes.displays}>
                    <Grid item>
                        <img className={classes.avterWidth} src="https://img-a.udemycdn.com/course/240x135/806922_6310_3.jpg" alt=""/>
                    </Grid>
                    <Grid item xs>
                        <h5 className={classes.displays}><PersonIcon color="secondary"></PersonIcon>User ID: {id}</h5>
                        <p><b>Email:</b> {email}</p>
                        <p>{body}</p>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default Comment;