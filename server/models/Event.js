import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
});

const Event = mongoose.model('Event', eventSchema);

export default Event;