import ChickenMasala from '../img/Masala/Chicken Masala 1.JPG';
import FriedPapad from '../img/Papad/Fried Papad/IMG_0400.jpg';
import NormalPapad from '../img/Papad/Papad Normal/greenchilli kapada(med).png';
import AamPickle from '../img/Pickle Bottle Design/Aam Papad Fnt.png';
import SuperFood from '../img/odia_food_img/Superfoods Mix3.png';

export const productData = [
    {
        id : 1,
        name : 'Chicken Masala',
        desc : 'Made with 100% natural gradient kjskdjfak asjdf s dfsdfsdhfk dskfsd fshdkf',
        price : '100',
        imgSrc : ChickenMasala
    },
    {
        id : 2,
        name : 'Fried Papad',
        desc : 'Made with 100% natural gradient kjskdjfak asjdf s dfsdfsdhfk dskfsd fshdkf',
        price : '150',
        imgSrc : FriedPapad
    },
    {
        id : 3,
        name : 'Normal Papad',
        desc : 'Made with 100% natural gradient kjskdjfak asjdf s dfsdfsdhfk dskfsd fshdkf',
        price : '110',
        imgSrc : NormalPapad
    },
    {
        id : 4,
        name : 'Aam Pickles',
        desc : 'Made with 100% natural gradient kjskdjfak asjdf s dfsdfsdhfk dskfsd fshdkf',
        price : '100',
        imgSrc : AamPickle
    }
];

export const categories = [
    {
        id : 1,
        name : "Masala",
        urlParamName : "masala",
        imgSrc : ChickenMasala
    },
    {
        id: 2,
        name : "Fried Papad",
        urlParamName : "fridepapad",
        imgSrc : FriedPapad
    },
    {
        id : 3,
        name : "Normal Papad",
        urlParamName : "normalpapad",
        imgSrc : NormalPapad
    },
    {
        id : 4,
        name : "Pickles",
        urlParamName : "pickles",
        imgSrc : AamPickle
    },
    {
        id : 5,
        name : "Natural Food",
        urlParamName : "naturalfood",
        imgSrc : SuperFood
    }
]