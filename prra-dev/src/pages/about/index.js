import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      ...theme.typography.button
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.background.primary
    },
    left: {
        textAlign:'center',
        backgroundColor:'#154d40',
        padding: theme.spacing(1),
    }
  }));

export default function About() {
    const classes = useStyles()
    return (
       <Grid container>
           <Grid item xs={3}>
               <Paper className={classes.left}>
                   <div>
                       <h1 style={{color:'#f7f0eb'}}>PRRA</h1>
                    </div>
                </Paper>
           </Grid>
           <Grid item xs={9}>
               <Paper className={classes.paper}> <div className={classes.root}>PAULO RICARDO RUBE DE ALMEIDA</div></Paper>
           </Grid>
       </Grid>
    )
}
