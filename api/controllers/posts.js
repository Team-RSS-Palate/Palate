const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { Post } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?

router.get('/', (req, res) => {
	Post.findAll({}).then((posts) => res.json(posts));
});

router.post('/', (req, res) => {
	let { title, description, ingredients, instructions, image, categories } = req.body;

	Post.create({
		title,
		description,
		ingredients,
		instructions,
		image,
		categories
	})
		.then((post) => {
			res.status(201).json(post);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	Post.findByPk(id).then((post) => {
		if (!post) {
			return res.sendStatus(404);
		}

		res.json(post);
	});
});

// Query multiple posts with similar categories
router.get('/category/:category', (req, res) => {
	const { category } = req.params;
	Post.findAll({ where: { categories: [ category ] } }).then((posts) => res.json(posts));
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	Post.findByPk(id).then((post) => {
		if (!post) {
			return res.sendStatus(404);
		}

		post.destroy();
		res.sendStatus(204);
	});
});

module.exports = router;
