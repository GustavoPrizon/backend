const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    path: {
        type: String,
        required: true,
    }
   }, 
   {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
   }
);

File.virtual('url').get(function(){
    return `http://localhost:3001/files/${encodeURIComponent(this.path)}`;

    const url = process.env.URL || 'http://localhost:3333';

    return `${url}/files/${encodeURIComponent(this.path)}`;
});


module.exports = mongoose.model('File', File);