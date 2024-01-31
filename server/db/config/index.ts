require('dotenv').config()
import { connect, connection } from 'mongoose';
const mongodb = process.env.MONGODB_URI || 'mongodb://localhost:27017/notes';

connect(mongodb)

const db = connection;

db.on('open', () => {
    console.log('db is connected')
});

db.on('error', (error: Error) => {
    console.log(error)
});



export default db;

