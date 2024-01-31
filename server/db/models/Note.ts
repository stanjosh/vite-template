import mongoose from 'mongoose';


const NoteSchema = new mongoose.Schema({
    title: String,
    body: String,
    date: Date
});

const Note = mongoose.model('Note', NoteSchema);

export default Note;