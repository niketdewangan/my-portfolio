var express = require('express');
var router = express.Router();
const data=[
  {
    title: 'Number guessing game',
    description: 'In this project you will build a small number guessing game. System will select a random number between 1 and 100.',
    image: '/images/number-guessing-game.png',
    link: '/projects/0',
  },
  { 
   title: 'Number guessing game',
   description: 'In this project you will build a small number guessing game. System will select a random number between 1 and 100.',
   image: '/images/number-guessing-game.png',
   link: '/projects/1',
  },
  {
    title: 'Number guessing game',
    description: 'In this project you will build a small number guessing game. System will select a random number between 1 and 100.',
    image: '/images/number-guessing-game.png',
    link: '/projects/2',
  },
  {
    title: 'Number guessing game',
    description: 'In this project you will build a small number guessing game. System will select a random number between 1 and 100.',
    image: '/images/number-guessing-game.png',
    link: '/projects/3',
  },
  {
    title: 'Number guessing game',
    description: 'In this project you will build a small number guessing game. System will select a random number between 1 and 100.',
    image: '/images/number-guessing-game.png', 
    link: '/projects/4',
  },
  {
    title: 'Number guessing game',
    description: 'In this project you will build a small number guessing game. System will select a random number between 1 and 100.',
    image: '/images/number-guessing-game.png',
    link: '/projects/5', 
  }
];

const details=[
  {
    title: 'Number guessing game',
    description: 'ayudgecfseyvesuycfesuyfcdsfutcfdsycq',
    image: '/images/img-02.jpg',
  },
  {
    title: 'Number guessing game',
    description: 'ayudgecfseyvesuycfesuyfcdsfutcfdsycq',
    image: '/images/img-06.jpg',
  },
  {
    title: 'Number guessing game',
    description: 'ayudgecfseyvesuycfesuyfcdsfutcfdsycq',
    image: '/images/img-08.jpg',
  },
  {
    title: 'Number guessing game',
    description: 'ayudgecfseyvesuycfesuyfcdsfutcfdsycq',
    image: '/images/img-03.jpg',
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express hbs',});
});

router.get('/projects', function(req, res, next) {
  res.render('projects', {title: 'Express hbs',projects:data});
});

router.get('/projects/:id', function(req, res) {
  let id = req.params.id;
  console.log('id --- >' , id);
  res.render('project-details', {data : data[id] });
});

router.get('/blog' , function(req, res, next){
  res.render('blog',{title: 'Express hbs',blog:details});
});
 


module.exports = router;
