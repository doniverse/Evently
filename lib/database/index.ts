import mongoose from 'mongoose'

let cached = (global as any).mongoose || { conn: null, promise: null}

const MONOGO_URI = process.env.MONGO_URI

export const connectToDatabase = async ()=>{
    if(cached.conn) return cached.conn;

    if(!MONOGO_URI) throw new Error("MongoDB URI is missing")

    cached.promise = cached.promise || mongoose.connect(MONOGO_URI,{
        dbName: 'Cluster0',
        bufferCommands: false
    })

    cached.conn = await cached.promise;

    return cached.conn;



}
