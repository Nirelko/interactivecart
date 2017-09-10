import Product from './index';

export default seeder => {
  seeder.addSeed(Product, [
    {
      id: '7290019297628',
      name: 'ששון הקולה שקד טבעי',
      price: 15.60,
      image: {contentType: '', data: ''}
    },
    {
      id: '1',
      name: 'מוצר לבדיקה',
      price: 11.11,
      image: {contentType: '', data: ''}
    }
  ]);
};