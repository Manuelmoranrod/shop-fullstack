const router = require('express').Router()
const apiRouter = require('../controllers/api-petition')

router.get('/articles', apiRouter.getAllArticles) 

//article by id
router.get('/articles/:name', apiRouter.getArticle) 

module.exports = router