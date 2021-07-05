import React from 'react';
import { connect } from 'react-redux';

function Products(props) {
  console.log(props.category)
  return (
    <div className="productSection">
      <div className="productSectionHeading">
        <h2>{props.category.activeCategory.displayName}</h2>
        <p>{props.category.activeCategory.description}</p>
      </div>
      <div className="productGrid">
        {props.productList.products.map((product, idx) => (
          <div key={idx} className="product">
            <img src={product.imgUrl} alt="" className="productImg" />
            <p className="productName">{product.name}</p>
            <p className="productDescription">{product.description}</p>
            <div className="productFooter">
              <p>ADD TO CART</p>
              <p>VIEW DETAILS</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  productList: state.productsReducer,
  category: state.categoriesReducer
});

export default connect(mapStateToProps)(Products);