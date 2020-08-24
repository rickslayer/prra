import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export default function Home() {
  const userStyles = makeStyles((theme) => ({
     left: {
      backgroundColor: '#154d40',
      textAlign:'center',
      textTransform:'uppercase',
    },
    right: {
      backgroundColor: '#f7f0eb',
      textAlign:'center',
      textTransform:'uppercase',
    },
    txtLeft: {
      color:'#f7f0eb',
      lineHeight:'700px',
      fontSize:'50px',
      '&:hover': {
        color: '#f7f010',
      }
    },
    txtRight: {
      color:'#154d40',
      lineHeight:'700px',
      fontSize:'50px',
    },
  }));
  const classes = userStyles()
  return (
      <Grid container style={{height:'100%', position: 'absolute'}}>
      <Grid item xs sm={4} className={classes.left}>
      <Typography>
        <Link href="/resume" className={classes.txtLeft} style={{ textDecoration: 'none' }}>
          Resume
        </Link>
        </Typography>
      </Grid>
      <Grid item xs sm={4} className={classes.right}>
        <Typography>
          <Link href="/portifolio" className={classes.txtRight} style={{ textDecoration: 'none' }}>
            Portifolio
            </Link>
        </Typography>
      </Grid>
      <Grid item xs sm={4} className={classes.left}>
        <Typography>
          <Link href="/blog" className={classes.txtLeft} style={{ textDecoration: 'none' }}>
            Blog
            </Link>
        </Typography>
      </Grid>
      </Grid>
  )
}
