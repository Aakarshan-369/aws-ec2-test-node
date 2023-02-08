import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL = `mongodb://${username}:${password}@ac-hkorii1-shard-00-00.fckv12c.mongodb.net:27017,ac-hkorii1-shard-00-01.fckv12c.mongodb.net:27017,ac-hkorii1-shard-00-02.fckv12c.mongodb.net:27017/?ssl=true&replicaSet=atlas-c0hnaq-shard-0&authSource=admin&retryWrites=true&w=majority`
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;