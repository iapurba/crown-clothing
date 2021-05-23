const INITIAL_STATE = {
  sections: [
    {
      id: 1,
      title: 'hats',
      linkUrl: 'shop/hats',
      imageUrl: 'https://images.unsplash.com/photo-1613114943550-c2c2628b9ac9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    {
      id: 2,
      title: 'sneakers',
      linkUrl: 'shop/sneakers',
      imageUrl: 'https://images.unsplash.com/photo-1612902376491-7a8a99b424e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
    },
    {
      id: 3,
      title: 'jackets',
      linkUrl: 'shop/jackets',
      imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    {
      id: 4,
      title: 'mens',
      linkUrl: 'shop/mens',
      imageUrl: 'https://images.unsplash.com/photo-1508243529287-e21914733111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
      size: 'large'
    },
    {
      id: 5,
      title: 'womens',
      linkUrl: 'shop/womens',
      imageUrl: 'https://images.unsplash.com/photo-1581404917879-53e19259fdda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80',
      size: 'large'
    },
  ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;