import { connect } from 'react-redux';
import { active } from './store/categories';
import { Button } from '@material-ui/core';
import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


function Categories(props) {
  const classes = useStyles();


  return (
    <div className={classes.root} style={{ 'float': 'left', 'paddingTop': '10px', 'margin-left': '15px' }}>
          <h2> Browse our categories</h2>

      <ButtonGroup variant="text" color="secondary" aria-label="text secondary button group">
        {props.activeList.categories.map((category) => {
          return (

            <Button style={{'color':'black'}}  onClick={() => props.active(category.normalizedName)}>
              {category.displayName}
            </Button>
          );
        })}
      </ButtonGroup>

    </div>
  );
};

const mapStateToProps = (state) => ({
  activeList: state.categories,
});

const mapDispatchToProps = { active };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);