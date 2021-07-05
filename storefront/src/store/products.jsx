let initialState = {
  products: [
    {
      category: 'FOOD',
      name: 'Knafeh',
      description: 'Melt in sweetness and chess',
      price: 10,
      inventory: 10,
      imgUrl: 'https://www.tooistanbul.com/wp-content/uploads/2015/07/kunefe2-315x157@2x-1.jpg',
    },
    {
      category: 'FOOD',
      name: 'Halqoum',
      description: 'Try it and pray for me',
      price: 30,
      inventory: 10,
      imgUrl: 'https://i1.wp.com/motleyturkey.com/wp-content/uploads/2019/01/Assorted-traditional-turkish-delight-on-white-background-.jpg?resize=1000%2C537&ssl=1',
    },
    {
      category: 'FOOD',
      name: 'Baqlawa',
      description: 'More sugar more happiness ',
      price: 25,
      inventory: 15,
      imgUrl: 'https://d2j6dbq0eux0bg.cloudfront.net/images/46976131/2092332086.jpg',
    },
    
    {
      category: 'ELECTRONICS',
      name: 'Apple Watch',
      description: 'Silver Aluminum Case with Braided Solo Loop',
      price: 449,
      inventory: 20,
      imgUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJX03ref_VW_34FR+watch-40-alum-silver-nc-6s_VW_34FR_WF_CO+watch-face-40-6s-pride_VW_34FR_WF_CO?wid=700&hei=700&trim=1,0&fmt=p-jpg&qlt=95&.v=1619841295000,1599523431000,1620834614000',
    },
    {
      category: 'ELECTRONICS',
      name: 'iMac',
      description: 'Apple M1 Chip',
      price: 1299,
      inventory: 5,
      imgUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-pink-selection-hero-202104?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1617492407000',
    },
  {
    category: 'ELECTRONICS',
    name: 'iPhone 12',
    description: 'Magical Colour',
    price: 800,
    inventory: 12,
    imgUrl:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617135051000'


  }
  ]
};

const productsReducer = (state = initialState, action) => {
  let { type,payload } = action;

  switch (type) {
      case 'ALL_CATEGORY':
          let products = initialState.products;
          return { products };

      case 'RESET':
          return initialState;

      default:
          return state;
  }
  
}



export default productsReducer;