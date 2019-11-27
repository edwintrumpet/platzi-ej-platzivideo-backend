const moviesMock = [
  {
    id: 'd9f58094-5e8e-4a2b-ba87-b6d10f0f4d29',
    title: 'Requiem for a Dream',
    year: 2006,
    cover: 'http://dummyimage.com/173x173.jpg/cc0000/ffffff',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    duration: 1901,
    contentRating: 'PG',
    source: 'http://youku.com/porttitor/lacus/at/turpis.jsp',
    tags: ['Comedy', 'Action|Drama', 'Adventure']
  },
  {
    id: '3cb1afda-5a3c-410d-86b3-e8477ef176f1',
    title: 'Agora',
    year: 1986,
    cover: 'http://dummyimage.com/110x235.png/dddddd/000000',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    duration: 1945,
    contentRating: 'PG-13',
    source: 'http://nature.com/maecenas/ut/massa/quis/augue.js',
    tags: [
      'Action|Adventure|Drama',
      'Drama|Romance|War',
      'Comedy|Drama|Romance',
      'Comedy',
      'Comedy|Musical'
    ]
  },
  {
    id: 'fe5b5999-4f6a-48fd-86ee-cda676e73355',
    title: 'How to Cook Your Life',
    year: 2001,
    cover: 'http://dummyimage.com/237x170.bmp/ff4444/ffffff',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    duration: 1943,
    contentRating: 'R',
    source: 'https://cyberchimps.com/quisque.aspx',
    tags: ['Sci-Fi|Thriller|Western', 'Comedy']
  },
  {
    id: '9c29a755-dbdc-4908-b7e6-bc14dae5a93a',
    title: 'My Cousin Vinny',
    year: 2013,
    cover: 'http://dummyimage.com/155x216.jpg/dddddd/000000',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    duration: 2054,
    contentRating: 'PG-13',
    source: 'https://marketwatch.com/vel/sem/sed/sagittis/nam/congue/risus.jpg',
    tags: [
      'Documentary',
      'Crime|Drama|Horror|Thriller',
      'Action|Comedy|Crime',
      'Adventure|Fantasy|Thriller|IMAX'
    ]
  },
  {
    id: 'f2437939-8c45-4a76-85d8-6ed863d7b766',
    title:
      "Men Who Tread on the Tiger's Tail, The (Tora no o wo fumu otokotachi)",
    year: 2008,
    cover: 'http://dummyimage.com/171x207.bmp/dddddd/000000',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    duration: 1916,
    contentRating: 'G',
    source: 'https://mapquest.com/quam/pharetra/magna/ac.jpg',
    tags: [
      'Western',
      'Adventure|Comedy|Romance',
      'Crime|Drama|Thriller',
      'Comedy|Drama|Romance',
      'Comedy'
    ]
  },
  {
    id: 'a0e86457-2479-42df-b3a6-0adfa7d76137',
    title: 'Fox and His Friends (Faustrecht der Freiheit)',
    year: 2008,
    cover: 'http://dummyimage.com/166x239.png/dddddd/000000',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 1957,
    contentRating: 'G',
    source: 'https://army.mil/vestibulum/aliquet.jpg',
    tags: ['Documentary', 'Comedy|Romance', 'Comedy|Drama|Romance']
  },
  {
    id: '08d63680-e059-4cbc-bc5f-c3d35e0b8f2b',
    title: 'California Solo',
    year: 2010,
    cover: 'http://dummyimage.com/158x240.bmp/cc0000/ffffff',
    description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 1945,
    contentRating: 'G',
    source:
      'https://google.co.uk/mauris/vulputate/elementum/nullam/varius/nulla.json',
    tags: ['Action|Comedy|Crime|Drama|Horror|Thriller', 'Comedy|Musical']
  },
  {
    id: '7c46f8a1-2543-4ad0-9cee-6b6b9d5c5ea1',
    title: 'Are All Men Pedophiles',
    year: 2005,
    cover: 'http://dummyimage.com/143x106.bmp/cc0000/ffffff',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    duration: 2069,
    contentRating: 'R',
    source: 'https://mayoclinic.com/id/ligula/suspendisse/ornare.aspx',
    tags: ['Drama|Romance', 'Documentary', 'Documentary']
  },
  {
    id: '63ba3a68-953e-45c6-9e16-47647c3d3934',
    title: 'Beyond the Black Rainbow',
    year: 2001,
    cover: 'http://dummyimage.com/243x220.bmp/5fa2dd/ffffff',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    duration: 1898,
    contentRating: 'G',
    source: 'https://uiuc.edu/nibh/in/lectus/pellentesque/at.png',
    tags: [
      'Adventure|Drama|Thriller',
      'Adventure|Comedy|Fantasy',
      'Drama|Romance',
      'Documentary'
    ]
  },
  {
    id: '6ba89c50-9c91-4c94-8d9f-5a73968d38b4',
    title: 'Talladega Nights: The Ballad of Ricky Bobby',
    year: 1992,
    cover: 'http://dummyimage.com/215x212.png/cc0000/ffffff',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    duration: 1943,
    contentRating: 'G',
    source: 'https://nydailynews.com/quam/sollicitudin/vitae.aspx',
    tags: ['Drama|Film-Noir', 'Horror|Mystery|Thriller']
  }
];

module.exports = {
  moviesMock
};
