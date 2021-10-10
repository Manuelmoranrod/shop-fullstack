const dbsql = require('../utils/DBsql')


const users = {

    //Select article by article-name
    getArticle: async (article) => {
        let client, result;
        try {
            
            client = await dbsql.connect();
            result = await dbsql.query('SELECT * FROM articles WHERE article=$1', [article])
            //console.log(result.rows);
            return result.rows
        } catch (e) {
            console.log(e);
            throw e;
        }
        finally {
            client.release();
        }
    },
    //Obtener todos los articles 
    getAllArticles: async () => {
        let client, result;
        try {
            client = await dbsql.connect();
            result = await dbsql.query('SELECT * FROM articles')
            //console.log(result.rows);
            return result.rows
        } catch (e) {
            console.log(e);
            throw e;
        }
        finally {
            client.release();
        }
    },
    //Select maker by maker-name
    getMaker: async (maker) => {
        let client, result;
        try {
            client = await dbsql.connect();
            result = await dbsql.query('SELECT * FROM makers WHERE maker=$1', [maker])
            //console.log(result.rows);
            return result.rows
        } catch (e) {
            console.log(e);
            throw e;
        }
        finally {
            client.release();
        }
    },
}
module.exports = users