import mongoose from 'mongoose';

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Mongo Connection succeeded.')
    } catch (e) {
        throw new Error('Error in connecting to mongodb.')
    }
};

export default connect
