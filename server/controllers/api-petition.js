const Articles = require('../models/articles')

const apiRouter = {
    getAllArticles: async (req,res) => {
        try{
            const articles = await Articles.getAllArticles();
            console.log("All articles: ", articles);
            res.json(articles)

        }catch(error){
            res.status(400).json({
                error: error.message
            })
        }
    },

    getArticle: async (req,res) => {
        try{
            const articles = await Articles.getArticle(req.params.name);
            console.log("article: ", articles);
            res.json(articles)

        }catch(error){
            res.status(400).json({
                error: error.message
            })
        }
    },
    getAllMakers: async (req,res) => {
        try{
            const makers = await Articles.getAllMakers();
            console.log("All articles: ", makers);
            res.json(makers)

        }catch(error){
            res.status(400).json({
                error: error.message
            })
        }
    },
}

module.exports = apiRouter