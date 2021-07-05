
let initialState = {
  categories: [
    {
      normalizedName: 'FOOD',
      displayName: 'FOOD',
      description: 'Add some sweetness to your life'
    },
    {
      normalizedName: 'ELECTRONICS',
      displayName: 'ELECTRONICS',
      description: 'Expensive Products dont bring happiness with them, be careful'
    }
  ],
  


  activeCategory: {}
};


const  categories  = (state = initialState, action) => {
	let { type, payload } = action;
	switch (type) {
		case 'ACTIVE':
			let activeCategories = initialState.categories.find((category) => category.name === payload);
			return { categories: initialState.categories, activeCategories };
		default:
			return state;
	}
};

export default  categories ;

export const active = (name) => {
	return {
		type: 'ACTIVE',
		payload: name,
	};
};