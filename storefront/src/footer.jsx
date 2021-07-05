import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';


const useStyles = makeStyles({
  root: {
    width: 1500,
    
  },
});

function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <footer style={{ 'box-shadow': 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
  }} className="footer"> 
      <BottomNavigation style={{ 'color' : 'gray', 'textAlign':'center'}}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
     
      <p>All Rights Reserved &copy; As-har Abuhelweh</p>

    </BottomNavigation>
    </footer>
  );
}

export default Footer;
