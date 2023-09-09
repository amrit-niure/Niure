import mongoose from 'mongoose';

const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || '');

        console.log("Database Connected...");
    } catch (err) {
        console.error(`${err} did not connect`);
    }
};

export default connectionDB;
