import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{'background' : 'white' , 'color' : 'gray'}} position="static">
        <Toolbar>
          
          <Typography style={{'color':'black', 'opacity':'0.7'}} variant="h6" className={classes.title}>
          Magic Store
          </Typography>
          <Button color="inherit">Cart(0)</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
