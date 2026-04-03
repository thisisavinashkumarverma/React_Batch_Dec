const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

var dbUtil = {
    async getMongodbConnection(data, collectionName, type) {
        console.log("frm get mongo connction")
        try {
            console.log('data');
            console.log(data);
            await client.connect();
            const database = client.db('Shoppinapp');
            const collection = database.collection(collectionName);
            if (type == 'find') {                
                return collection.find(data).toArray();
            } else if (type == 'findProducts') {
                console.log('data.productIds');
                console.log({id: {$in: data.productIds}});
                return collection.find({id: {$in: data.productIds}}).toArray();
            }
        } 
        catch(err) {
            console.log("error")
            console.log(err);
        }   
        finally {
            // await client.close();
        }
    }
}
module.exports = dbUtil;