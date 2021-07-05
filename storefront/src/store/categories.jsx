
let initialState = {
  categories: [
    {
      normalizedName: 'FOOD',
      displayName: 'FOOD',
      description: 'Add some sweetness to your bitter life'
    },
    {
      normalizedName: 'ELECTRONICS',
      displayName: 'ELECTRONICS',
      description: 'Expensive Products dont bring happiness with them, be careful'
    }
  ],
  


  activeCategory: {}
};

const categoryReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'ALL_CATEGORY':
      let activeCategory = payload;
      let categories = initialState.categories;
      return { activeCategory, categories };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export const handleActiveCategory = (category) => {
  return {
    type: 'ALL_CATEGORY',
    payload: category
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}

export default categoryReducer;
