import mongoose, { mongo } from 'mongoose'

async function conectaNaDB() {
    mongoose.connect("mongodb+srv://admin:root@cluster0.nw0hmxi.mongodb.net/livraria?retryWrites=true&w=majority")
    return mongoose.connection;
};

export default conectaNaDB;

