import similarPhoto1 from '../../assets/images/similar-test-image-1.png';
import similarPhoto2 from '../../assets/images/similar-test-image-2.png';
import similarPhoto3 from '../../assets/images/similar-test-image-3.png';

export const colorsArray = [{
  red: 204,
  green: 255,
  blue: 229,
},
{
  red: 255,
  green: 197,
  blue: 145,
},
{
  red: 157,
  green: 144,
  blue: 134,
},
];

export const emotionsArray = [`calm`];

export const objectsArray = [`sky`, `sea`, `rock`, `clouds`, `beach`, `sand`, `waves`, `sunset`, `tree`, `sun`];

export const associationsArray = [`vacation`, `walk`, `swimming`];

export const similarPhotosArray = [{
  photoId: 24,
  photoPath: similarPhoto1,
  relatedColors: [{
    red: 56,
    green: 56,
    blue: 56,
  },
  {
    red: 58,
    green: 48,
    blue: 106,
  },
  ],
  relatedFeatures: [`calm`, `mountain`, `tree`, `lake`, `snow`],
},
{
  photoId: 23,
  photoPath: similarPhoto2,
  relatedColors: [{
    red: 100,
    green: 56,
    blue: 4,
  },
  {
    red: 100,
    green: 53,
    blue: 124,
  },
  ],
  relatedFeatures: [`calm`, `mountain`, `tree`, `lake`, `snow`],
},
{
  photoId: 22,
  photoPath: similarPhoto3,
  relatedColors: [{
    red: 56,
    green: 56,
    blue: 56,
  },
  {
    red: 56,
    green: 56,
    blue: 56,
  },
  ],
  relatedFeatures: [`calm`, `mountain`, `tree`, `lake`, `snow`],
}];
