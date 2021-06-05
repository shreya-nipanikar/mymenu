import veg from './images/vegfried.jpg';
import mutter from './images/mutter.jpg';
import lemon from './images/lemon.jpg';
import thali from './images/thali.jpg';

const menu = [
    {
        id: 1,
        title:'Eggless Pancakes',
        category:'breakfast',
        price: 12,
        img: 'https://www.vegrecipesofindia.com/wp-content/uploads/2018/01/eggless-pancake-recipe-2-500x500.jpg',
        description: 'These whole wheat pancake are fluffy, light and soft. These best pancakes are made with whole wheat flour and without eggs.'
    },
    {
        id: 2,
        title:'Masala dosa',
        category:'breakfast',
        price: 15,
        img: 'https://www.vegrecipesofindia.com/wp-content/uploads/2010/01/masala-dosa-recipe-restaurant-style.jpg',
        description: 'Masala dosa is crispy rice & lentil crepes that are stuffed with a spiced and savory potato filling.'
    },
    {
        id: 3,
        title:'Upma recipe',
        category:'breakfast',
        price: 10,
        img: 'https://www.vegrecipesofindia.com/wp-content/uploads/2009/08/upma-recipe-1.jpg',
        description: 'Upma is a flavorful South Indian breakfast dish made from rava or cream of wheat..'
    },
    {
        id: 4,
        title:'The Wingman',
        category:'Juice',
        price: 15,
        img: 'https://juicerecipes.com/media/cache/79/f0/79f057284ce048b751bc062dfcb4ef4c.jpg',
        description: 'This green recipe is the one to give people who think green juice is "icky" and refuse to touch it simply because its color. That"s juicist..'
    },
    {
        id: 5,
        title:'Sweet Beets',
        category:'Juice',
        price: 12,
        img: 'https://juicerecipes.com/media/cache/c2/b3/c2b35f22a48a2316bf60ad706592ddf4.jpg',
        description: 'Simple and naturally sweet which includes only beets.'
    },
    {
        id: 6,
        title:'Veg fried rice',
        category:'Lunch',
        price: 12,
        img: veg,
        description: 'A popular and flavoured rice recipe made with cooked rice, finely chopped veggies and seasoning ingredients.'
    },
    {
        id: 7,
        title:'Mutter paneer',
        category:'Lunch',
        price: 15,
        img: mutter,
        description: 'Mutter paneer with detailed photo and video recipe. a creamy and rich north indian curry recipe prepared from paneer cubes and green peas.'
    },
    {
        id: 8,
        title:'Lemon Ginger Zinger',
        category:'Juice',
        price: 12,
        img: lemon,
        description: 'Contains pure Apple,Carrot,Lemon,Ginger,Root.'
    },
    {
        id: 9,
        title:'north indian thali',
        category:'Lunch',
        price: 22,
        img: thali,
        description: 'A bouquet of north indian dishes assembled and served in a traditional thali. '
    },

]

export default menu;