import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.get('/states', (req, res) => {
  res.json({
    states: [
      {
        name: 'RJ',
      },
      {
        name: 'SP',
      },
    ],
  });
});

server.post('/user/signup', (req, res) => {
  res.json({ token: '12345' });
});

server.post('/user/signin', (req, res) => {
  res.json({ token: '12345' });
});

server.get('/categories', (req, res) => {
  res.json({
    categories: [
      {
        id: 1,
        img: 'https://www.clipartmax.com/png/middle/255-2554213_noc-category-icon-file-manager.png',
        name: 'Categoria 1',
      },
    ],
  });
});

server.get('/ad/list', (req, res) => {
  res.json({
    ads: [
      {
        id: 1,
        image:
          'https://cdn.pixabay.com/photo/2012/11/21/17/02/lion-66898_960_720.jpg',
        title: 'item 1',
        price: 100.0,
      },
      {
        id: 1,
        image:
          'https://www.macau.rn.leg.br/images/galeria_em_artigos/image04_grd.png',
        title: 'item 2',
        price: 50.0,
      },
    ],
  });
});

server.post('/ad/add', (req, res) => {
  res.json({
    id: '12345',
  });
});

server.get('/ad/item', (req, res) => {
  res.json({
    id: '12345',
    title: 'Post 1',
    images: [
      'https://cdn.pixabay.com/photo/2012/11/21/17/02/lion-66898_960_720.jpg',
      'https://www.macau.rn.leg.br/images/galeria_em_artigos/image04_grd.png',
      'https://cdn.pixabay.com/photo/2012/11/21/17/02/lion-66898_960_720.jpg',
      'https://www.macau.rn.leg.br/images/galeria_em_artigos/image04_grd.png',
    ],
    dateCreated: '12',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dignissimos sed consectetur ab cumque quaerat consequuntur ipsam, natus voluptas enim ex ratione tempore ipsa ipsum, odio praesentium quasi maxime impedit.',
    views: '123',
    priceNegotiabled: false,
    price: 100,
    stateName: 'SP',
    userInfo: {
      email: 'teste@gmail.com',
      name: 'Usuario 1',
      stateName: 'SP',
    },
    category: {
      id: 1,
      slug: 'categoria-1',
      name: 'Categoria 1',
    },
    others: [
      {
        id: 1,
        image:
          'https://www.macau.rn.leg.br/images/galeria_em_artigos/image04_grd.png',
        title: 'Teste',
        price: '100.00',
      },
    ],
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT}`);
});
