import React from 'react';
import {Typography, Container, Grid, Link} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const footers = [
  {
    title: 'Affiliates',
    description: ['Bateman Race Timing', 'Lake Jackson Lion Club'],
  },
  {
    title: 'Features',
    description: ['Cool stuff',  'Developer stuff'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
]

const useStyles = makeStyles(theme => ({footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
    <CssBaseline/>
<Container maxWidth="md" component="footer" className={classes.footer}>
  <Grid container spacing={4} justify="space-evenly">
    {footers.map(footer => (
      <Grid item xs={6} sm={3} key={footer.title}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          {footer.title}
        </Typography>
        <ul>
          {footer.description.map(item => (
            <li key={item}>
              <Link href="#" variant="subtitle1" color="textSecondary">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </Grid>
    ))}
  </Grid>
</Container>
</div>
)}
