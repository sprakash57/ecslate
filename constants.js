import { Dimensions } from 'react-native';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
export const shop = require('./assets/shop.png');
export const men1 = require('./assets/men1.jpg');
export const men2 = require('./assets/men2.jpg');
export const men3 = require('./assets/men3.jpg');
export const men4 = require('./assets/men4.jpg');
export const woman1 = require('./assets/woman1.jpg');
export const woman2 = require('./assets/woman2.jpg');
export const woman3 = require('./assets/woman3.jpg');
export const woman4 = require('./assets/woman4.png');

export const DB = [
    {
        id: 0,
        category: 'man',
        featured: true,
        bestSell: false,
        price: '$35',
        prevPrice: '$39',
        title: 'Polo',
        image: men1,
        rating: {
            value: '4.1',
            status: 'Good'
        },
        reviews: 48
    },
    {
        id: 1,
        category: 'man',
        featured: true,
        bestSell: true,
        price: '$40',
        prevPrice: '$45',
        title: 'Shirt',
        image: men2,
        rating: {
            value: '4.0',
            status: 'Good'
        },
        reviews: 30
    },
    {
        id: 2,
        category: 'man',
        featured: true,
        bestSell: true,
        price: '$50',
        prevPrice: '$51',
        title: 'Formals',
        image: men3,
        rating: {
            value: '4.3',
            status: 'Very Good'
        },
        reviews: 61
    },
    {
        id: 3,
        category: 'man',
        featured: false,
        bestSell: true,
        price: '$61',
        prevPrice: '$68',
        title: 'Wedding',
        image: men4,
        rating: {
            value: '3.5',
            status: 'Average'
        },
        reviews: 10
    },
    {
        id: 4,
        category: 'woman',
        featured: false,
        bestSell: true,
        price: '$30',
        prevPrice: '$39',
        title: 'Floral dress',
        image: woman1,
        rating: {
            value: '4.5',
            status: 'Very Good'
        },
        reviews: 47
    },
    {
        id: 5,
        category: 'woman',
        featured: true,
        bestSell: true,
        price: '$50',
        prevPrice: '$56',
        image: woman2,
        title: 'Black off shoulder',
        rating: {
            value: '4.0',
            status: 'Good'
        },
        reviews: 26
    },
    {
        id: 6,
        category: 'woman',
        featured: true,
        bestSell: true,
        price: '$35',
        prevPrice: '$56',
        title: 'Brown top',
        image: woman3,
        rating: {
            value: '4.1',
            status: 'Good'
        },
        reviews: 57
    },
    {
        id: 7,
        category: 'woman',
        featured: true,
        bestSell: false,
        price: '$85',
        prevPrice: '$89',
        title: 'Black top',
        image: woman4,
        rating: {
            value: '4.1',
            status: 'Good'
        },
        reviews: 12
    }
]