import { connect } from 'react-redux';
import { increment } from './store/products';
import {
  Container,
  Grid,
} from '@material-ui/core/';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(15),
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardMedia: {
    padding: '80%',
  },
  root: {
    maxWidth: 345,
  },
}));

const Products = (props) => {
  const classes = useStyles();

  return (
    <Container marginTop='30px' className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={5}>
        {props.productsReducer.products.map((product) => {
          return (
            <Grid item key={product.name} >

              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="240"
                    image={product.imgUrl} title="Image title"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      {product.name}

                    </Typography>
                    <Typography>Price: JD {product.price}</Typography>
                    <Typography> items in stock: {product.inventory}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {product.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="secondary" onClick={() => product.description}>
              
                  ADD TO CART
                  </Button>
                  <Button size="small" color="secondary">
                  VIEW DETAILS
                  </Button>
                  
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};





const mapStateToProps = (state) => ({ productsReducer: state.productsReducer });
const mapDispatchToProps = { increment };
export default connect(mapStateToProps, mapDispatchToProps)(Products);