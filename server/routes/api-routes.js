const router = require('express').Router()
const apiRouter = require('../controllers/api-petition')

router.get('/articles', apiRouter.getAllArticles) 
router.get('/makers', apiRouter.getAllMakers) 


//article by id
router.get('/articles/:name', apiRouter.getArticle) 

module.exports = router