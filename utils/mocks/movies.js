const moviesMock = [
  {
    id: 'c0bdc010-e453-48fa-80d4-8e5df4ea808c',
    title: '2 Days in Paris',
    year: 2025,
    cover: 'http://dummyimage.com/127x230.jpg/ff4444/ffffff',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    duration: 210,
    contentRating: 'G',
    source: 'https://mozilla.org/at/nunc.png',
    tags: ['Drama|Romance|War', 'Comedy', 'Comedy', 'Drama', 'Comedy|Western']
  },
  {
    id: '6d159c2c-96a9-405e-9595-36b85850be97',
    title: 'The Last Journey',
    year: 1897,
    cover: 'http://dummyimage.com/159x140.png/cc0000/ffffff',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    duration: 231,
    contentRating: 'PG-13',
    source:
      'http://army.mil/in/lectus/pellentesque/at/nulla/suspendisse/potenti.jpg',
    tags: ['Horror', 'Comedy|Crime|Drama', 'Comedy|Drama', 'Comedy']
  },
  {
    id: '98573c73-41a4-4824-959b-f3cca20dedc5',
    title: 'Brave',
    year: 1953,
    cover: 'http://dummyimage.com/154x189.bmp/ff4444/ffffff',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    duration: 98,
    contentRating: 'PG',
    source: 'http://mediafire.com/convallis/morbi.jsp',
    tags: [
      'Children|Comedy',
      'Drama|War',
      'Animation|Children|Drama|Musical|Romance',
      'Drama',
      'Comedy'
    ]
  },
  {
    id: 'c9a66ea2-9ab2-4eba-9916-7e49658cc7ef',
    title: 'Claustrofobia',
    year: 1982,
    cover: 'http://dummyimage.com/200x174.png/5fa2dd/ffffff',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    duration: 72,
    contentRating: 'PG-13',
    source: 'https://clickbank.net/hac/habitasse/platea/dictumst.aspx',
    tags: ['Action|Drama|Romance|War', 'Action|Fantasy|Sci-Fi']
  },
  {
    id: '7db08f15-ed4a-477e-b660-fbc8613fdef1',
    title: 'Forgiven',
    year: 1968,
    cover: 'http://dummyimage.com/238x230.jpg/cc0000/ffffff',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    duration: 76,
    contentRating: 'R',
    source: 'http://columbia.edu/mattis/nibh/ligula/nec.png',
    tags: [
      'Adventure|Animation|Children|Comedy',
      'Comedy|Fantasy|Mystery',
      'Comedy|Drama',
      'Comedy|Crime|Drama|Mystery'
    ]
  },
  {
    id: 'ab07a89b-c3cc-4a1a-9b50-8374b4486100',
    title: 'Dear John',
    year: 1963,
    cover: 'http://dummyimage.com/150x219.jpg/5fa2dd/ffffff',
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    duration: 120,
    contentRating: 'PG-13',
    source: 'http://alexa.com/nulla/eget/eros/elementum/pellentesque.png',
    tags: ['Comedy']
  },
  {
    id: '09805f67-df62-49e7-ab5b-4ba801f9b96e',
    title: '21-87',
    year: 2003,
    cover: 'http://dummyimage.com/151x177.jpg/cc0000/ffffff',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    duration: 168,
    contentRating: 'R',
    source:
      'https://hostgator.com/consequat/metus/sapien/ut/nunc/vestibulum/ante.xml',
    tags: ['Drama|Mystery', 'Action|Fantasy|Thriller', 'Comedy', 'Comedy|Drama']
  },
  {
    id: '8b0dfa21-7750-407a-b3a9-290ca1a094eb',
    title: 'Outcast of the Islands',
    year: 1946,
    cover: 'http://dummyimage.com/222x150.png/dddddd/000000',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    duration: 15,
    contentRating: 'G',
    source: 'http://fotki.com/posuere/cubilia/curae/nulla/dapibus/dolor.aspx',
    tags: ['Drama', 'Comedy|Drama|Romance']
  },
  {
    id: '7000bced-44a0-4d56-996f-f26509065f2d',
    title: 'Girlfight',
    year: 2034,
    cover: 'http://dummyimage.com/205x211.bmp/5fa2dd/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    duration: 26,
    contentRating: 'PG',
    source: 'http://spiegel.de/non/velit/nec/nisi.jsp',
    tags: [
      'Action|Adventure|Crime|Romance|Western',
      'Action|Adventure|Thriller',
      'Comedy',
      'Comedy|Romance',
      'Documentary'
    ]
  },
  {
    id: '41ef70d5-98d5-434d-b696-0b0faf0dc898',
    title: 'Bully',
    year: 2045,
    cover: 'http://dummyimage.com/227x159.bmp/dddddd/000000',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    duration: 193,
    contentRating: 'PG',
    source: 'http://bloomberg.com/eget.xml',
    tags: [
      'Horror|Sci-Fi',
      'Drama',
      'Animation|Comedy|Drama',
      'Comedy',
      'Drama'
    ]
  }
];

module.exports = {
  moviesMock
};
